## Prerequisites

1. mongoDB
2. Youtube Data API V3
3. [Vercel](https://vercel.com) account

# Getting Started

### MongoDB

1. Create database
2. Allow access from any IP (SHOULD BE IMPROVED)
3. create collection within database
4. create index for `videoId` field

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
```

- `NEXT_PUBLIC_APP_URL` - base url of the app
- `YOUTUBE_API_KEY` - Youtube Data API V3 key
- `MONGODB_URI` - connection URI to mongoDB
- `MONGODB_DATABASE_NAME` - Mongo database name where data will be stored
- `MONGODB_COMMENTS_COLLECTION` - Mongo db collection name where cached info about videos/comments will be stored
- `MONGODB_COMMENTS_EXPIRATION_MINUTES` - (optional) time in minutes after which cached data is considered as invalid

### Running application

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

For deployment please use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Once deployed, make sure to create all enviroment variables found in `Local development` -> `Environment variables`
