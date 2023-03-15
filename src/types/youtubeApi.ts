export interface YoutubeVideosListResponse {
  items: {
    kind: string;
    etag: string;
    id: string;
    snippet: {
      publishedAt: string;
      title: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  }[];
}

export interface YoutubeCommentThreadListResponse {
  items: {
    kind: string;
    etag: string;
    id: string;
    snippet: {
      videoId: string;
      topLevelComment: YoutubeTopLevelComment;
    };
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  }[];
}

export interface YoutubeTopLevelComment {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    videoId: string;
    textDisplay: string;
    textOriginal: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    authorChannelId: string;
    canRate: boolean;
    viewerRating: string;
    likeCount: number;
    publishedAt: string;
    updatedAt: string;
  };
}

export interface YoutubeSearchListResponse {
  nextPageToken?: string;
  items: {
    id: {
      videoId: string;
    };
    snippet: {
      publishedAt: string;
      title: string;
    };
  }[];
}
