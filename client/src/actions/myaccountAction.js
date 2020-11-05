import axios from "axios";
import {
  ACCOUNT_USER_UPDATE,
  LOGOUT_ACCOUNT,
  ORDER_LIST_CART,
} from "../constants/myaccountConstants";

const AccountUserEdit = (dataUser) => async (dispatch) => {
  const formData = new FormData();
  for (const name in dataUser) {
    formData.append(name, dataUser[name]);
  }
  const multipartformData = [...formData];
  console.log("-----------------", dataUser, multipartformData);
  console.log(multipartformData[0][1]);

  axios
    .put(
      "/api/username/" + multipartformData[0][1],
      formData,
      {
        headers: {
          "x-device-id": "stuff",
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      console.log("response.data", response.data["data"]);
      dispatch({
        type: ACCOUNT_USER_UPDATE,
        dataUser: response.data["data"],
      });
    })
    .catch((err) => {
      console.log("err", err);
    });
};
const UserOrderCart = (email, Pagination) => async (dispatch) => {
  const userordercart = await axios.get(
    "/api/paymentcart/?email=" +
      email +
      `&page=${Pagination}&limit=5` +
      "&sort=date&order=desc"
  );
  console.log(userordercart, "Pagination", Pagination);
  console.log(userordercart["data"].paginate.docs);
  dispatch({
    type: ORDER_LIST_CART,
    userordercart: userordercart["data"].paginate,
  });
};
const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT_ACCOUNT,
  });
};
export { AccountUserEdit, UserOrderCart, logout };
