import theme from "@/config/theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function Home() {
  return (
    <>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography
            variant="h6"
            fontWeight={theme.typography.fontWeightBold}
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Youtube Surfing Shark
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box
          component="form"
          sx={{
            my: 4,
          }}
          noValidate
          autoComplete="off"
        >
          <Card
            variant="outlined"
            sx={{ display: "flex", flexWrap: "wrap", p: 4 }}
          >
            <TextField
              sx={{ flexGrow: 1 }}
              id="outlined-basic"
              label="Youtube video id/ids"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                marginLeft: 2,
              }}
            >
              Surf Comments
            </Button>
          </Card>
        </Box>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
}
