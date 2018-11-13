import React from "react";
import Pictures from "../Pictures";
import { Grid } from "@material-ui/core";
export default ({ oldPictures, slike, obrisiOldPictures, obrisi }) => {
  const prikaziStareSlike = () => {
    return oldPictures.map(slika => (
      <Pictures key={slika} slika={slika} obrisi={obrisiOldPictures} />
    ));
  };
  const prikaziSlike = () => {
    return slike.map(slika => (
      <Pictures key={slika.preview} slika={slika.preview} obrisi={obrisi} />
    ));
  };
  return (
    <>
      {slike.length > 0 || oldPictures.length > 0 ? (
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="row"
          item
        >
          {prikaziStareSlike()}
          {prikaziSlike()}
        </Grid>
      ) : null}
    </>
  );
};
