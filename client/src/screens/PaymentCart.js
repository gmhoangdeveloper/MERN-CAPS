import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  TextField,
  Container,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { deleteCarts, updateCarts } from "../actions/cartActions";
import DeleteIcon from "@material-ui/icons/Delete";
export const PaymentCart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);
  const deleteProductCart = (keyProduct) => {
    dispatch(deleteCarts(keyProduct));
  };
  const handleChangeQuantityDrawer = (key, quantity) => (event) => {
    dispatch(updateCarts(key, Number(event.target.value)));
  };
  const listproductcart = () => {
    return cartList.map((dataproduct, index) => {
      const sumProduct = dataproduct.quantity * dataproduct.price;
      return (
        <>
          <Grid
            lg={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
            key={index}
          >
            <Grid lg={3} md={3} sm={3} xs={3}>
              <img
                src={dataproduct.image2}
                style={{ width: "120px", height: "120px" }}
              />
            </Grid>
            <Grid lg={3} md={3} sm={3} xs={3}>
              <Typography gutterBottom style={{ fontWeight: "bold" }}>
                {dataproduct.title}
              </Typography>

              <TextField
                label="Number"
                type="number"
                value={dataproduct.quantity}
                onChange={handleChangeQuantityDrawer(
                  index,
                  dataproduct.quantity
                )}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                InputProps={{ inputProps: { min: 1, max: 10 } }}
                size="small"
                fullWidth
              />
            </Grid>

            <Grid lg={2} md={2} sm={2} xs={2}>
              <Typography align="center">
                {dataproduct.price} x {dataproduct.quantity}
              </Typography>
            </Grid>
            <Grid lg={2} md={2} sm={2} xs={2}>
              <Typography align="center">{sumProduct}</Typography>
            </Grid>
            <Grid lg={1} md={1} sm={1} xs={1} align="center">
              <IconButton
                aria-label="delete"
                // className={classes.margin}
                onClick={() => deleteProductCart(index)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
        </>
      );
    });
  };
  const subtotalCart = () => {
    var subtotalTamTinh = 0;
    for (var i = 0; i < cartList.length; i++) {
      subtotalTamTinh += cartList[i].quantity * cartList[i].price;
      console.log(i);
    }

    return subtotalTamTinh;
  };

  return (
    <>
      <Navbar></Navbar>{" "}
      <Container maxWidth="lg">
        <Grid
          lg={10}
          style={{ margin: "auto" }}
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid lg={7} md={12} sm={12} xs={12}>
            <Typography style={{ fontWeight: "bold" }}>My cart</Typography>
            <Divider />
            {listproductcart()}
          </Grid>
          <Grid lg={5} md={12} sm={12} xs={12}>
            <Typography style={{ fontWeight: "bold" }}>Oder Summary</Typography>
            <TableContainer>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell align="left">Subtotal</TableCell>
                    <TableCell align="right">$ {subtotalCart()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Shipping Vietnam</TableCell>
                    <TableCell align="right">FREE</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="right">${subtotalCart()}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Link to="/checkoutcart">
              <Button
                variant="outlined"
                fullWidth={true}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  margin: "20px 0",
                }}
              >
                Tiến Hành Thanh Toán
              </Button>
            </Link>
            <Typography>Phiếu Ưu Đãi</Typography>
            <TextField
              id="outlined-basic"
              label="Mã Ưu Đãi"
              fullWidth={true}
              variant="outlined"
            />
            <Button
              fullWidth={true}
              variant="contained"
              color="secondary"
              style={{
                backgroundColor: "black",
                color: "white",
                margin: "20px 0",
              }}
            >
              Áp dụng
            </Button>
          </Grid>
        </Grid>{" "}
      </Container>
      <Footer></Footer>
    </>
  );
};
