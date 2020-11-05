import React from "react";
import axios from "axios";

const OderDetailGetAll = () => async (dispatch) => {
  const userordercart = await axios.get("/api/paymentcart");
  console.log("userordercart", userordercart);
};

export default OderDetailGetAll;
