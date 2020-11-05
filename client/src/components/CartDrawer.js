import {
  Grid,
  GridList,
  GridListTile,
  IconButton,
  TextField,
  Typography,
  Box,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCarts, listCarts, updateCarts } from "../actions/cartActions";
// import Alert from "@material-ui/lab/Alert";
import { alertopenSelect } from "../actions/alertActions";
import CustomizedSnackbars from "./Alert";
const useStyles = makeStyles((theme) => ({
  drawer: {
    // width: "374px",
    width: "350px",
  },
  headerCart: {
    backgroundColor: "black",
    color: "white",

    padding: "20px",
  },

  id_productTxt: {
    // border: "1px solid  blue",
    width: "70px",
    padding: "0",
    marginBottom: "50px",
  },
  buttonLeft: {
    color: "white",
    backgroundColor: "black",

    "&:hover": {
      backgroundColor: "black",
    },
  },
}));
export default function CartDrawer(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);
  const alertReducer = useSelector((state) => state.alertReducer);
  const [quantity, setQuantity] = useState(1);
  const handleChangeQuantityDrawer = (key, quantity) => (event) => {
    dispatch(updateCarts(key, Number(event.target.value)));
  };
  const deleteProductCart = (keyProduct) => {
    dispatch(deleteCarts(keyProduct));
  };
  if (props.openCartDrawe) {
    setState({ ...state, right: true });
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if (props.addToCart.size !== "") {
      console.log(
        " props.addToCart.quantity ,quantity",
        props.addToCart.quantity,
        quantity
      );
      setState({ ...state, [anchor]: open });
      if (open) {
        const dataAddtoCart = { ...props.addToCart, quantity: props.quantity };
        dispatch(listCarts(dataAddtoCart, props.quantity));
      }
    } else {
      dispatch(alertopenSelect());
      console.log("Plead Select Size", alertReducer.loading);
      // alert("Please select Size");
    }
  };
  const CartProductDrawer = () => {
    if (cartList.length > 0) {
      console.log("testcartList", cartList);
      //JSON.parse(localStorage.getItem("CART"))
      const cartproductdrawer = JSON.parse(localStorage.getItem("CART"));
      // console.log("CartProductDrawerOne", cartproductdrawer.quantity);
      // console.log("CartProductDrawerTwo", cartList.quantity);
      //  return   <p>Bạn Có sản phẩm</p>
      return cartList.map((cartproductdrawer, index) => {
        console.log("cartproductdrawer.quantity", cartproductdrawer.quantity);
        if (cartproductdrawer !== undefined) {
          return (
            <Grid className={classes.drawer} lg={12} rows={3} spacing={2}>
              <GridList cellHeight={80} cols={4}>
                <GridListTile cols={1}>
                  <img
                    src={cartproductdrawer.image1}
                    style={{ width: "80px", height: "80px" }}
                  />
                </GridListTile>
                <GridListTile cols={2}>
                  <Typography variant="caption" display="block">
                    {cartproductdrawer.title}
                    {cartproductdrawer.size}
                  </Typography>
                  <Typography variant="caption" display="block">
                    PRICE:{cartproductdrawer.price.toLocaleString()}
                  </Typography>
                  <TextField
                    label="Number"
                    type="number"
                    value={cartproductdrawer.quantity}
                    onChange={handleChangeQuantityDrawer(
                      index,
                      cartproductdrawer.quantity
                    )}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                    variant="outlined"
                    // InputProps={{ inputProps: { min: 1, max: 10 } }}
                  />
                </GridListTile>
                <GridListTile cols={1}>
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => deleteProductCart(index)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </GridListTile>
              </GridList>
            </Grid>
          );
        }
      });
    } else {
      return (
        <Grid className={classes.drawer} lg={12} rows={3} spacing={2}>
          <Box style={{ margin: "10px 0" }}>
            <Button
              variant="contained"
              style={{ background: "black", color: "white" }}
              fullWidth={true}
            >
              Bạn chưa có sản phẩm
            </Button>
          </Box>
        </Grid>
      );
    }
  };
  const subtotalCart = () => {
    if (state.right) {
      var subtotalTamTinh = 0;
      for (var i = 0; i < cartList.length; i++) {
        subtotalTamTinh += cartList[i].quantity * cartList[i].price;
      }
    }
    return subtotalTamTinh;
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={toggleDrawer("right", true)}
        fullWidth={true}
        className={classes.buttonLeft}
      >
        Add to Card
      </Button>
      <CustomizedSnackbars alertOpenandClose={alertReducer.loading}>
        Vui Lòng Chọn SIZE
      </CustomizedSnackbars>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        style={{ width: "300px !important" }}
      >
        <Grid
          className={classes.headerCart}
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <IconButton
            aria-label="add to shopping cart"
            style={{ color: "white" }}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <Typography>CART</Typography>
          <Typography></Typography>
        </Grid>
        <Grid xs={9} style={{ margin: "30px auto auto auto" }}>
          {CartProductDrawer()}
          <Grid>
            <Typography>Subtotal</Typography>
            <Typography>${subtotalCart()}</Typography>
            <Link to="/paymentcart">
              <Button
                variant="contained"
                style={{ backgroundColor: "black", color: "white" }}
                fullWidth={true}
              >
                View Cart
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
}
