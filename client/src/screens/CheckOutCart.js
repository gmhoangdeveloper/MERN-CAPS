import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import FormatHex from "crypto-js/format-hex";
import CryptoJS from "crypto-js";
//crypto-js/hmac-sha256  CryptoJS
import HmacSHA256 from "crypto-js/hmac-sha256";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertopenSelect } from "../actions/alertActions";
import CustomizedSnackbars from "../components/Alert";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  paymentonDelivery,
  paymentCartMomo,
} from "./../actions/checkoutcartAction";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
const CheckOutCart = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);
  const paymentCartReduce = useSelector((state) => state.paymentCart);
  const account = useSelector((state) => state.myaccount.account);
  // const account = JSON.parse(localStorage.getItem("Account"));
  const alertReducer = useSelector((state) => state.alertReducer);
  var { loading } = paymentCartReduce;
  var [open, setOpen] = useState(false);
  const [subtotalCart, setsubtotalCart] = useState({
    codeorders: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    note: "",
    date: "",
    orderPayment: "",
    productCart: [],
    subtotalCart: "",
    date: 0,
    dateofbirth: "0",
    status: "Tạm Giữ",
  });
  useEffect(() => {
    setsubtotalCart((prevState) => ({
      ...prevState,
      ...account[0],
    }));
  }, []);

  const handleChangeBillingInformation = (e) => {
    const { name, value, type } = e.target;

    setsubtotalCart((prevState) => ({
      ...prevState,
      codeorders: randomid(5),
      productCart: cartList,
      [name]: value,
      subtotalCart: +document.getElementById("subtotalTamTinh").innerHTML,
      date: Date.now(),
    }));
  };
  function randomid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const paymentCart = () => {
    for (const property in subtotalCart) {
      if (
        subtotalCart[property] === "" &&
        property !== "avatar" &&
        property !== "note" &&
        property !== "password"
      ) {
        dispatch(alertopenSelect());
        console.log("Sai", Object.keys(subtotalCart).length, property);
        return;
        break;
      }
    } // END
    if (subtotalCart.orderPayment === "Thanh toán ví điện tử Momo") {
      dispatch(paymentCartMomo(subtotalCart));
    } else if (subtotalCart.orderPayment === "Thanh toán khi nhận hàng") {
      console.log("Thanh toán khi nhận hàng", subtotalCart);
      // paymentonDelivery
      dispatch(paymentonDelivery(subtotalCart));
    }
  };
  const subtotalTamTinh = () => {
    var subtotalTamTinh = 0;
    for (var i = 0; i < cartList.length; i++) {
      subtotalTamTinh += cartList[i].quantity * cartList[i].price;
    }
    return (
      <TableCell align="right" id="subtotalTamTinh">
        {subtotalTamTinh}
      </TableCell>
    );
  };
  return (
    <>
      <Navbar />
      <CustomizedSnackbars alertOpenandClose={alertReducer.loading}>
        Vui Lòng Điền thêm các thông tin còn trống
      </CustomizedSnackbars>{" "}
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          lg={10}
          md={12}
          sm={12}
          xs={12}
          style={{ margin: "auto" }}
        >
          <Grid lg={7}>
            <Typography>Thông tin thanh toán</Typography>
            <div className={classes.root}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={3}
                lg={11}
                md={12}
                sm={12}
                xs={12}
                style={{
                  margin: "auto",
                }}
              >
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <TextField
                    fullWidth={true}
                    label="Tên"
                    value={subtotalCart && subtotalCart.firstName}
                    // defaultValue={account[0] && account[0].firstName}
                    onChange={handleChangeBillingInformation}
                    name="firstName"
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <TextField
                    fullWidth={true}
                    label="Họ"
                    name="lastName"
                    value={subtotalCart && subtotalCart.lastName}
                    //   defaultValue={account[0] && account[0].lastName}
                    onChange={handleChangeBillingInformation}
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth={true}
                    value={subtotalCart && subtotalCart.email}
                    //   defaultValue={account[0] && account[0].email}
                    onChange={handleChangeBillingInformation}
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <TextField
                    type="number"
                    fullWidth={true}
                    label="Số Điện Thoại"
                    name="phoneNumber"
                    value={subtotalCart && subtotalCart.phoneNumber}
                    //   defaultValue={account[0] && account[0].phoneNumber}
                    onChange={handleChangeBillingInformation}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    label="Địa Chỉ"
                    name="address"
                    fullWidth={true}
                    value={subtotalCart && subtotalCart.address}
                    //   defaultValue={account[0] && account[0].address}
                    onChange={handleChangeBillingInformation}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    className={classes.textFieldTinhThanhPho}
                    label="Tỉnh/ Thành Phố"
                    fullWidth={true}
                    name="city"
                    value={subtotalCart && subtotalCart.city}
                    //   defaultValue={account[0] && account[0].city}
                    onChange={handleChangeBillingInformation}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    label="Ghi chú đơn hàng (tuỳ chọn)"
                    multiline
                    rows={4}
                    defaultValue="Giao trước 5h"
                    variant="outlined"
                    fullWidth={true}
                    name="note"
                    value={subtotalCart && subtotalCart.note}
                    onChange={handleChangeBillingInformation}
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid lg={4} md={12} sm={12} xs={12}>
            <Typography gutterBottom style={{ fontWeight: "bold" }}>
              Đơn Hàng Của Bạn
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography gutterBottom style={{ fontWeight: "bold" }}>
                        Sản Phẩm
                      </Typography>
                    </TableCell>
                    <TableCell align="right">Tạm Tính</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartList.map((cart, key) => {
                    return (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {cart.title}x{cart.quantity}
                        </TableCell>
                        <TableCell align="right">
                          {cart.price * cart.quantity}
                        </TableCell>
                      </TableRow>
                    );
                  })}

                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      Tạm tính
                    </TableCell>
                    {subtotalTamTinh()}
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      Giao Hàng
                    </TableCell>
                    <TableCell align="right">Đồng Giá VNĐ</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      Tổng
                    </TableCell>
                    {subtotalTamTinh()}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <FormControl>
              <RadioGroup col>
                <FormControlLabel
                  value="Thanh toán ví điện tử Momo"
                  control={<Radio color="primary" />}
                  label="Thanh toán ví điện tử Momo"
                  name="orderPayment"
                  onChange={handleChangeBillingInformation}
                />
                <FormControlLabel
                  value="Thanh toán khi nhận hàng"
                  control={<Radio color="primary" />}
                  label="Thanh toán khi nhận hàng"
                  name="orderPayment"
                  onChange={handleChangeBillingInformation}
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              size="medium"
              fullWidth={true}
              style={{
                backgroundColor: "black",
                color: "white",
                margin: "20px 0",
              }}
              onClick={() => paymentCart()}
            >
              Thanh Toán
            </Button>
          </Grid>
        </Grid>
      </Container>
      {/* <h1>Thanh toán sản phẩm</h1> */}
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Footer />
    </>
  );
};

export default CheckOutCart;
