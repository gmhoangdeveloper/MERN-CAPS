import {
  Box,
  Button,
  Container,
  Grid,
  Slider,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const useStyles = makeStyles({
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
});
const Shop = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error, maxPrice, minPrice } = productList;
  const maxPriceScreens = Math.max(
    ...products.map((products) => products.price)
  );
  const minPriceScreens = Math.min(
    ...products.map((products) => products.price)
  );
  const [product, setproduct] = useState(products);
  var [valueRange, setValueRange] = useState([
    minPriceScreens,
    maxPriceScreens,
  ]);
  useEffect(() => {
    dispatch(listProducts());
    // setValueRange([minPrice, maxPrice]);
  }, []);

  // console.log("valueRange", valueRange, minPrice);
  const [searchName, setSearch] = useState("");
  console.log("Value", searchName);

  // const fillterSerch = products.filter(
  //
  // );
  // console.log("fillterindexOf", fillterindexOf);
  const fillterindexOf = products.filter((products) => {
    if (searchName !== "") {
      return products.title.toLowerCase().indexOf(searchName.toLowerCase()) >= 0;
    } else {
      return products.price >= valueRange[0] && products.price <= valueRange[1];
    }
  });
  console.log("fillterindexOf", fillterindexOf);
  const handleChangePrice = (event, newValue) => {
    setValueRange(newValue);
  };
  const handleChangeSearch = (event) => {
    const { name, value } = event.target;
    setSearch(value);
  };
  // ******************************************//

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" className={classes.menuNavbar}>
        <Box>
          <Typography className={classes.headerText}>ALWAYS BE</Typography>
          <Typography className={classes.headerText}>ORIGINAL</Typography>
          <Typography className={classes.headerText2}>
            NEW ARRIVALS ARE HERE
          </Typography>
          <Typography align="center">
            <Button className={classes.buttonHover}>
              <span> Shop Now</span>
            </Button>
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg" className={classes.root}>
        <Typography align="center">LIMITED EDITION COLLECTION</Typography>
        <Box m={5}>
          <Grid container lg={12}>
            <Grid lg={5}>
              <TextField
                label="Search "
                type="search"
                onChange={handleChangeSearch}
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
            <Grid lg={3} style={{ marginLeft: "30px" }}>
              <Typography id="range-slider" gutterBottom>
                Products Price
              </Typography>

              {maxPriceScreens !== -Infinity && minPriceScreens !== Infinity ? (
                <Slider
                  value={valueRange}
                  onChange={handleChangePrice}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  max={maxPriceScreens}
                  min={minPriceScreens}
                  // getAriaValueText={valuetext}
                />
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Box>
        <Grid container direction="row" justify="flex-start" spacing="3">
          {fillterindexOf.length === 0
            ? productList.products.map((products, key) => (
                <CartItem productsItem={products} key={key} />
              ))
            : fillterindexOf.map((products, key) => (
                <CartItem productsItem={products} key={key} />
              ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Shop;
