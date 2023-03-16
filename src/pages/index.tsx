import CommentsAccordion from "@/components/CommentsAccordion";
import SearchForm from "@/components/SearchForm";
import TitleBar from "@/components/TitleBar";
import theme from "@/config/theme";
import { useFetchVideoComments } from "@/hooks/useFetchVideoComments";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

export default function Home() {
  const { error, loading, videos, notFoundVideos, fetchVideoComments } =
    useFetchVideoComments();

  return (
    <>
      <TitleBar title="Youtube Surfing Shark" />
      <Container maxWidth="md" sx={{ pb: 12 }}>
        <Box sx={{ my: 4 }}>
          <Card variant="outlined" sx={{ p: 4 }}>
            <SearchForm onSearch={fetchVideoComments} loading={loading} />
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
