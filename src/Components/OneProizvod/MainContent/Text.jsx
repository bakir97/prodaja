import React from "react";
import { Grid, Typography } from "@material-ui/core";
const style = {
  root: { textAlign: "center" },
  text: { fontFamily: "Kalam" }
};
const Text = ({ children }) => {
  return (
    <Grid item xs={6} style={style.root}>
      <Typography variant="h5" style={style.text}>
        {children}
      </Typography>
    </Grid>
  );
};

export default Text;
