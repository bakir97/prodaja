import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
const Select = ({
  elementi,
  input,
  label,
  pomocniText,
  labelText,
  ...custom
}) => {
  return (
    <TextField
      {...input}
      {...custom}
      id="select"
      select
      label={labelText}
      helperText={pomocniText}
      margin="normal"
      fullWidth
    >
      {elementi.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Select;
