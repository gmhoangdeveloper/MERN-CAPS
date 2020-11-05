import axios from "axios";
import {
  ORDER_DETAIL,
  PAYMENTCART_LIST_MOMO,
  PAYMENTCART_LIST_PAYMENTONDELIVERY,
  PAYMENTCART_UPDATE_MOMO_STATUS,
} from "../constants/checkoutcartConstants";
import CryptoJS from "crypto-js";
import HmacSHA256 from "crypto-js/hmac-sha256";
const paymentonDelivery = (subtotalCart) => async (dispatch) => {
  console.log("paymentonDeliverysubtotalCart", subtotalCart);
  try {
    const dataResponsePaymentCart = await axios.post(
      "/api/paymentcart/",
      subtotalCart
    );
    dispatch({
      type: PAYMENTCART_LIST_PAYMENTONDELIVERY,
      dataResponsePaymentCart,
    });
    console.log("dataResponsePaymentCart", dataResponsePaymentCart);
  } catch (error) {
    console.log(error);
  }
};
const paymentCartMomo = (subtotalCart) => async (dispatch) => {
  const dataResponsePaymentCart = await axios.post(
    "/api/paymentcart/",
    subtotalCart
  );
  var requestId = dataResponsePaymentCart.data.date;
  var subtotalCartProduct = dataResponsePaymentCart.data.subtotalCart;
  var returnUrlOrder =
    "https://mern-nodejs-caps.herokuapp.com/orderdetailsscreen/" +
    dataResponsePaymentCart.data._id +
    "/" +
    dataResponsePaymentCart.data.date;
  const secretkey = "9JHO4c3lgPjkgibhAtM8wV8tvlxPAzp0";
  var datatest =
    "partnerCode=MOMOAWIY20200512&accessKey=j786WfkBxCqtZzOz&requestId=" +
    requestId +
    "&amount=" +
    subtotalCartProduct +
    "&orderId=MM" +
    requestId +
    "&orderInfo=Thanh Toán Qua Momo&returnUrl=" +
    returnUrlOrder +
    "&notifyUrl=https://momo.vn&extraData=merchantName=Goat White Payment Momo";
  const datatest256 = HmacSHA256(datatest, secretkey).toString(
    CryptoJS.enc.Hex
  );

  const dataRequestMomo = {
    partnerCode: "MOMOAWIY20200512", //*
    accessKey: "j786WfkBxCqtZzOz", //*
    requestType: "captureMoMoWallet", //
    requestId: requestId + "", //Lấy thời gian *
    amount: subtotalCartProduct + "", //Tổng giá tiền đơn hàng*
    orderId: "MM" + requestId + "", //Mã đơn hàng*
    orderInfo: "Thanh Toán Qua Momo", //*
    returnUrl: returnUrlOrder, //*
    notifyUrl: "https://momo.vn", //*
    extraData: "merchantName=Goat White Payment Momo", //*
    signature: datatest256,
  };
  var myBodyJsonString = JSON.stringify(dataRequestMomo);

  const dataResponseMoMo = await axios.post(
    "https://test-payment.momo.vn/gw_payment/transactionProcessor",
    myBodyJsonString
  );

  if (dataResponseMoMo.data.message === "Success") {
    const dataResponsePaymentCart = await axios.post(
      "/api/paymentcart/",
      subtotalCart
    );
    dispatch({
      type: PAYMENTCART_LIST_MOMO,
      dataResponseMoMo,
      dataResponsePaymentCart,
    });
    console.log();
  }
};
const oderDetail = (orderid, updateStatus) => async (dispatch) => {
  // ORDER_DETAIL
  // console.log("DELL id", orderid);
  const dataoderDetail = await axios.get(
    "/api/paymentcart/" + orderid
  );
  if (updateStatus) {
    const update = { ...dataoderDetail.data, status: updateStatus };
    console.log("dataoderDetail Update", dataoderDetail, update);
    const dataoderDetailupdataStatus = await axios.put(
      "/api/paymentcart/" + orderid,
      update
    );
    dispatch({
      type: ORDER_DETAIL,
      dataoderDetail: dataoderDetailupdataStatus,
    });
    console.log("dataoderDetailupdataStatus", dataoderDetailupdataStatus);
  } else {
    dispatch({ type: ORDER_DETAIL, dataoderDetail });
    console.log("dataoderDetail", dataoderDetail);
  }

  console.log("dataoderDetail", dataoderDetail);
  // dispatch({ type: ORDER_DETAIL, dataoderDetail });
};

export { paymentCartMomo, oderDetail, paymentonDelivery };
