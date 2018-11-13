import React, { Component } from "react";
import filtersFunction from "./filtersFunction";
import SearchBarComponent from "../SearchBar";
import Switch from "../Switch";
import LayoutButtons from "../LayoutButtons";
import Filters from "../Filters";
import Grid from "@material-ui/core/Grid";
export default class Header extends Component {
  state = {
    filters: false,
    filter: {
      minCijena: "",
      maxCijena: "",
      minTezina: "",
      maxTezina: ""
    }
  };
  filters = filter => {
    this.setState(filtersFunction(filter));
  };
  changeFiltersState = () => {
    this.setState(prevState => ({
      filters: !prevState.filters
    }));
  };
  search = e => {
    const { minCijena, minTezina, maxCijena, maxTezina } = this.state;
    const podaci = {};
    podaci.search = e;
    podaci.minCijena = minCijena;
    podaci.maxCijena = maxCijena;
    podaci.minTezina = minTezina;
    podaci.maxTezina = maxTezina;
    this.props.getProizvodi(podaci);
  };
  render() {
    const { width, changeLayout } = this.props;
    const { filters, minCijena, maxCijena, maxTezina, minTezina } = this.state;

    return (
      <>
        <Grid container justify="center">
          <Grid item container justify="center" xs={12}>
            <SearchBarComponent search={this.search} />
          </Grid>

          <Switch
            filters={filters}
            changeFiltersState={this.changeFiltersState}
          />
          {filters && (
            <Filters
              minCijena={minCijena}
              maxCijena={maxCijena}
              minTezina={minTezina}
              maxTezina={maxTezina}
              filters={this.filters}
            />
          )}
        </Grid>
        {width === "xs" ? null : <LayoutButtons changeLayout={changeLayout} />}
      </>
    );
  }
}
