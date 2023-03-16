import theme from "@/config/theme";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function TitleBar({ title }: { title: string }) {
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="h1"
          fontWeight={theme.typography.fontWeightBold}
          sx={{ flexGrow: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
