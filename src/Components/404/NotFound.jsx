import React from "react";
import NotFound from "../../assets/404.png";
import Style from "./style";
import { Typography, Grid, Button } from "@material-ui/core";
export default ({ history }) => {
  return (
    <Grid container direction="column" alignItems="center" style={Style.root}>
      <img style={Style.img} src={NotFound} alt="404" />
      <Typography variant="h5" style={Style.notFound}>
        Opps... Page not found
      </Typography>
      <Button style={Style.button} onClick={() => history.push("/")}>
        <Typography variant="h5" style={Style.text}>
          go back to Home
        </Typography>
      </Button>
    </Grid>
  );
};
