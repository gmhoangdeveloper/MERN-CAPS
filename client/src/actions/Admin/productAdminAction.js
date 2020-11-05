import React from "react";
import axios from "axios";

const listProductAdmin = (id) => async (dispatch) => {
  const listProduct = await axios.delete("/api/products/" + id);
  console.log(listProduct)
//   dispatch({ type: PRODUCT_ADMIN_LIST_DELETE, payload: error.message });

  
};

export default listProductAdmin;
