import { YoutubeSearchListResponse } from "@/types/youtubeApi";
import {
  YoutubeWavesData,
  YoutubeWavesDisplayDetails,
  YoutubeWavesFieldTypes,
} from "@/types/youtubeShark";
import { DateTime } from "luxon";
import { Db, MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const youtubeApiKey = process.env["YOUTUBE_API_KEY"];
  const mongoUri = process.env["MONGODB_URI"];
  const databaseName = process.env["MONGODB_DATABASE_NAME"];
  const collectionName = process.env["MONGODB_WAVES_COLLECTION"];
  const slackWebhookUrl = process.env["SLACK_WEBHOOK_URL"];

  if (
    !youtubeApiKey ||
    !mongoUri ||
    !databaseName ||
    !collectionName ||
    !slackWebhookUrl
  ) {
    console.error("Application is not configured");
    res.status(500).end("Application is not configured");
    return;
  }

  const db = await getDatabaseConnection(mongoUri, databaseName);
  const lastCheckedAtAndKeywordsInDb = await getLastCheckedAtAndKeywords(
    db,
    collectionName
  );

  let lastCheckedAt = lastCheckedAtAndKeywordsInDb.lastCheckedAt;
  let keywords = lastCheckedAtAndKeywordsInDb.keywords;

  if (!keywords) {
    console.error("keywords are missing in database");
    res.status(400).end("keywords are missing in database");
    return;
  }

  if (!lastCheckedAt) {
    lastCheckedAt = DateTime.utc().toISO();
    await setLastCheckedAt(db, collectionName, lastCheckedAt);
  }

  const newVideos = await getVideosSinceLastChecked(
    youtubeApiKey,
    lastCheckedAt,
    keywords
  );

  const latestUploadTime = newVideos
    .map((i) => i.publishedAt)
    .sort()
    .reverse()[0];
  if (latestUploadTime) {
    await setLastCheckedAt(db, collectionName, latestUploadTime);
  }

  const sortedNewVideos = newVideos.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return -1;
    }
    if (a.publishedAt > b.publishedAt) {
      return 1;
    }
    return 0;
  });

  for (const video of sortedNewVideos) {
    await postVideoDetailsToSlack(slackWebhookUrl, video, keywords);
  }

  console.log(
    `new videos found: ${sortedNewVideos.map((i) => i.id).join(", ")}`
  );
  res.status(200).json(newVideos);
}

async function getVideosSinceLastChecked(
  youtubeApiKey: string,
  lastCheckedAt: string,
  keywords: string
): Promise<YoutubeWavesDisplayDetails[]> {
  const baseUrl = "https://youtube.googleapis.com/youtube/v3/search";

  const result: YoutubeWavesDisplayDetails[] = [];
  let pagesSearched = 0;

  const searchVideos = async (pageToken?: string) => {
    const parameters = new URLSearchParams({
      part: "snippet",
      key: youtubeApiKey,
      maxResults: "5",
      order: "date",
      publishedAfter: lastCheckedAt,
      q: keywords,
      ...(pageToken ? { pageToken } : {}),
    });

    const apiResponse = await fetch(`${baseUrl}?${parameters}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!apiResponse.ok) {
      if (apiResponse.status === 404) {
        return null;
      }

      console.error(`HTTP Request failed with code: ${apiResponse.status}`);
      throw new Error(`HTTP Request failed with code: ${apiResponse.status}`);
    }

    const videosList: YoutubeSearchListResponse = await apiResponse.json();

    result.push(
      ...videosList.items.map((i) => ({
        id: i.id.videoId,
        title: i.snippet.title,
        publishedAt: i.snippet.publishedAt,
      }))
    );

    pagesSearched++;
    if (videosList.nextPageToken && pagesSearched < 2) {
      await searchVideos(videosList.nextPageToken);
    }
  };

  await searchVideos();

  return result;
}

async function setLastCheckedAt(
  db: Db,
  collection: string,
  lastCheckedAt: string
): Promise<void> {
  await db.collection(collection).updateOne(
    { type: YoutubeWavesFieldTypes.LastCheckedDateTime },
    {
      $set: {
        type: YoutubeWavesFieldTypes.LastCheckedDateTime,
        value: lastCheckedAt,
      },
    },
    { upsert: true }
  );
}

async function getLastCheckedAtAndKeywords(
  db: Db,
  collection: string
): Promise<{
  lastCheckedAt?: string;
  keywords?: string;
}> {
  const lastCheckedAtDoc = await db
    .collection<YoutubeWavesData>(collection)
    .findOne({ type: YoutubeWavesFieldTypes.LastCheckedDateTime });
  const keywordsDoc = await db
    .collection<YoutubeWavesData>(collection)
    .findOne({ type: YoutubeWavesFieldTypes.Keywords });

  let lastCheckedAt: string | undefined;
  if (lastCheckedAtDoc) {
    lastCheckedAt = lastCheckedAtDoc.value;
  }

  let keywords: string | undefined;
  if (keywordsDoc) {
    keywords = keywordsDoc.value;
  }

  return {
    lastCheckedAt,
    keywords,
  };
}

async function getDatabaseConnection(
  mongoUri: string,
  dbName: string
): Promise<Db> {
  const client = await MongoClient.connect(mongoUri);
  return client.db(dbName);
}

async function postVideoDetailsToSlack(
  slackWebhookUrl: string,
  videoDetails: YoutubeWavesDisplayDetails,
  keywords: string
): Promise<void> {
  const slackMessageBlocks = {
    blocks: [
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `New video with keywords: *${keywords}*`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*${videoDetails.title}*\nPublished at: ${videoDetails.publishedAt}`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "click to go to youtube",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Check out video",
            emoji: true,
          },
          value: "click_link",
          url: `https://www.youtube.com/watch?v=${videoDetails.id}`,
          action_id: "button-action",
        },
      },
      {
        type: "divider",
      },
    ],
  };

  await fetch(slackWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(slackMessageBlocks),
  });
}
