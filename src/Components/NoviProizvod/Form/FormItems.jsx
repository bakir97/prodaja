import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import SelectField from "./SelectField";
import TextAreaComponent from "../../../Layout/FormElements/TextArea";
import { Grid, Button } from "@material-ui/core";
import FormInput from "./FormInput";
import { Field } from "redux-form";
import style from "./style";

export default ({ loading, oldPictures, pictures }) => {
  return (
    <>
      <Grid item xs={12} container justify="center">
        <FormInput type="text" name="naslov" label="Naslov" />
        <Field type="text" name="opis" component={TextAreaComponent} />
        <SelectField />
        <Grid item xs={6} style={{ paddingRight: 5 }}>
          <FormInput type="text" name="tezina" label="Tezina" />
        </Grid>
        <Grid style={{ paddingLeft: 5 }} item xs={6}>
          <FormInput type="text" name="cijena" label="Cijena" />
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button
            disabled={oldPictures.length + pictures.length === 0}
            type="submit"
            style={style.button}
          >
            Objavi Proizvod
          </Button>
        )}
      </Grid>
    </>
  );
};
