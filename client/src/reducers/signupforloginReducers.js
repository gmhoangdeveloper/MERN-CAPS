import {
  REGISTRATION_INSERT_EMAIL,
  REGISTRATION_SEND_PASSWORDEMAIL,
  REGISTRATION_FAIL_PASSWORDEMAIL,
  REGISTRATION_COLSE_ALERT,
} from "../constants/signupforloginConstants";
import {
  BACKDROP_LOADING_OPEN,
  BACKDROP_LOADING_COLSE,
} from "../constants/alertConstants";
// var data = JSON.parse(localStorage.getItem("Account"));
// var initialState = data ? data : [];

function signupforloginReducer(state = { loading: false }, action) {
  const { data, dataUser } = action;
  switch (action.type) {
    case REGISTRATION_INSERT_EMAIL:
      console.log("REGISTRATION_INSERT_EMAIL", data);
      return { ...state, datauser: data };
    case REGISTRATION_SEND_PASSWORDEMAIL:
      console.log("REGISTRATION_SEND_PASSWORDEMAIL", data);
      localStorage.setItem("Account", JSON.stringify(data));
      window.location.reload();
      return { loading: true };

    case REGISTRATION_FAIL_PASSWORDEMAIL:
      return { loading: false };

    case REGISTRATION_COLSE_ALERT:
      return { loading: false };
    case BACKDROP_LOADING_OPEN:
      return { loading: true };
    case BACKDROP_LOADING_COLSE:
      return { loading: false };

    default:
      return state;
  }
}

export { signupforloginReducer };
