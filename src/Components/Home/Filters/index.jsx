import React from "react";
import { Grid } from "@material-ui/core";
import Filters from "./Filters";
const style = {
  root: { padding: 10 }
};
export default class App extends React.Component {
  state = {
    minCijena: this.props.minCijena,
    maxCijena: this.props.maxCijena,
    minTezina: this.props.minTezina,
    maxTezina: this.props.maxTezina
  };
  changeCijenaMin = e => {
    this.props.filters({ minCijena: e.target.value });
  };
  changeCijenaMax = e => {
    this.props.filters({ maxCijena: e.target.value });
  };
  changeTezinaMin = e => {
    this.props.filters({ minTezina: e.target.value });
  };
  changeTezinaMax = e => {
    this.props.filters({ maxTezina: e.target.value });
  };
  render() {
    const { minCijena, maxCijena, minTezina, maxTezina } = this.state;
    return (
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
        style={style.root}
      >
        <Filters
          minCijena={minCijena}
          maxCijena={maxCijena}
          minTezina={minTezina}
          maxTezina={maxTezina}
          changeCijenaMin={this.changeCijenaMin}
          changeCijenaMax={this.changeCijenaMax}
          changeTezinaMin={this.changeTezinaMin}
          changeTezinaMax={this.changeTezinaMax}
        />
      </Grid>
    );
  }
}
