import axios from "axios";
import {
  REGISTRATION_COLSE_ALERT,
  REGISTRATION_FAIL_PASSWORDEMAIL,
  REGISTRATION_SEND_PASSWORDEMAIL,
} from "../constants/signupforloginConstants";
import {
  BACKDROP_LOADING_COLSE,
  BACKDROP_LOADING_OPEN,
} from "../constants/alertConstants";
import {
  ALERT_OPEN_SELECT,
  ALERT_OPEN_FAIL_PASSWORD,
} from "./../constants/alertConstants";

const registrationEmail = (dataUser) => async (dispatch) => {
  const selectUser = await axios.get(
    "/api/username" + `?email=${dataUser.email}`
  );
  dispatch({ type: BACKDROP_LOADING_OPEN });
  if (selectUser.data.length === 0) {
    const { data } = await axios.post(
      "/api/username",
      dataUser
    );
    const dataRequestSendEmail = {
      title: data.email,
      description: data.password,
    };
    const sendMail = await axios.post(
      "/api/email",
      dataRequestSendEmail
    );
    if (sendMail) {
      dispatch({ type: BACKDROP_LOADING_COLSE });
    }
    console.log("hoang", sendMail);
  } else {
    dispatch({ type: ALERT_OPEN_SELECT });
  }
};

const loginEmail = (dataUser) => async (dispatch) => {
  const { data } = await axios.get(
    "/api/username" +
      `?email=${dataUser.emaillogin}&password=${dataUser.passwordlogin}`
  );
  console.log("hoang UserName", data);
  if (data.length === 0) {
    console.log("not user");
    dispatch({
      type: ALERT_OPEN_FAIL_PASSWORD,
    });
  } else {
    console.log("dispacth", data);
    dispatch({
      type: REGISTRATION_SEND_PASSWORDEMAIL,
      data,
    });
  }
};
const closeAlert = () => async (dispatch) => {
  dispatch({
    type: REGISTRATION_COLSE_ALERT,
  });
};
const loginGoogle = (profile) => async (dispatch) => {
  // console.log(profile,"ACTION")
  const queryEmail = await axios.get(
    "/api/username" + `?email=${profile.email}`
  );
  console.log(queryEmail, "ACTION");
  if (queryEmail.data.length === 0) {
    console.log("profile.image", profile.avatar);
    const profileData = await axios.post(
      "/api/username",
      profile
    );
    console.log(
      profileData,
      "ACTION dataconst { data } = await axios.get(/api/us)",
      profile
    );
    const { data } = await axios.get(
      "/api/username" +
        `?email=${profileData.data.email}&password=${profileData.data.password}`
    );

    // console.log("hoang UserName", data);
    // if (data.length === 0) {
    //   console.log("not user");
    //   dispatch({
    //     type: REGISTRATION_FAIL_PASSWORDEMAIL,
    //   });
    // } else {
    //   console.log("dispacth", data);
    dispatch({
      type: REGISTRATION_SEND_PASSWORDEMAIL,
      data,
    });
    // }
  } else {
    const { data } = await axios.get(
      "/api/username" +
        `?email=${queryEmail.data[0].email}&password=${queryEmail.data[0].password}`
    );

    // console.log("hoang UserName", data);
    // if (data.length === 0) {
    //   console.log("not user");
    //   dispatch({
    //     type: REGISTRATION_FAIL_PASSWORDEMAIL,
    //   });
    // } else {
    console.log("dispacth", data);
    dispatch({
      type: REGISTRATION_SEND_PASSWORDEMAIL,
      data,
    });
    console.log("Email tồn tại");
  }
};
export { registrationEmail, loginEmail, closeAlert, loginGoogle };
