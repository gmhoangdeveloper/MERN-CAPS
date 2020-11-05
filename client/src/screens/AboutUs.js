import { CardMedia, Container, Typography } from "@material-ui/core";
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
const AboutUs = (props) => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography>
              ABOUT US I'm a paragraph. Click here to add your own text and edit
              me. It’s easy. Just click “Edit Text” or double click me to add
              your own content and make changes to the font. Feel free to drag
              and drop me anywhere you like on your page. I’m a great place for
              you to tell a story and let your users know a little more about
              you. ​ This is a great space to write long text about your company
              and your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="90%"
              image="https://static.wixstatic.com/media/baac51_f659b3c18b5a4478b7bf426036b0ada0~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_595,h_811,al_l,q_85,usm_0.66_1.00_0.01/baac51_f659b3c18b5a4478b7bf426036b0ada0~mv2_d_6000_4000_s_4_2.webp"
              title="Contemplative Reptile"
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
