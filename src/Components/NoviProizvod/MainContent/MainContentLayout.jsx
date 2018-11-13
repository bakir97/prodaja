import React from "react";
import SnackBars from "../SnackBars";
import DropZoneComponent from "../DropZone";
import Form from "../Form/Form";
import { Grid } from "@material-ui/core";
import ShowPictures from "./ShowPictures";
import styles from "./styles";
const MainContentLayout = ({
  errorServer,
  newProizvodState,
  proizvod,
  newProizvod,
  errorPostProizvod,
  slike,
  oldPictures,
  obrisiOldPictures,
  obrisi,
  drop
}) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      alignContent="center"
      style={styles.root}
    >
      <DropZoneComponent drop={drop} />
      <ShowPictures
        slike={slike}
        oldPictures={oldPictures}
        obrisi={obrisi}
        obrisiOldPictures={obrisiOldPictures}
      />
      <Form oldPictures={oldPictures} id={proizvod._id} pictures={slike} />
      <SnackBars
        errorServer={errorServer}
        newProizvodState={newProizvodState}
        newProizvod={newProizvod}
        errorPostProizvod={errorPostProizvod}
      />
    </Grid>
  );
};

export default MainContentLayout;
