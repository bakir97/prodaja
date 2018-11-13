import React from "react";
import TextComponent from "../../../Layout/FormElements/Text";
import { Field } from "redux-form";
export default ({ type, name, label }) => {
  return (
    <Field type={type} name={name} label={label} component={TextComponent} />
  );
};
