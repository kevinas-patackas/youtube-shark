import {
  YoutubeCommentThreadListResponse,
  YoutubeVideosListResponse,
} from "@/types/youtubeApi";
import {
  YoutubeSharkComment,
  YoutubeSharkVideoCommentDetails,
  YoutubeSharkVideoCommentDetailsApiResponse,
  YoutubeSharkVideoCommentDetailsBase,
  YoutubeSharkVideoCommentsCacheData,
} from "@/types/youtubeShark";
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, Db } from "mongodb";
import { DateTime } from "luxon";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<YoutubeSharkVideoCommentDetailsApiResponse>
) {
  console.log(`incoming event with query: ${JSON.stringify(req.query)}`);
  const youtubeApiKey = process.env["YOUTUBE_API_KEY"];
  const mongoUri = process.env["MONGODB_URI"];
  const databaseName = process.env["MONGODB_DATABASE_NAME"];
  const collectionName = process.env["MONGODB_COMMENTS_COLLECTION"];

  if (!youtubeApiKey || !mongoUri || !databaseName || !collectionName) {
    console.error("Application is not configured");
    res.status(500).end("Application is not configured");
    return;
  }

  const { videoId } = req.query;
  if (typeof videoId !== "string") {
    console.error("videoId query parameter is missing");
    res.status(400).end("videoId query parameter is missing");
    return;
  }

  try {
    const videoIds = videoId.split(",").map((i) => i.trim());
    const items: YoutubeSharkVideoCommentDetails[] = [];
    const notFound: string[] = [];

    const db = await getDatabaseConnection(mongoUri, databaseName);
    console.log("database connection initialized");

    for (const id of videoIds) {
      console.log(`getting videoId ${id} data from mongo`);
      const cachedVideoComments = await getCachedDataFromMongo(
        db,
        collectionName,
        id
      );

      if (cachedVideoComments) {
        console.log(`videoId ${id} retrieved from mongo`);
        items.push({
          id: cachedVideoComments.id,
          title: cachedVideoComments.title,
          comments: cachedVideoComments.comments,
          cached: true,
        });

        continue;
      }

      console.log(`videoId ${id} not found in mongo cache`);
      console.log(`getting videoId ${id} video data from youtube API`);
      const videoDetails = await getVideoDetails(id, youtubeApiKey);

      if (!videoDetails) {
        console.log(`videoId ${id} not found in youtube`);
        notFound.push(id);
        continue;
      }

      console.log(`getting videoId ${id} comments data from youtube API`);
      const comments = await getVideoComments(id, youtubeApiKey);
      const result: YoutubeSharkVideoCommentDetails = {
        id: videoDetails.id,
        title: videoDetails.title,
        comments,
      };

      items.push(result);
      console.log(`saving videoId ${id} to mongo`);
      await cacheDataToMongo(db, collectionName, result);
    }

    res.status(200).json({
      items: items,
      notFound,
    });
  } catch (error) {
    res.status(500).end("Internal Error");
  }
}

async function getVideoComments(
  videoId: string,
  youtubeApiKey: string
): Promise<YoutubeSharkComment[]> {
  const baseUrl = "https://www.googleapis.com/youtube/v3/commentThreads";
  const parameters = new URLSearchParams({
    textFormat: "plainText",
    part: "snippet",
    order: "time",
    maxResults: "20",
    key: youtubeApiKey,
    videoId,
  });

  const apiResponse = await fetch(`${baseUrl}?${parameters}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!apiResponse.ok) {
    if (apiResponse.status === 404) {
      return [];
    }

    console.error(`HTTP Request failed with code: ${apiResponse.status}`);
    throw new Error(`HTTP Request failed with code: ${apiResponse.status}`);
  }

  const commentThreadList: YoutubeCommentThreadListResponse =
    await apiResponse.json();

  return commentThreadList.items.map((item) => {
    const { id } = item.snippet.topLevelComment;
    const {
      textDisplay,
      authorDisplayName,
      authorProfileImageUrl,
      authorChannelUrl,
      likeCount,
      publishedAt,
    } = item.snippet.topLevelComment.snippet;

    return {
      id,
      author: {
        name: authorDisplayName,
        imageUrl: authorProfileImageUrl,
        channelUrl: authorChannelUrl,
      },
      comment: textDisplay,
      likeCount,
      publishedAt,
    };
  });
}

async function getVideoDetails(
  videoId: string,
  youtubeApiKey: string
): Promise<YoutubeSharkVideoCommentDetailsBase | null> {
  const baseUrl = "https://www.googleapis.com/youtube/v3/videos";
  const parameters = new URLSearchParams({
    part: "snippet",
    key: youtubeApiKey,
    id: videoId,
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

  const videosList: YoutubeVideosListResponse = await apiResponse.json();

  if (!videosList.items.length) {
    return null;
  }

  const { title } = videosList.items[0].snippet;
  const { id } = videosList.items[0];

  return {
    id,
    title,
  };
}

async function getCachedDataFromMongo(
  db: Db,
  collection: string,
  videoId: string
): Promise<YoutubeSharkVideoCommentDetails | null> {
  const video = await db
    .collection<YoutubeSharkVideoCommentsCacheData>(collection)
    .findOne({ videoId });

  const isExpired = (cachedVideo: YoutubeSharkVideoCommentsCacheData) => {
    const expireAfterMinutes = Number(
      process.env["MONGODB_COMMENTS_EXPIRATION_MINUTES"] ?? 1440
    );
    const minutesSinceCached = DateTime.utc()
      .diff(DateTime.fromISO(cachedVideo.cachedAt))
      .as("minutes");

    return expireAfterMinutes < minutesSinceCached;
  };

  if (video && !isExpired(video)) {
    return JSON.parse(video.rawData);
  }

  return null;
}

async function cacheDataToMongo(
  db: Db,
  collection: string,
  data: YoutubeSharkVideoCommentDetails
): Promise<void> {
  const stringified = JSON.stringify(data);
  const cachedAt = DateTime.utc().toISO();

  await db
    .collection(collection)
    .updateOne(
      { videoId: data.id },
      { $set: { videoId: data.id, cachedAt, rawData: stringified } },
      { upsert: true }
    );
}

async function getDatabaseConnection(
  mongoUri: string,
  dbName: string
): Promise<Db> {
  const client = await MongoClient.connect(mongoUri);
  return client.db(dbName);
}
