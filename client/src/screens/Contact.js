import { Container, Input, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const Contact = (props) => {
  const classes = useStyles();
  return (
    <>
      {" "}
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            Customer Service Tel: 123-456-7890 Email: info@my-domain.com
            Stockists Claim | 500 Terry Francois Street, San Francisco, CA 94158
            No Regrets | 500 Terry Francois Street, San Francisco, CA 94158
            Koolit | 500 Terry Francois Street, San Francisco, CA 94158 Empire |
            500 Terry Francois Street, San Francisco, CA 94158 Rollercoaster |
            500 Terry Francois Street, San Francisco, CA 94158 Always Shine |
            500 Terry Francois Street, San Francisco, CA 94158
          </Grid>
          <Grid item xs={6}>
            CONTACT US WITH ANY INQUIRY
            <form noValidate autoComplete="off">
              <Input
                defaultValue="Hello world"
                inputProps={{ "aria-label": "description" }}
              />
              <Input
                defaultValue="Hello world"
                inputProps={{ "aria-label": "description" }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
              />
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
