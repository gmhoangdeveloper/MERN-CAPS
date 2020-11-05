import {
  ACCOUNT_USER_UPDATE,
  ORDER_LIST_CART,
  LOGOUT_ACCOUNT,
} from "./../constants/myaccountConstants";
var data = JSON.parse(localStorage.getItem("Account"));
var accountState = data ? data : [];
function myaccountReducer(
  state = { account: accountState, loading: false },
  action
) {
  const { userordercart, dataUser } = action;
  switch (action.type) {
    case ACCOUNT_USER_UPDATE:
      localStorage.setItem("Account", JSON.stringify([dataUser]));
      return { ...state, account: [dataUser], loading: true };
    case ORDER_LIST_CART:
      console.log("reducs", userordercart);
      return { ...state, userordercart };
    case LOGOUT_ACCOUNT:
      localStorage.removeItem("Account");
      var base_url = window.location.origin;
      window.location.href = `${base_url}`;
      return { ...state };
    default:
      return state;
  }
}
export { myaccountReducer };
