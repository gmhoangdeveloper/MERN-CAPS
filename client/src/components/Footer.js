import {
  Box,
  Button,
  Grid,
  Hidden,
  Input,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import React from "react";
const useStyles = makeStyles({
  inputEmail: {
    "&:before": {
      borderColor: "red",
    },

    "&:after": {
      borderColor: "white",
    },
    color: "white",
  },
  boxSubmit: {
    display: "flex",
    justifyContent: "flex-end",
  },
  inputButton: {
    marginLeft: "10px",
    borderColor: "white",
    color: "white",
  },
  footerBox: {
    display: "flex",
    justifyContent: "center",
    height: "200px",
    backgroundColor: "black",
    // border: "1px solid yellow",
    // paddingTop: "60px",
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footerBox} p={6}>
        <Grid container lg={10} sm={10}>
          <Hidden xsDown smDown>
            <Grid item lg={3} md={3} sm={3}>
              <Typography>
                <Link>Shop</Link>
              </Typography>
              <Typography>
                <Link>Stockists</Link>
              </Typography>
              <Typography>
                <Link>Blog</Link>
              </Typography>
              <Typography>
                <Link>About Us</Link>
              </Typography>
              <Typography>
                <Link>Contact</Link>
              </Typography>
            </Grid>
          </Hidden>
          <Hidden xsDown smDown>
            <Grid item sm={3} md={3} lg={3}>
              <Typography>
                <Link>FAQ</Link>
              </Typography>
              <Typography>
                <Link>Shipping & Returns</Link>
              </Typography>
              <Typography>
                <Link>Store Policy</Link>
              </Typography>
              <Typography>
                <Link>Store Policy</Link>
              </Typography>
            </Grid>
          </Hidden>

          <Grid item lg={6} xs={12} sm={12} md={6}>
            <Box className={classes.boxSubmit}>
              <form noValidate autoComplete="off">
                <Input
                  placeholder="Email"
                  inputProps={{ "aria-label": "description" }}
                  className={classes.inputEmail}
                />
                <Button variant="outlined" className={classes.inputButton}>
                  SUBSCRIBE
                </Button>
              </form>
            </Box>
            <Box
              style={{ color: "white" }}
              className={classes.boxSubmit}
              pt={3}
            >
              <FacebookIcon />
              <FacebookIcon />
              <FacebookIcon />
              <FacebookIcon />
              <FacebookIcon />
              <FacebookIcon />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ backgroundColor: "#A6A2A2" }}>
        <Typography align="center">
          ©2023 by Raw.etc. Proudly created with Wix.com
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
