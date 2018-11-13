import React from "react";
import Card from "../../../Layout/Card/Card";
import { Grid } from "@material-ui/core";
const Cards = ({ proizvodi, layout, history }) => {
  return proizvodi.map(({ naslov, slike, cijena, tezina, _id }) => (
    <Grid key={_id} item container justify="center" xs={layout}>
      <Card
        history={history}
        id={_id}
        naslov={naslov}
        slika={slike[0]}
        cijena={cijena}
        tezina={tezina}
      />
    </Grid>
  ));
};

export default Cards;
