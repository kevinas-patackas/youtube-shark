import CommentList from "@/components/CommentList";
import theme from "@/config/theme";
import { YoutubeSharkVideoCommentDetails } from "@/types/youtubeShark";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

export default function CommentsAccordion({
  videoDetails,
}: {
  videoDetails: YoutubeSharkVideoCommentDetails;
}) {
  return (
    <Accordion variant="outlined">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography fontWeight={theme.typography.fontWeightBold}>
          {videoDetails.title}
          <Typography component="span"> ({videoDetails.id})</Typography>
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 1 }}>
        {videoDetails.cached && (
          <Alert sx={{ mb: 2 }} variant="filled" severity="info">
            This is a cached result from MongoDB
          </Alert>
        )}
        <CommentList comments={videoDetails.comments} />
      </AccordionDetails>
    </Accordion>
  );
}
