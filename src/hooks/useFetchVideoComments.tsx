import {
  YoutubeSharkVideoCommentDetails,
  YoutubeSharkVideoCommentDetailsApiResponse,
} from "@/types/youtubeShark";
import { useState } from "react";

export const useFetchVideoComments = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [videos, setVideos] = useState<YoutubeSharkVideoCommentDetails[]>([]);
  const [notFoundVideos, setNotFoundVideos] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);

  const fetchVideoComments = (videoIds: string[]) => {
    setLoading(true);
    const queryParams = new URLSearchParams({
      videoId: videoIds.join(","),
    });

    fetch(`${process.env["NEXT_PUBLIC_APP_URL"]}/api/comments?${queryParams}`)
      .then((response) => response.json())
      .then((response: YoutubeSharkVideoCommentDetailsApiResponse) => {
        setVideos(response.items);
        setNotFoundVideos(response.notFound);
        setError(false);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return {
    error,
    loading,
    videos,
    notFoundVideos,
    fetchVideoComments,
  };
};
