import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextComponent from "../../../Layout/FormElements/Text";
import { Button, Grid } from "@material-ui/core";
import { Field } from "redux-form";
import style from "./style";
export default ({ loading, errorLogin }) => {
  return (
    <Grid
      direction="column"
      container
      style={style.root}
      justify="center"
      alignItems="center"
    >
      <Field
        name="username"
        serverError={errorLogin.username && errorLogin.username}
        label="Username"
        component={TextComponent}
      />
      <Field
        serverError={errorLogin.password && errorLogin.password}
        name="password"
        label="Password"
        component={TextComponent}
        type="password"
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <Button style={style.button} type="submit">
          Login
        </Button>
      )}
    </Grid>
  );
};
