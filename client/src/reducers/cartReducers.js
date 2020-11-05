import {
  CART_LIST_ADD,
  CART_LIST_DELETE,
  CART_LIST_UPDATE,
} from "./../constants/cartConstants";
var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];

function cartListReducer(state = initialState, action) {
  var { product, key, quantity } = action;
  var index = -1;
  switch (action.type) {
    case CART_LIST_ADD:
      index = findProductInCart(state, product);
      if (index !== -1) {
        if (state[index].size === product.size) {
          state[index].quantity += Number(quantity);
          console.log("CART_LIST_ADD IF")
        
          localStorage.setItem("CART", JSON.stringify(state));
        
        }
      } else {
        console.log("CART_LIST_ADD ELSE");
        state.push(product);
        localStorage.setItem("CART", JSON.stringify(state));
      }
      return [...state];
    case CART_LIST_DELETE:
      state.splice(action.keyProduct, 1);
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case CART_LIST_UPDATE:
      if (state[key].quantity < quantity) {
        state[key].quantity += 1;
      } else {
        state[key].quantity -= 1;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}
var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i]._id === product._id && cart[i].size === product.size) {
        index = i;
        //Nếu mà cùng size thì nó chỉ add số lượng dừng lại

        break;
      }
      //còn Khác size thì add mới giỏ hàng sản phẩm
    }
  }
  return index;
};
export { cartListReducer };
