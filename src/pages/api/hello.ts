// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import { DateTime } from "luxon";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const parameters = new URLSearchParams({
    postId: "1",
  });

  console.log("req");
  console.log("req");

  console.log(req.query);

  console.log("req");
  console.log("req");

  console.log("atejau ce");
  // const apiResult = await fetch(
  //   `https://jsonplaceholder.typicode.com/comments?${parameters}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  // const asJson = await apiResult.json();

  // console.log("as cionais esu");
  // const MONGODB_URI =
  //   "mongodb+srv://patackaskevinas:3TX6XRvYrd7o4IJ1@youtubeshark.1klw20e.mongodb.net/?retryWrites=true&w=majority";
  // const client = await MongoClient.connect(MONGODB_URI);

  // // Specify which database we want to use
  // const db = client.db("sample_mflix");

  // const movies = await db.collection("movies").find({}).limit(20).toArray();

  // const abc = DateTime.utc().toISO();
  // console.log("AAAAAAAA", abc);

  console.log(
    "ce",
    DateTime.utc()
      .diff(DateTime.fromISO("2023-03-15T09:43:24.061Z"))
      .as("minutes")
  );

  res.status(200).json({});
}

const abc = {
  kind: "youtube#commentThreadListResponse",
  etag: "ivCyhF5PNFQkZp4gGU6aWH5bROs",
  nextPageToken:
    "QURTSl9pMFFtVEZTS2VaeDFEUXJ0UkZxdnFjLXdsYUp5eTlfRjZubzZlbjRoRVFRRlVUYUp6cS1EVTJBeFNkVXpLaEc1bVdKTzJqZWpucEJuSDVydGl4RVMwSDVkRWlIdFE=",
  pageInfo: {
    totalResults: 20,
    resultsPerPage: 20,
  },
  items: [
    {
      kind: "youtube#commentThread",
      etag: "pOED5IBQ387VV5nX0LmRuqSDMjc",
      id: "UgxcieYpDSkM6_J5duV4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "EPvAHCRc_eptig33ztMpqbqPOvo",
          id: "UgxcieYpDSkM6_J5duV4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "ESR HaloLock Geo Wallet Stand ➡ https://www.kickstarter.com/projects/1180816862/404773471?ref=38i124",
            textOriginal:
              "ESR HaloLock Geo Wallet Stand ➡ https://www.kickstarter.com/projects/1180816862/404773471?ref=38i124",
            authorDisplayName: "Max Tech",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AL5GRJXcu3BB0ST_YxltYmlbGpYxIqWjAgkiFF81qiL6mg=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCptwuAv0XQHo1OQUSaO6NHw",
            authorChannelId: {
              value: "UCptwuAv0XQHo1OQUSaO6NHw",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 1,
            publishedAt: "2023-03-14T14:07:28Z",
            updatedAt: "2023-03-14T14:07:28Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "erLhbZUJB7vnO5U3rXhCvxrwtW8",
      id: "UgwdGFcK6FLz1sgWq694AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "8STQQPI0Kk2d9C3vQGzsxNZ9XLY",
          id: "UgwdGFcK6FLz1sgWq694AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "If the button are going like the Touch ID button how are we going to turn on our phone if it's shut down?",
            textOriginal:
              "If the button are going like the Touch ID button how are we going to turn on our phone if it's shut down?",
            authorDisplayName: "Pear.",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/-QD_N6FlofhD8Cpryb4JTQ3TJh2EI-7cv2JfmVaOWCaqq0Qc43x0Qsm4nLcSbMeDBo9fbEmM-pM=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UChNIQXLzT_we4VPx25jZOtQ",
            authorChannelId: {
              value: "UChNIQXLzT_we4VPx25jZOtQ",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-03-14T16:34:37Z",
            updatedAt: "2023-03-14T16:34:37Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "_GeboJtgtITcfGAqcaOPRTgy4X4",
      id: "UgzY5OSkShmFsujG-UV4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "ts2aeJxCcgopSZ6c96HvaDc2aI0",
          id: "UgzY5OSkShmFsujG-UV4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "Can‘t wait to use my iPhone deep under water in salt water.  That‘s really what the masses are waiting for!",
            textOriginal:
              "Can‘t wait to use my iPhone deep under water in salt water.  That‘s really what the masses are waiting for!",
            authorDisplayName: "Tommy P.",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AL5GRJWdeKmE8tdZt82KAUiMaF1sqcuXe_Hg-Am-LYQqjQ=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCKeFHtPEZMLS0hYw2bFXGoA",
            authorChannelId: {
              value: "UCKeFHtPEZMLS0hYw2bFXGoA",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-03-14T16:25:29Z",
            updatedAt: "2023-03-14T16:25:29Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "lAC25sR7mjWnmhsGAekyHmn3nhg",
      id: "UgzTSn7es1tlFOAcxAt4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "kbnd12oZWLWXx5wSj32jSNBpBdA",
          id: "UgzTSn7es1tlFOAcxAt4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "This new redesign kinda reminds me of the 5c but with a bigger full screen.",
            textOriginal:
              "This new redesign kinda reminds me of the 5c but with a bigger full screen.",
            authorDisplayName: "Lu",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/D3qQuEVN-10LcNy0-PAUjsxYvpZctkgL50K_JibifoksgZOakin-vC8teDUxcq8bBN08vhY6VRQ=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCZGP_7c4TsK_bDR4EOZGmng",
            authorChannelId: {
              value: "UCZGP_7c4TsK_bDR4EOZGmng",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 2,
            publishedAt: "2023-03-14T16:24:30Z",
            updatedAt: "2023-03-14T16:24:30Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "uXqsmGl-4m_nhHuvb39_CZXdNmg",
      id: "Ugz9yM76DcCZmk5szMp4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "6LkUqVrrPgeP4WJzbVw-WIYX8qs",
          id: "Ugz9yM76DcCZmk5szMp4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "I have iPhone 13 Pro max & fully happy & 100% satisfied. \nLeast bothered about USB-C as I always charge using wireless & its fast. Cameras are more than enough for me.  Don't feel need to upgrade for long time . \nAm not crazy of dynamic island 😄. \nNot worth upgrading a iPhone every year for minor upgrades",
            textOriginal:
              "I have iPhone 13 Pro max & fully happy & 100% satisfied. \nLeast bothered about USB-C as I always charge using wireless & its fast. Cameras are more than enough for me.  Don't feel need to upgrade for long time . \nAm not crazy of dynamic island 😄. \nNot worth upgrading a iPhone every year for minor upgrades",
            authorDisplayName: "Ramesh Kumar",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AL5GRJUYjfcHeFM2VcJ_OFissarPnbSmXWYWmGHdWQ=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCGNDeNDliqiEcgARi1w9XIA",
            authorChannelId: {
              value: "UCGNDeNDliqiEcgARi1w9XIA",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 1,
            publishedAt: "2023-03-14T16:09:08Z",
            updatedAt: "2023-03-14T16:10:05Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "pDI-NjbmMB4p390jbIvdqVMJrmg",
      id: "UgxmpCjEaY13L-hQg5N4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "UTdHDTt3-1RzRENJsV9NerSsgB8",
          id: "UgxmpCjEaY13L-hQg5N4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay: "It looks more like an iPhone 11",
            textOriginal: "It looks more like an iPhone 11",
            authorDisplayName: "Thee Mclane",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AL5GRJVrEcSkwzwzFiugQlHv0ySDxQiu_tue10uMmA=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCnF74CnOqowia6f6D3cDSww",
            authorChannelId: {
              value: "UCnF74CnOqowia6f6D3cDSww",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-03-14T16:07:26Z",
            updatedAt: "2023-03-14T16:07:26Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "R998-5ho9L3tdt2tlPcYCmlQaC4",
      id: "UgzptckYYnzS2BAarW54AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "16aMZ-StdBUNaJIJYwlv8q1sGTo",
          id: "UgzptckYYnzS2BAarW54AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "I don't know if it's the materials used, but these look kinda \"same old same old\", boring and not exciting at all",
            textOriginal:
              "I don't know if it's the materials used, but these look kinda \"same old same old\", boring and not exciting at all",
            authorDisplayName: "identity",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AL5GRJUZuMv-Ahfv06MaTxfsJC-oai_xZBN9SEy430JhB3UMPCc_g6nudLgpMAyMoM2p=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCmePI50jJrzTLRCHZuRBpiw",
            authorChannelId: {
              value: "UCmePI50jJrzTLRCHZuRBpiw",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-03-14T16:01:14Z",
            updatedAt: "2023-03-14T16:01:14Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "NmsuuIP0vlHTDBTB3LWr0PzUFZs",
      id: "UgwjRfyfQRO-o4_lIpl4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "Mwwr-Gqvj0VOWoTgoC67RLLmM9U",
          id: "UgwjRfyfQRO-o4_lIpl4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay: "GG",
            textOriginal: "GG",
            authorDisplayName: "ItzEagleT",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/Qo0a1odrA5nAyCjrQb3R-Q6dXEYLJ8CWu2dqMBJF_Kj2_n8q8ZGjv_jSU9H2JWID35c4OZzBpIE=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCNQhwnEMZYfa7rEO_15mhIw",
            authorChannelId: {
              value: "UCNQhwnEMZYfa7rEO_15mhIw",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 1,
            publishedAt: "2023-03-14T16:01:08Z",
            updatedAt: "2023-03-14T16:01:08Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "_hq3BbneUeMBlLbtDktO3yL6JWU",
      id: "Ugw-eJc4rAZO4C9h9SB4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "pRm2rFdCq6w51Uzr2r-bfJa2HQU",
          id: "Ugw-eJc4rAZO4C9h9SB4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "Disappointed I’ll wait till Tesla new phone if that ever happens.",
            textOriginal:
              "Disappointed I’ll wait till Tesla new phone if that ever happens.",
            authorDisplayName: "Jay Judd",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AL5GRJWxBUUl65mWytEmOLN5TJZrFeJsnX9cXia4TIxW3Kv6BqVyb74r6HdBH-6jUjoA=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCrZknJEl4m0kJ6RXO7xC8jA",
            authorChannelId: {
              value: "UCrZknJEl4m0kJ6RXO7xC8jA",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 1,
            publishedAt: "2023-03-14T15:58:30Z",
            updatedAt: "2023-03-14T15:58:30Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "MNeBwKz5Ub_p9B1Bh4IcSSqcwe8",
      id: "UgwnMFzVA7AN6T6ndON4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "v1UssmqyPDJTnejpY_43SKYtqOE",
          id: "UgwnMFzVA7AN6T6ndON4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "Looks to me like this is a very slight upgrade in design.  Slightly more rounded edges and a bigger camera bump.  USB-C... yawn... I already have a bunch of lightning cables and chargers that work just fine.  Curved glass front edges won't be protected with a flat-glass screen protector.  The only thing that can really excite me about this is MAYBE a really fast A17 and a big jump up for camera quality... although my 11 pro still takes impressive photos, and it's quick with everything I do.  Maybe I'll wait for the 16 pro with the single hole punch-out.",
            textOriginal:
              "Looks to me like this is a very slight upgrade in design.  Slightly more rounded edges and a bigger camera bump.  USB-C... yawn... I already have a bunch of lightning cables and chargers that work just fine.  Curved glass front edges won't be protected with a flat-glass screen protector.  The only thing that can really excite me about this is MAYBE a really fast A17 and a big jump up for camera quality... although my 11 pro still takes impressive photos, and it's quick with everything I do.  Maybe I'll wait for the 16 pro with the single hole punch-out.",
            authorDisplayName: "Charles Hepburn II",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AL5GRJWO9BcZYEdJOKBDJuvVKiudcLfWf9eGCIDHVb5vjA=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCye4LcFs8hGXriL2Fq9ZHiA",
            authorChannelId: {
              value: "UCye4LcFs8hGXriL2Fq9ZHiA",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 1,
            publishedAt: "2023-03-14T15:49:46Z",
            updatedAt: "2023-03-14T15:53:27Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "HfGtHTcENDzC42hQOptBhawKQ2k",
      id: "UgzhgHTNqdTnoomMc5p4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "QPShT_KOKeYC8-gAcvYyphLIMRk",
          id: "UgzhgHTNqdTnoomMc5p4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay: "If it has Thunderbolt 3/USB4, insta-buy.",
            textOriginal: "If it has Thunderbolt 3/USB4, insta-buy.",
            authorDisplayName: "Tim Tim",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AL5GRJVBO-YM7Fr8ci3u--FF67k4dINHaV5zPom9Eg=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCM8YNfHPGOx56uml3J0U_aQ",
            authorChannelId: {
              value: "UCM8YNfHPGOx56uml3J0U_aQ",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-03-14T15:48:06Z",
            updatedAt: "2023-03-14T15:48:06Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "nXTkLxy7mQHZrJI3kfCbElhmFgc",
      id: "Ugzp1R4pXRLOkC8Lufx4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "zVRwIk36fvr6qGVVXl1eARdyzzo",
          id: "Ugzp1R4pXRLOkC8Lufx4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "I’m starting to think that I should wait one more year for the rumored iPhone Ultra.",
            textOriginal:
              "I’m starting to think that I should wait one more year for the rumored iPhone Ultra.",
            authorDisplayName: "Laszlo Panaflex",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/u--WARwLcnlAGoRilwl0YVt0sQTOPNvQfbfZzC3thI-fOCMdB6EzD9qWWblksRs2NtXD7C2u3BQ=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCRH9JUjZXOS1orgzoJ59RBQ",
            authorChannelId: {
              value: "UCRH9JUjZXOS1orgzoJ59RBQ",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-03-14T15:46:04Z",
            updatedAt: "2023-03-14T15:46:04Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "btPFbgBDjp2jgQyvfcttdl1Eqqo",
      id: "UgzQECryGWi8_GVQodR4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "t9iaAMTqEOxN0l_vTKP62Jwpuwk",
          id: "UgzQECryGWi8_GVQodR4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "Did he say brand new redesign? Apple taking the whole retro thing to the next level",
            textOriginal:
              "Did he say brand new redesign? Apple taking the whole retro thing to the next level",
            authorDisplayName: "Stewart Autobody",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AL5GRJUCbq29QGbzJip0XYeHE13vE1QjfvKJo7Zg9CJPLTzKbWYflwxfIrnFqpObOnRr=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UC56frRSSvKjvR3ljVFTrIbQ",
            authorChannelId: {
              value: "UC56frRSSvKjvR3ljVFTrIbQ",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 1,
            publishedAt: "2023-03-14T15:33:57Z",
            updatedAt: "2023-03-14T15:33:57Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "RlGvybHQCa2iWHV5nZzr3u6t9i0",
      id: "UgyT5BoaIyWnKVblZ-x4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "KVbBiGiFxjtxFQA5oPqBSAOs8iw",
          id: "UgyT5BoaIyWnKVblZ-x4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "It’s not a ‘brand new design’. Rather, it is an update to the existing one.",
            textOriginal:
              "It’s not a ‘brand new design’. Rather, it is an update to the existing one.",
            authorDisplayName: "Syed Raed A. Gilani- DPS",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/fNp5ac015GntLItJQK4zpHtnk9eBO8JLOtJik7lk_gjvuFGLgJjo0JyQ36u9rfHMm9fIYQYDgLU=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCrA_udiHbAE50lcIwnnmXYw",
            authorChannelId: {
              value: "UCrA_udiHbAE50lcIwnnmXYw",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 1,
            publishedAt: "2023-03-14T15:33:01Z",
            updatedAt: "2023-03-14T15:33:01Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "gfhgaa_PcO8W1V7oqNQEj142G5U",
      id: "Ugz7Mqi40hZejP7zKal4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "Tma2hd1f6oVFQPSLEQtHVi2qtrQ",
          id: "Ugz7Mqi40hZejP7zKal4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay: "I want it curve like 5c!",
            textOriginal: "I want it curve like 5c!",
            authorDisplayName: "Rucifer",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/IXfm2bzJZE7YDxwpTPK4wDLzpk1bOlavKHF3wiKqxbICZQHGtEUlusNsznZieYmzFbIB6LGA=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCdWFyXQ3PtiK7SRaWyAGmfA",
            authorChannelId: {
              value: "UCdWFyXQ3PtiK7SRaWyAGmfA",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-03-14T15:32:29Z",
            updatedAt: "2023-03-14T15:32:29Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "z-1_6JPn7Jjr8vZyTTAslArK5sE",
      id: "UgzlOUwzJqSIp-BCvJB4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "3iVKsYShNVyo0mnt6PQwItnvG8E",
          id: "UgzlOUwzJqSIp-BCvJB4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "I don’t see how the 15 Pro Max will have a 6x periscope lens with only 3 lenses still. I bet they will just give it a 48MP 3x lens. Disappointing but we’ll see.",
            textOriginal:
              "I don’t see how the 15 Pro Max will have a 6x periscope lens with only 3 lenses still. I bet they will just give it a 48MP 3x lens. Disappointing but we’ll see.",
            authorDisplayName: "Joe Larson",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AL5GRJUzSbZPgY2CsuiENOXfOe2gWJy0FSmuij9y0x6vmw=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCCdjNhSTXARGQFELIx6w36w",
            authorChannelId: {
              value: "UCCdjNhSTXARGQFELIx6w36w",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-03-14T15:25:54Z",
            updatedAt: "2023-03-14T15:25:54Z",
          },
        },
        canReply: true,
        totalReplyCount: 1,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "1chNl3btAhKN5gQOOgR9Ywwau14",
      id: "UgzF8mpLOVsWfTL-qRB4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "GQkU5plDNOYr0cOjbO7_4AANvOM",
          id: "UgzF8mpLOVsWfTL-qRB4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay: "16 ultra really coming?",
            textOriginal: "16 ultra really coming?",
            authorDisplayName: "Batman",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/lslRvjttCI1TVhuxKPsSB4MOzQ4j9vND0lS-Wn48ZIkZP49hp-J4eXhlyFUhi4w5l3zPj6OD=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCjUcHyE7K2_EKzupnWY9VeA",
            authorChannelId: {
              value: "UCjUcHyE7K2_EKzupnWY9VeA",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-03-14T15:25:22Z",
            updatedAt: "2023-03-14T15:25:22Z",
          },
        },
        canReply: true,
        totalReplyCount: 1,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "DwYxKPZOJ3fAnbZsDV2TVzu32NA",
      id: "Ugwvp2gzhQuBJMkPatF4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "91_2TTQDAz1Xoduw5udrL8ZEQh0",
          id: "Ugwvp2gzhQuBJMkPatF4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay:
              "I’m still using the iPhone 8 Plus, I hated Face ID when I had a newer iPhone",
            textOriginal:
              "I’m still using the iPhone 8 Plus, I hated Face ID when I had a newer iPhone",
            authorDisplayName: "JG",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/bXbs2tDTHukC9ACQOJ3Y0nihuYZMtIJ6yNHe0E1tufwmExkKDHYopWGGq7qZ9jxkfepwfn97=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UC1bNzkihr_wBG7wgPnQGjZQ",
            authorChannelId: {
              value: "UC1bNzkihr_wBG7wgPnQGjZQ",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-03-14T15:21:08Z",
            updatedAt: "2023-03-14T15:21:08Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "MK5dfCaABRWW3v6fKsyE2lo-7a8",
      id: "UgzUyCyuYjHq2rlm-W14AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "apAIGi8H4WZMQjU1Z6596FsgZh0",
          id: "UgzUyCyuYjHq2rlm-W14AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay: "Disappointed",
            textOriginal: "Disappointed",
            authorDisplayName: "Batman",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/lslRvjttCI1TVhuxKPsSB4MOzQ4j9vND0lS-Wn48ZIkZP49hp-J4eXhlyFUhi4w5l3zPj6OD=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCjUcHyE7K2_EKzupnWY9VeA",
            authorChannelId: {
              value: "UCjUcHyE7K2_EKzupnWY9VeA",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-03-14T15:17:40Z",
            updatedAt: "2023-03-14T15:17:40Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "sogY6RAkdYCQYbewqddWzRaLxs0",
      id: "UgxzQSfdjZgpoTbaUnN4AaABAg",
      snippet: {
        videoId: "dnL3CNrRNvU",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "RdJOW5SRovLKW_TwdrYI-Itx3-c",
          id: "UgxzQSfdjZgpoTbaUnN4AaABAg",
          snippet: {
            videoId: "dnL3CNrRNvU",
            textDisplay: "So i am the only one who don’t like the usb-c? 🤣",
            textOriginal: "So i am the only one who don’t like the usb-c? 🤣",
            authorDisplayName: "Giorgio",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/x02R9pveoLxOgv8qnOwY7PxYdHRzfWfcwZxkhL4yPEDx5yZm_eLB2d9sXMmtBqaF6t4JE68vag=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCKFARaABjC1-sDqusgW8piQ",
            authorChannelId: {
              value: "UCKFARaABjC1-sDqusgW8piQ",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-03-14T15:06:41Z",
            updatedAt: "2023-03-14T15:06:41Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
  ],
};
