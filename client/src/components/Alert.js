import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { alertcloseSelect } from "../actions/alertActions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(props.alertOpenandClose);
  const openandclose = props;
  useEffect(() => {}, []);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(alertcloseSelect());
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={props.alertOpenandClose}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error">{props.children}</Alert>
      </Snackbar>
    </div>
  );
}
