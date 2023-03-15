export interface YoutubeSharkVideoCommentsCacheData {
  videoId: string;
  rawData: string;
  cachedAt: string;
}

export interface YoutubeSharkVideoCommentDetailsApiResponse {
  items: YoutubeSharkVideoCommentDetails[];
  notFound: string[];
}

export interface YoutubeSharkVideoCommentDetailsBase {
  id: string;
  title: string;
}

export interface YoutubeSharkVideoCommentDetails
  extends YoutubeSharkVideoCommentDetailsBase {
  comments: YoutubeSharkComment[];
  cached?: boolean;
}

export interface YoutubeSharkComment {
  id: string;
  comment: string;
  author: YoutubeSharkCommentAuthor;
  likeCount: number;
  publishedAt: string;
}

export interface YoutubeSharkCommentAuthor {
  name: string;
  imageUrl: string;
  channelUrl: string;
}
