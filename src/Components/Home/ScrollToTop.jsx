import React from "react";
import { IconButton } from "@material-ui/core";
import NavigationIcon from "@material-ui/icons/Navigation";
const style = {
  button: { position: "fixed", bottom: "2rem", right: "1rem" },
  navigation: { fontSize: 30 }
};
const SCrollToTop = ({ scrollToTop }) => {
  return (
    <IconButton onClick={() => scrollToTop()} style={style.button}>
      <NavigationIcon style={style.navigation} />
    </IconButton>
  );
};

export default SCrollToTop;
