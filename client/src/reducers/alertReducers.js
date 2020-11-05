import {
  ALERT_OPEN_SELECT,
  ALERT_CLOSE_SELECT,
  ALERT_OPEN_FAIL_PASSWORD,
} from "./../constants/alertConstants";
function alertListReducer(state = { loading: false,loadingFailPassword:false }, action) {
  switch (action.type) {
    case ALERT_OPEN_SELECT:
      return { ...state, loading: true };
    case ALERT_OPEN_FAIL_PASSWORD:
      return { ...state, loadingFailPassword: true };
    case ALERT_CLOSE_SELECT:
      return { ...state, loading: false };
    default:
      return state;
  }
}
export { alertListReducer };
