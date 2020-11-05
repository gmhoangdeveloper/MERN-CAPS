import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import DialogCartItem from "./DialogCartItem";
// import CartDrawer from "./CartDrawer";

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
});
const CartItem = (props) => {
  const classes = useStyles();
  const {
    id,
    image1,
    image2,
    price,
    quantity,
    size,
    status,
    title,
    description,
  } = props.productsItem;

  //   const [open, setOpen] = useState(false);
  //   const [childOpen, setchildOpen] = useState(false);

  //   const handleClick = (value) => {
  //     console.log(value);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="100%"
              image={image1}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom component="h5" align="center">
                {title}
              </Typography>
              <Typography gutterBottom component="h5" align="center">
                ${price.toLocaleString()}
              </Typography>
              <DialogCartItem dataProductDialog={props.productsItem} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default CartItem;
