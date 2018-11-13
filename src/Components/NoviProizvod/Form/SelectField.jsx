import React from "react";
import SelectComponent from "../../../Layout/FormElements/Select";
import { Field } from "redux-form";
export default () => {
  return (
    <Field
      labelText="Izaberi kategoriju"
      type="select"
      name="kategorija"
      elementi={["suplementi", "hrana", "ostalo"]}
      component={SelectComponent}
      label="Favorite Color"
    />
  );
};
