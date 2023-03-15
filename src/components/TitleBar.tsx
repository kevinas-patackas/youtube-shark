import theme from "@/config/theme";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

export default function TitleBar({
  children,
}: {
  children?: React.ReactFragment;
}) {
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight={theme.typography.fontWeightBold}
          component="div"
          sx={{ flexGrow: 1 }}
        >
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
