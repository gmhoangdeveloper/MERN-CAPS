import {
  Container,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { registrationEmail, loginEmail } from "../actions/signupforloginAction";
import Alert from "@material-ui/lab/Alert";
import CustomizedSnackbars from "../components/Alert";

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
const RegistrationScreen1 = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const signupforlogin = useSelector((state) => state.signupforlogin);
  console.log("REDUCER", signupforlogin);
  const [emailRegistration, setemailRegistration] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    avatar: "",
    dateofbirth: 0,
  });
  function randomPassword(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const handleChangeRegistration = (e) => {
    const { name, value } = e.target;
    setemailRegistration((prevState) => ({
      ...prevState,
      [name]: value,
      password: randomPassword(10),
    }));
  };
  const [login, setlogin] = useState({
    emaillogin: "",
    passwordlogin: "",
  });
  const submitregistration = () => {
    console.log(emailRegistration);
    dispatch(registrationEmail(emailRegistration));
  };
  //   Login

  const handleChangelogin = (e) => {
    const { name, value } = e.target;
    setlogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitlogin = () => {
    dispatch(loginEmail(login));
  };

  return (
    <>
      <Navbar />
      <CustomizedSnackbars alertOpenandClose={signupforlogin.loading}>
        Đăng Nhập Thành Công
      </CustomizedSnackbars>
      <Container maxWidth="sm">
        {signupforlogin.loading ? (
          <h1>Đăng Nhập thành công</h1>
        ) : (
          <h1>Xin Mời bạn đăng nhập</h1>
        )}
        <Typography>Đăng Ký</Typography>
        <Grid lg={12}>
          <TextField
            label="email"
            name="email"
            onChange={handleChangeRegistration}
          />
        </Grid>
        <Typography>Bạn Vui Lòng Nhập Gmail Sẽ Tự Động Gửi Password</Typography>
        <Grid lg={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={submitregistration}
          >
            Đăng Ký
          </Button>
        </Grid>
        <Typography>Đăng Nhập</Typography>
        <Grid lg={12}>
          <TextField
            label="emaillogin"
            name="emaillogin"
            onChange={handleChangelogin}
          />
          <TextField
            label="passwordlogin"
            name="passwordlogin"
            onChange={handleChangelogin}
          />
        </Grid>
        <Typography>Bạn Vui Lòng Nhập Gmail Sẽ Tự Động Gửi Password</Typography>
        <Grid lg={12}>
          <Button variant="contained" color="primary" onClick={submitlogin}>
            Đăng Nhập
          </Button>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default RegistrationScreen1;
