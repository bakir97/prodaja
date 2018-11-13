import React from "react";
import Style from "./mainStyle";
import PictureSlider from "../PictureSlider";
import { Grid, Typography, Button } from "@material-ui/core";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Text from "./Text";
const MainContent = ({ naslov, slike, opis, cijena, tezina }) => {
  return (
    <>
      <Grid item xs={12} style={Style.root}>
        <Typography variant="h4" style={Style.text}>
          {naslov}
        </Typography>
      </Grid>
      <Grid container justify="center" item xs={12}>
        <PictureSlider pictures={slike} />
      </Grid>
      <Typography variant="h5">{opis}</Typography>
      <Grid container justify="center" style={Style.container}>
        <Text>Tezina: {tezina} KG</Text>
        <Text>Cijena: {cijena} KM</Text>
        <Grid item xs={12} style={Style.buttonContainer}>
          <Button>
            <Typography
              variant="h5"
              style={{ ...Style.buttonText, ...Style.text }}
            >
              Dodaj u korpu
            </Typography>
            <AddShoppingCart style={Style.shoppingCart} />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default MainContent;
