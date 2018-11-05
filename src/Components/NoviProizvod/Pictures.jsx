import React from "react";
import Badge from "@material-ui/core/Badge";
const Pictures = ({ slika, obrisi }) => {
  return (
    <div key={slika} style={{ margin: "0.3rem" }}>
      <Badge
        badgeContent={"x"}
        color="secondary"
        style={{ cursor: "pointer" }}
        onClick={obrisi(slika)}
      >
        <img height="50" width="50" src={slika} alt="slika" />
      </Badge>
    </div>
  );
};

export default Pictures;
