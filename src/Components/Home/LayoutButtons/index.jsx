import React from "react";
import ViewStream from "@material-ui/icons/ViewStream";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
const LayoutButtons = ({ changeLayout }) => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ marginBottom: 10 }}
    >
      <Button id="layout12" onClick={() => changeLayout(12)}>
        <ViewStream />
      </Button>
      <Button id="layout6" onClick={() => changeLayout(6)}>
        <ViewStream />
        <ViewStream />
      </Button>
      <Button id="layout4" onClick={() => changeLayout(4)}>
        <ViewStream />
        <ViewStream />
        <ViewStream />
      </Button>
    </Grid>
  );
};

export default LayoutButtons;
