import {
  ALERT_OPEN_SELECT,
  ALERT_CLOSE_SELECT,
  ALERT_OPEN_FAIL_PASSWORD,
} from "../constants/alertConstants";

const alertopenSelect = () => async (dispatch) => {
  dispatch({ type: ALERT_OPEN_SELECT });
};

const alertopenFailPassword = () => async (dispatch) => {
  dispatch({ type: ALERT_OPEN_FAIL_PASSWORD });
};
const alertcloseSelect = () => async (dispatch) => {
  dispatch({ type: ALERT_CLOSE_SELECT });
};

export { alertopenSelect, alertcloseSelect, alertopenFailPassword };
