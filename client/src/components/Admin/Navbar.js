import React from "react";
import {
  Container,
  Grid,
  Avatar,
  Typography,
  Box,
  Badge,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
function Navbar(props) {
  return (
    <Grid style={{ backgroundColor: "#AAAAAA" }}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid xs={12} sm={12} md={12} lg={6}>
            <img src="/images/Capture.png" />
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={6}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Typography>Giang Minh Hoang</Typography>
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
              <Badge badgeContent={4} color="primary">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Navbar;
