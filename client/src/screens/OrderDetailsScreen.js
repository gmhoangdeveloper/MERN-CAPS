import {
  Box,
  Grid,
  GridList,
  GridListTile,
  Paper,
  TableCell,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { oderDetail, updateStatusCart } from "../actions/checkoutcartAction";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  spanBold: {
    fontWeight: "bold",
  },
}));
export default function OrderDetailsScreen(props) {
  const paymentCart = useSelector((state) => state.paymentCart);
  const { orderDetail } = paymentCart;
  // console.log("orderDetail.dosc", paymentCart);
  const { id, date } = props.match.params;
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log("props", paymentCart);
  /*Thanh toán thành công momo*/
  const string = props.location.search;
  const substring = "message=Success";
  //   if (Object.keys(orderDetail).length > 1) {
  //     if (string.includes(substring)) {
  //       const updateStatus = { ...orderDetail, status: "Đang xử lý" };
  //       console.log("kkkkkkkkkk", string.includes(substring), updateStatus);
  //       dispatch(updateStatusCart(id, updateStatus));
  //     }
  //   }

  /*END Thanh toán thành công momo*/
  //   console.log(id, orderDetail);
  const subtotalTamTinh = () => {
    var subtotalTamTinh = 0;
    if (orderDetail !== undefined) {
      for (var i = 0; i < orderDetail.productCart.length; i++) {
        subtotalTamTinh +=
          orderDetail.productCart[i].quantity *
          orderDetail.productCart[i].price;
      }
      return (
        <TableCell align="right" id="subtotalTamTinh">
          {subtotalTamTinh} VNĐ
        </TableCell>
      );
    }
  };
  useEffect(() => {
    if (string.includes(substring)) {
      const updateStatus = "Đang xử lý";
      dispatch(oderDetail(id, updateStatus));
      console.log("Câp nhap");
    } else {
      console.log("Không Câp nhap");
      dispatch(oderDetail(id));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        {Object.keys(orderDetail).length > 1 && (
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{
              marginTop: "40px ",
            }}
          >
            <Grid
              lg={7}
              md={12}
              sm={12}
              xs={12}
              style={{
                marginBottom: "40px ",
              }}
            >
              <Typography variant="h5">
                {" "}
                <span className={classes.spanBold}>Chi tiết đơn hàng</span>
              </Typography>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <span className={classes.spanBold}>Sản Phẩm</span>
                      </TableCell>
                      <TableCell align="right">
                        <span className={classes.spanBold}>Tạm Tính</span>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orderDetail.productCart.map((cart, key) => {
                      return (
                        <TableRow>
                          <TableCell component="th" scope="row">
                            {cart.title}x{cart.quantity}
                          </TableCell>
                          <TableCell align="right">
                            {cart.price * cart.quantity} VNĐ
                          </TableCell>
                        </TableRow>
                      );
                    })}

                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.spanBold}
                      >
                        <span className={classes.spanBold}>Tổng số phụ</span>
                      </TableCell>
                      {subtotalTamTinh()}
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.spanBold}
                      >
                        <span className={classes.spanBold}>Giao Hàng</span>
                      </TableCell>
                      <TableCell align="right">FREE SHIP</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.spanBold}
                      >
                        Phương Thức Thanh toán
                      </TableCell>
                      <TableCell align="right">{orderDetail.payment}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.spanBold}
                      >
                        Tổng
                      </TableCell>
                      {subtotalTamTinh()}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid
              lg={4}
              md={12}
              sm={12}
              xs={12}
              style={{
                marginBottom: "40px ",
              }}
            >
              <Paper elevation={3}>
                <Box p={2}>
                  <Typography variant="h5" paragraph={true}>
                    <span className={classes.spanBold}>Đơn Hàng Của Bạn</span>
                  </Typography>
                  {orderDetail.status === "Tạm Giữ" &&
                    orderDetail.orderPayment === "Thanh toán khi nhận hàng" && (
                      <Typography paragraph={true} style={{ color: "green" }}>
                        Cảm Ơn Bạn Bạn Chúng tôi sẽ liên hệ để xác nhận
                      </Typography>
                    )}
                  {orderDetail.status === "Đang xử lý" &&
                    orderDetail.orderPayment ===
                      "Thanh toán ví điện tử Momo" && (
                      <Typography paragraph={true} style={{ color: "green" }}>
                        Cảm Ơn Bạn Bạn Đã Thanh Toán thành Công
                      </Typography>
                    )}
                  {orderDetail.status === "Tạm Giữ" &&
                    orderDetail.orderPayment ===
                      "Thanh toán ví điện tử Momo" && (
                      <Typography paragraph={true} style={{ color: "red" }}>
                        Thanh toán không thành công
                      </Typography>
                    )}
                  <Typography paragraph={true}>
                    <span className={classes.spanBold}>Mã đơn hàng:</span>
                    {orderDetail.codeorders}
                  </Typography>
                  <Typography paragraph={true}>
                    <span className={classes.spanBold}>Date:</span>{" "}
                    {new Date(orderDetail.date).toDateString()}
                  </Typography>
                  <Typography paragraph={true}>
                    <span className={classes.spanBold}> Email:</span>{" "}
                    {orderDetail.email}
                  </Typography>
                  <Typography paragraph={true}>
                    <span className={classes.spanBold}>Tổng cộng:</span>{" "}
                    {orderDetail.subtotalCart}
                  </Typography>
                  <Typography paragraph={true}>
                    <span className={classes.spanBold}>
                      Phương Thức Thanh Toán:
                    </span>{" "}
                    {orderDetail.orderPayment}
                  </Typography>{" "}
                </Box>
              </Paper>
            </Grid>
            <Grid
              container
              lg={12}
              md={12}
              sm={12}
              xs={12}
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Typography
                variant="h5"
                paragraph={true}
                className={classes.spanBold}
              >
                Địa Chỉ Thanh Toán
              </Typography>
              <GridList>
                <GridListTile cols={2}>
                  <Typography>
                    {orderDetail.lastName}
                    {" " + orderDetail.firstName}
                  </Typography>
                  <Typography>{orderDetail.address}</Typography>
                  <Typography>{orderDetail.city}</Typography>
                  <Typography>{orderDetail.phoneNumber}</Typography>
                  <Typography>{orderDetail.email}</Typography>
                  <Typography>{orderDetail.note}</Typography>
                </GridListTile>
              </GridList>
            </Grid>
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  );
}
