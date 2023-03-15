import CommentsAccordion from "@/components/CommentsAccordion";
import SearchForm from "@/components/SearchForm";
import TitleBar from "@/components/TitleBar";
import theme from "@/config/theme";
import {
  YoutubeSharkVideoCommentDetails,
  YoutubeSharkVideoCommentDetailsApiResponse,
} from "@/types/youtubeShark";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [videos, setVideos] = useState<YoutubeSharkVideoCommentDetails[]>([]);
  const [notFoundVideos, setNotFoundVideos] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);

  const fetchVideos = (videoIds: string[]) => {
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

  return (
    <>
      <TitleBar>Youtube Surfing Shark</TitleBar>
      <Container maxWidth="md" sx={{ pb: 12 }}>
        <Box sx={{ my: 4 }}>
          <Card variant="outlined" sx={{ p: 4 }}>
            <SearchForm onSearch={fetchVideos} loading={loading} />
          </Card>
        </Box>

        {error && (
          <Alert sx={{ my: 2 }} severity="error">
            <AlertTitle sx={{ fontWeight: theme.typography.fontWeightBold }}>
              Ooops!
            </AlertTitle>
            Something went wrong, please try again
          </Alert>
        )}

        {notFoundVideos.length ? (
          <Alert sx={{ my: 2 }} severity="warning">
            <AlertTitle sx={{ fontWeight: theme.typography.fontWeightBold }}>
              No videos found with IDs:
            </AlertTitle>
            {notFoundVideos.join(", ")}
          </Alert>
        ) : undefined}

        {videos.map((video) => (
          <CommentsAccordion key={video.id} videoDetails={video} />
        ))}
      </Container>
    </>
  );
}
