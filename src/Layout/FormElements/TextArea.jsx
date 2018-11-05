import React from "react";
import { TextField } from "@material-ui/core";

const TextArea = ({ input, label, ...custom }) => {
  return (
    <TextField
      {...input}
      {...custom}
      id="outlined-multiline-static"
      label="Opis Proizvoda"
      multiline
      rows="4"
      margin="normal"
      variant="outlined"
      fullWidth
    />
  );
};

export default TextArea;
