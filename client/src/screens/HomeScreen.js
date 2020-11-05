import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import GridImage from "../components/GridImage";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme)=>({
  menuNavbar: {
    backgroundImage:
      "url(https://static.wixstatic.com/media/baac51_88d59da2f5a844e9850ee580ab0c8b8d~mv2_d_4000_1782_s_2.jpg/v1/fill/w_1189,h_660,al_tl,q_85,usm_0.66_1.00_0.01/baac51_88d59da2f5a844e9850ee580ab0c8b8d~mv2_d_4000_1782_s_2.webp)",
    width: "100%",
    height: "500px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: " 46px",
    },
    fontSize: " 80px",
    fontWeight: "bold",
  },
  headerText2: {
    color: "white",
    textAlign: "center",
  },
  root: { flexGrow: 1 },
  buttonHover: {
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    textAlign: "center",
    border: "1px solid white",
    color: "white",
    fontWeight: "none",
  },
}));

const HomeScreen = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const productList = useSelector((state) => state.productList);
  // console.log("productList", productList);
  const { products, loading, error } = productList;
  // console.log("products", products);
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  // Test
  // const [testAlert, settestAlert] = useState({ laptop: false });
  // const handleClick = (open) => {
  //   console.log(open,"abc testAlert", testAlert);
  //   settestAlert({ laptop: true });
  // };
  return (
    <>
      <Navbar />
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <CustomizedSnackbars testAlert={testAlert} handleClick={handleClick} /> */}
      <Container maxWidth="lg" className={classes.menuNavbar}>
        <Box>
          <Typography className={classes.headerText}>ALWAYS BE</Typography>
          <Typography className={classes.headerText}>ORIGINAL</Typography>
          <Typography className={classes.headerText2}>
            NEW ARRIVALS ARE HERE
          </Typography>
          <Typography align="center">
            <Button className={classes.buttonHover}>
            <Link to="/shop" style={{ color: "black" }}>
                Shop All
              </Link>
            </Button>
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg" className={classes.root}>
        <Typography align="center">LIMITED EDITION COLLECTION</Typography>
        <Grid container direction="row" justify="flex-start" spacing="3">
          {products.map((products, key) => (
            <CartItem productsItem={products} key={key} />
          ))}
        </Grid>
        <Box m={5}>
          <Typography align="center">
            <Button variant="contained">
              <Link to="/shop" style={{ color: "black" }}>
                Shop All
              </Link>
            </Button>
          </Typography>
        </Box>
      </Container>
      {/* Danh sach hinh anhr */}
      {/* <DialogCartItem /> */}
      <GridImage />
      <Footer />
      {/* <Navbar2/> */}
    </>
  );
};

export default HomeScreen;
