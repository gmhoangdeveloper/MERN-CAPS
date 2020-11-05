import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../../components/Admin/Navbar";
import { Container, makeStyles, Grid, Button } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import SectionMainMenuLeft from "../../../components/Admin/SiderLeft";

const useStyles = makeStyles((theme) => ({
  buttonBlack: {
    color: "white",
    backgroundColor: "black",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "black",
    },
  },

  sectionMain: {
    marginTop: "30px",
  },
}));
function AllImage(props) {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          className={classes.sectionMain}
        >
          <Grid xs={12} md={12} sm={12} lg={3}>
            <SectionMainMenuLeft></SectionMainMenuLeft>
          </Grid>
          <Grid xs={12} md={12} sm={12} lg={3}></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AllImage;
