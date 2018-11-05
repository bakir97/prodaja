import React from "react";
import { TextField } from "@material-ui/core";
const TextArea = ({
  input,
  label,
  serverError,
  meta: { touched, error, active },
  ...custom
}) => {
  return (
    <TextField
      helperText={serverError && !touched && !active && serverError}
      error={serverError && !touched && !active && true}
      {...input}
      {...custom}
      label={label}
      margin="normal"
      variant="outlined"
      fullWidth
      style={{ maxWidth: 500 }}
    />
  );
};

export default TextArea;
