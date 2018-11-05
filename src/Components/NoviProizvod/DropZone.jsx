import React from "react";
import Dropzone from "react-dropzone";
import { Grid } from "@material-ui/core";
const style = {
  dropzone: {
    border: "1px solid rgba(0, 0, 0, 0.23)",
    maxWidth: 600,
    height: 113,
    width: "100%",
    margin: 10,
    borderRadius: 4
  },
  text: { color: "rgba(0, 0, 0, 0.5)", paddingLeft: 10 }
};
export default ({ drop }) => {
  return (
    <Grid item xs={12} container justify="center">
      <Dropzone onDrop={files => drop(files)} multiple style={style.dropzone}>
        <p style={style.text}>Prenesi slike ovdje ili pritisni za odabir</p>
      </Dropzone>
    </Grid>
  );
};
