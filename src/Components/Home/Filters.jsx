import React from "react";
import { TextField, InputAdornment, Grid } from "@material-ui/core";
const style = {
  start: { paddingLeft: 5, paddingTop: 10, textAlign: "start" },
  end: { paddingRight: 5, paddingTop: 10, textAlign: "end" },
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
    this.props.cijenaFilters({ minCijena: e.target.value });
  };
  changeCijenaMax = e => {
    this.props.cijenaFilters({ maxCijena: e.target.value });
  };
  changeTezinaMin = e => {
    this.props.cijenaFilters({ minTezina: e.target.value });
  };
  changeTezinaMax = e => {
    this.props.cijenaFilters({ maxTezina: e.target.value });
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
        <Grid item xs={6} style={style.end}>
          <TextField
            id="minCijena"
            type="number"
            variant="outlined"
            label="minCijena"
            value={minCijena}
            onChange={e => this.changeCijenaMin(e)}
            InputProps={{
              endAdornment: <InputAdornment position="end">KM</InputAdornment>
            }}
          />
        </Grid>

        <Grid item xs={6} style={style.start}>
          <TextField
            id="maxCijena"
            type="number"
            variant="outlined"
            label="maxCijena"
            value={maxCijena}
            onChange={e => this.changeCijenaMax(e)}
            InputProps={{
              endAdornment: <InputAdornment position="end">KM</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={6} style={style.end}>
          <TextField
            id="minTezina"
            type="number"
            variant="outlined"
            label="minTezina"
            value={minTezina}
            onChange={e => this.changeTezinaMin(e)}
            InputProps={{
              endAdornment: <InputAdornment position="end">KG</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={6} style={style.start}>
          <TextField
            id="maxTezina"
            type="number"
            variant="outlined"
            label="maxTezina"
            value={maxTezina}
            onChange={e => this.changeTezinaMax(e)}
            InputProps={{
              endAdornment: <InputAdornment position="end">KG</InputAdornment>
            }}
          />
        </Grid>
      </Grid>
    );
  }
}
