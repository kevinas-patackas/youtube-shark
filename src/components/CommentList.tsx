import theme from "@/config/theme";
import { YoutubeSharkComment } from "@/types/youtubeShark";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DateTime } from "luxon";

export default function CommentList({
  comments,
}: {
  comments: YoutubeSharkComment[];
}) {
  return (
    <Stack
      sx={{ width: "100%", bgcolor: "background.paper" }}
      divider={<Divider flexItem />}
    >
      {comments.length ? (
        comments.map((comment) => (
          <ListItem key={comment.id} sx={{ p: 1 }} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={comment.author.name} src={comment.author.imageUrl} />
            </ListItemAvatar>
            <Box sx={{ p: 1 }}>
              <Typography
                variant="body1"
                component="h3"
                fontWeight={theme.typography.fontWeightBold}
              >
                {comment.author.name}
              </Typography>
              <Typography variant="subtitle2" component="p">
                {DateTime.fromISO(comment.publishedAt).toRelative({
                  locale: "en-US",
                })}
              </Typography>
              <Typography
                variant="body1"
                mt={1}
                sx={{ overflowWrap: "anywhere" }}
              >
                {comment.comment}
              </Typography>
            </Box>
          </ListItem>
        ))
      ) : (
        <Box sx={{ p: 1 }}>
          <Typography
            variant="body1"
            fontWeight={theme.typography.fontWeightBold}
          >
            No comments
          </Typography>
        </Box>
      )}
    </Stack>
  );
}
