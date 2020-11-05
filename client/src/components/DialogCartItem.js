import {
  CardMedia,
  Dialog,
  DialogContent,
  Grid,
  makeStyles,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartDrawer from "./CartDrawer";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonLeft: {
    color: "white",
    backgroundColor: "black",

    "&:hover": {
      backgroundColor: "black",
    },
  },
}));

export default function DialogCartItem(props) {
  const classes = useStyles();
  const { clickOpenDialog } = props;
  const {
    _id,
    image1,
    image2,
    price,
    quantity,
    size,
    status,
    title,
    description,
  } = props.dataProductDialog;

  const [open, setOpen] = useState(clickOpenDialog);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [dataProductCaps, setdataProductCaps] = useState({
    ...props.dataProductDialog,
  });
  const handleChangeSizeandQuantity = (event) => {
    const { name, value } = event.target;
    setdataProductCaps((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(name, value, "name ,value");
  };
  // console.log("DIALOGCART ITEM", dataProductCaps);
  return (
    <div>
      <Button
        variant="outlined"
        fullWidth={true}
        className={classes.buttonLeft}
        onClick={handleClickOpen}
      >
        Add to Cart
      </Button>
      <Dialog
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Grid container lg={12}>
            <Grid lg={6} md={12} sm={12} xs={12}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="100%"
                width="100%"
                image={image1}
                title="Contemplative Reptile"
              ></CardMedia>
            </Grid>
            <Grid lg={6} md={12} sm={12} xs={12}>
              <Typography variant="h5">{title}</Typography>
              <Typography gutterBottom>
                <span style={{ fontWeight: "bold" }}>SKU:</span> {_id}
              </Typography>
              <Typography gutterBottom>
                <span style={{ fontWeight: "bold" }}>PRICE: </span>
                {price} VNĐ
              </Typography>
              <Typography gutterBottom>
                <span style={{ fontWeight: "bold" }}>SIZE:</span>
                <FormControl className={classes.formControl}>
                  <Select
                    name="size"
                    value={dataProductCaps.size}
                    onChange={handleChangeSizeandQuantity}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Small"}>Small</MenuItem>
                    <MenuItem value={"Medium"}>Medium</MenuItem>
                    <MenuItem value={"Large"}>Large</MenuItem>
                  </Select>
                  <FormHelperText>Size Caps</FormHelperText>
                </FormControl>
              </Typography>
              <Typography gutterBottom>
                <span style={{ fontWeight: "bold" }}>QUANTITY:</span>
                <TextField
                  label="Number"
                  type="number"
                  name="quantity"
                  value={dataProductCaps.quantity}
                  readOnly
                  onChange={handleChangeSizeandQuantity}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{ inputProps: { min: 1, max: 10 } }}
                  variant="outlined"
                  fullWidth
                />
              </Typography>
              <Typography>
                <Link to={`/viewdetail/${_id}`}>View More Details</Link>
              </Typography>
              <CartDrawer
                addToCart={dataProductCaps}
                quantity={dataProductCaps.quantity}
              />
            </Grid>{" "}
            <Grid lg={6} md={10} sm={10} xs={10}>
              <Box mt={5} mb={5}>
                <Typography>{dataProductCaps.description}</Typography>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
