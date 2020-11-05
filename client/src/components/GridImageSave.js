import { Box, CardMedia, Grid } from "@material-ui/core";
import React from "react";

const GridImage = () => {
  return (
    <Box style={{ backgroundColor: "#fafafa" }}>
      {/* <Typography align="center">#INSTAGRAM</Typography> */}
      <Grid lg={10} container style={{ margin: "auto" }}>
        <Grid container lg={12}>
          <Grid item lg={2}>
            <Grid item xs={12}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://static.parastorage.com/services/instagram-cdn/1.433.0/assets/ig-templates-accounts/Editor/Cap Hats/01.jpg"
                title="Contemplative Reptile"
              />
            </Grid>
            <Grid item xs={12}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://static.parastorage.com/services/instagram-cdn/1.433.0/assets/ig-templates-accounts/Editor/Cap Hats/05.jpg"
                title="Contemplative Reptile"
              />
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <Grid item xs={12}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="280"
                image="https://static.parastorage.com/services/instagram-cdn/1.433.0/assets/ig-templates-accounts/Editor/Cap Hats/02.jpg"
                title="Contemplative Reptile"
              />
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <Grid item xs={12}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="280"
                image="https://static.parastorage.com/services/instagram-cdn/1.433.0/assets/ig-templates-accounts/Editor/Cap Hats/03.jpg"
                title="Contemplative Reptile"
              />
            </Grid>
          </Grid>
          <Grid item lg={2}>
            <Grid item xs={12}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://static.parastorage.com/services/instagram-cdn/1.433.0/assets/ig-templates-accounts/Editor/Cap Hats/04.jpg"
                title="Contemplative Reptile"
              />
            </Grid>
            <Grid item xs={12}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://static.parastorage.com/services/instagram-cdn/1.433.0/assets/ig-templates-accounts/Editor/Cap Hats/06.jpg"
                title="Contemplative Reptile"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          lg={12}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item lg={2}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://static.parastorage.com/services/instagram-cdn/1.433.0/assets/ig-templates-accounts/Editor/Cap Hats/07.jpg"
              title="Contemplative Reptile"
            ></CardMedia>
          </Grid>
          <Grid item lg={2}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://static.parastorage.com/services/instagram-cdn/1.433.0/assets/ig-templates-accounts/Editor/Cap Hats/08.jpg"
              title="Contemplative Reptile"
            ></CardMedia>
          </Grid>
          <Grid item lg={2}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://static.parastorage.com/services/instagram-cdn/1.433.0/assets/ig-templates-accounts/Editor/Cap Hats/09.jpg"
              title="Contemplative Reptile"
            ></CardMedia>
          </Grid>
          <Grid item lg={2}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://static.parastorage.com/services/instagram-cdn/1.433.0/assets/ig-templates-accounts/Editor/Cap Hats/10.jpg"
              title="Contemplative Reptile"
            ></CardMedia>
          </Grid>
          <Grid item lg={2}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://static.parastorage.com/services/instagram-cdn/1.433.0/assets/ig-templates-accounts/Editor/Cap Hats/11.jpg"
              title="Contemplative Reptile"
            ></CardMedia>
          </Grid>
          <Grid item lg={2}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://static.parastorage.com/services/instagram-cdn/1.433.0/assets/ig-templates-accounts/Editor/Cap Hats/12.jpg"
              title="Contemplative Reptile"
            ></CardMedia>
          </Grid>{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridImage;
