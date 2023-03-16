# General info

This is an application that does a few things:

### **Monitors youtube (Yotube Waves)**

Monitors youtube by searching for a specific keyword and outputs it to console and posts message to Slack. Keywords are saved in MongoDb.

- `/api/waves` - serveless function / api end-point that does all the work.
- Vercel cron job triggers it every day at 10AM UTC (only once a day in order to work with free account)

It will only output new videos (sorted by time) since last known published video. If no videos published since last checked - no output.

### **Website to view video comments (Youtube Surfing Shark)**

website where you can provide one or more Youtube video Id’s and fetch the last 20 comments from each of these videos. Fetched information is stored in the MongoDB database, so if a user provides the same video id in a period of 24h _(or whatever time period is provided in env var `MONGODB_COMMENTS_EXPIRATION_MINUTES`)_ then
information is fetched from the database, not from Youtube API.

# !! Known issues / limitations / possible improvements !!

- Test coverage of project is not ideal.
- `/api/waves` endpoint has no restrictions, so anyone can call it and trigger the script. Ideally this should be restricted in some way.
- If free Vercel account is used then monitoring is done only once a day (if you call it "daily digest", then it's kinda okay).
- MongoDb connection is only secured by username/password. All IPs are allowed to access it. Ideally this should be improved.
- Monitoring part will only output up to 100 videos. It's limited to 2 pages of 50 results per request. It is this way to save some youtube API quotas.

# Getting Started

### **Prerequisites**

1. mongoDB
2. Youtube Data API V3
3. [Vercel](https://vercel.com) account
4. Slack with webhooks setup (for more info: https://api.slack.com/messaging/webhooks)

### **MongoDB Setup**

1. Create database
2. Allow access from any IP (SHOULD BE IMPROVED)
3. create collection for caching comments (`MONGODB_COMMENTS_COLLECTION`)
4. create index for `videoId` field in `MONGODB_COMMENTS_COLLECTION` collection
5. create collection for monitoring youtube search results (`MONGODB_WAVES_COLLECTION`)
6. in `MONGODB_WAVES_COLLECTION` collection create item `{ type: 'keywords', value: 'this will be the search keywords' }`. Field `value` of this object will store keywords that will be searched.

## Local development

### Environment variables

Create `.env.local` file in root directory for local development and populate variables

```
NEXT_PUBLIC_APP_URL="http://localhost:3000"
YOUTUBE_API_KEY="..."
MONGODB_URI="..."
MONGODB_DATABASE_NAME="..."
MONGODB_COMMENTS_COLLECTION="..."
MONGODB_COMMENTS_EXPIRATION_MINUTES="60"
MONGODB_WAVES_COLLECTION="..."
SLACK_WEBHOOK_URL="https://hooks.slack.com/services/....../...../......."
```

- `NEXT_PUBLIC_APP_URL` - base url of the app
- `YOUTUBE_API_KEY` - Youtube Data API V3 key
- `MONGODB_URI` - connection URI to mongoDB
- `MONGODB_DATABASE_NAME` - Mongo database name where data will be stored
- `MONGODB_COMMENTS_COLLECTION` - Mongo db collection name where cached info about videos/comments will be stored
- `MONGODB_COMMENTS_EXPIRATION_MINUTES` - (optional) time in minutes after which cached data is considered as invalid
- `MONGODB_WAVES_COLLECTION` - Mongo db collection name where info about last monitored search result will be stored and info about search keywords
- `SLACK_WEBHOOK_URL` - slack webook url to post message

### Running application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running tests

```bash
npm run test
# for coverage report use
npm run test -- --coverage
```

## Deployment

For deployment please use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Once deployed, make sure to create all enviroment variables found in `Local development` -> `Environment variables`
