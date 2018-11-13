import React from "react";
import { TextField, InputAdornment, Grid } from "@material-ui/core";
const style = {
  start: { paddingLeft: 5, paddingTop: 10, textAlign: "start" },
  end: { paddingRight: 5, paddingTop: 10, textAlign: "end" }
};
const sameAtt = {
  type: "number",
  variant: "outlined",
  InputProps: {
    endAdornment: <InputAdornment position="end">KM</InputAdornment>
  }
};
export default ({ position, ...other }) => {
  return (
    <Grid item xs={6} style={position === "start" ? style.start : style.end}>
      <TextField {...other} {...sameAtt} />
    </Grid>
  );
};
