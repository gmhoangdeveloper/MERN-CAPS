import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const PageNotFoundScreen = (props) => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <p>PageNotFoundScreen</p>
      <Footer />
    </>
  );
};

export default PageNotFoundScreen;
