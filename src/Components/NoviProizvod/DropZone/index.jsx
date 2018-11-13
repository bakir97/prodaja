import React from "react";
import Dropzone from "react-dropzone";
import { Grid } from "@material-ui/core";
import style from "./style";
export default ({ drop }) => {
  return (
    <Grid item xs={12} container justify="center">
      <Dropzone onDrop={files => drop(files)} multiple style={style.dropzone}>
        <p style={style.text}>Prenesi slike ovdje ili pritisni za odabir</p>
      </Dropzone>
    </Grid>
  );
};
