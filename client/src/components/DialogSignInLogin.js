import {
  Backdrop,
  CircularProgress,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  FormControl,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import FacebookIcon from "@material-ui/icons/Facebook";
import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  loginEmail,
  loginGoogle,
  registrationEmail,
} from "../actions/signupforloginAction";
import CustomizedSnackbars from "./Alert";
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  buttonLeft: {
    color: "white",
    backgroundColor: "black",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "black",
    },
  },
}));
function DialogSignInLogin(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const signupforlogin = useSelector((state) => state.signupforlogin);
  const alertReducer = useSelector((state) => state.alertReducer);
  const [emailRegistration, setemailRegistration] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    avatar: "",
    dateofbirth: "0",
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
  const [userandpassword, setuserandpassword] = useState({
    TextFieldNull: false,
    RadioCheck: false,
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
    if (login.emaillogin !== "" && login.passwordlogin !== "") {
      dispatch(loginEmail(login));
    } else {
      setuserandpassword({ TextFieldNull: true });
    }
  };
  const handleCloseBackdrop = () => {
    // setOpen(false);
  };
  const loginSuccessGoogle = (respone) => {
    if (respone) {
      const profileObjgoogle = {
        ...emailRegistration,
        email: respone.profileObj.email,
        firstName: respone.profileObj.givenName,
        lastName: respone.profileObj.familyName,
        avatar: respone.profileObj.imageUrl,
      };
      console.log(respone, "--------", profileObjgoogle);
      dispatch(loginGoogle(profileObjgoogle));
    }
  };
  const loginSuccessFacebook = (response) => {
    if (response) {
      const profileObjgoogle = {
        ...emailRegistration,
        email: response.email,
        firstName: response.name,

        avatar: response.picture.data.url,
      };
      console.log(response, "--------", profileObjgoogle);
      dispatch(loginGoogle(profileObjgoogle));
    }
  };
  return (
    <DialogContent>
      <Backdrop
        className={classes.backdrop}
        open={signupforlogin.loading}
        onClick={handleCloseBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <CustomizedSnackbars alertOpenandClose={alertReducer.loading}>
        Tài khoản email đã được đăng ký
      </CustomizedSnackbars>
      <CustomizedSnackbars alertOpenandClose={alertReducer.loadingFailPassword}>
        Mật khẩu Tài khoản Email Không tồn tại
      </CustomizedSnackbars>
      <Grid container lg={12}>
        <Grid item lg={6}>
          <Typography variant="h6" color="initial">
            Đăng Nhập
          </Typography>
          <Typography>Tên tài khoản hoặc địa chỉ email *</Typography>
          <TextField
            required
            label="UserName or Email"
            name="emaillogin"
            onChange={handleChangelogin}
            error={userandpassword.TextFieldNull ? true : false}
            helperText={
              userandpassword.TextFieldNull
                ? "Vui lòng kiểm tra thông tin."
                : ""
            }
          />
          <Typography>Mật khẩu *</Typography>
          <TextField
            label="Password"
            type="password"
            name="passwordlogin"
            autoComplete="current-password"
            required
            onChange={handleChangelogin}
            error={userandpassword.TextFieldNull ? true : false}
            helperText={
              userandpassword.TextFieldNull
                ? "Vui lòng kiểm tra thông tin."
                : ""
            }
          />

          <Typography>Login with your Social ID</Typography>
          <FacebookLogin
            appId="253286716027191"
            autoLoad={false}
            fields="name,email,picture"
            callback={loginSuccessFacebook}
            size="small"
            textButton=""
            icon={<FacebookIcon />}
          />
          <GoogleLogin
            clientId="826712529309-nhqe5u0q901g9qshm8l3m3b8c1oug2c9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={loginSuccessGoogle}
            // onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="RemeberUserPassword" color="default" />}
              label="Ghi nhớ mật khẩu"
            />
          </FormGroup>

          <Button
            variant="contained"
            className={classes.buttonLeft}
            onClick={submitlogin}
          >
            Đăng nhập
          </Button>
          <Typography>
            <Link>Quên Mật Khẩu</Link>
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Typography variant="h6" color="initial">
            Đăng ký
          </Typography>
          <Typography>Địa Chỉ Email</Typography>
          <TextField
            required
            id="standard-required"
            label="Email"
            name="email"
            onChange={handleChangeRegistration}
          />
          <Typography>
            Một mật khẩu sẽ được gửi đến địa chỉ email của bạn.
          </Typography>
          <Typography>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <Link>chính sách riêng tư</Link>.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonLeft}
            onClick={submitregistration}
          >
            Đăng ký
          </Button>
        </Grid>
      </Grid>
    </DialogContent>
  );
}

export default DialogSignInLogin;
