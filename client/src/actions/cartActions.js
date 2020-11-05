import {
  CART_LIST_ADD,
  CART_LIST_DELETE,
  CART_LIST_UPDATE,
} from "../constants/cartConstants";

const listCarts = (product, quantity) => async (dispatch) => {
  dispatch({ type: CART_LIST_ADD, product, quantity });
  console.log("ACTION 22", product, quantity);
};
const deleteCarts = (keyProduct) => async (dispatch) => {
  dispatch({ type: CART_LIST_DELETE, keyProduct });
};
const updateCarts = (key, quantity) => async (dispatch) => {
  dispatch({ type: CART_LIST_UPDATE, key, quantity });
};
// const alertnotSelect = () => async (dispatch) => {
//   dispatch({ type: ALERT_NOT_SELECT });
// };
export { listCarts, deleteCarts, updateCarts };
