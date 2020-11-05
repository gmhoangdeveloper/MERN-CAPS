import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  MainFromLogin: {
    position: "absolute",
    // top: "50%",
    // right: "50%",
    // width: "400px",
    // transform: " translate(-50%, -50%)",
    //     margin-left: "auto";
    // margin-right: "auto";
    // left: "0";
    // right: "0";
  },
}));
function LoginAdmin(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.MainFromLogin}>
        <Grid
          //   className={classes.MainFromLogin}
          style={{ border: "1px solid blue" }}
        >
          <Grid xs={4} style={{ border: "1px solid red" }}>
            ssssssssss
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default LoginAdmin;
