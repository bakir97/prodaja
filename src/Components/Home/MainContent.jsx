import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Slika from "../../assets/global_shopping_experience.gif";
import Card from "../../Layout/Card/Card";
import withWidth from "@material-ui/core/withWidth";
import Styles from "./styles";
import SearchBarComponent from "./SearchBar/SearchBar";
import Switch from "./Switch";
import LayoutButtons from "./LayoutButtons";
import {
  getProizvodi,
  errorPostProizvod
} from "../../redux/actions/proizvodiActions";
import SnackBar from "../../Layout/SnackBar/SnackBar";
import Filters from "./Filters";
const styles = Styles;
class MainContent extends Component {
  state = {
    filters: false,
    layout: 12,
    filter: {
      minCijena: "",
      maxCijena: "",
      minTezina: "",
      maxTezina: ""
    }
  };
  componentDidUpdate() {
    if (this.props.width === "xs" && this.state.layout !== 12) {
      this.setState({ layout: 12 });
    }
  }
  componentWillUnmount() {
    this.props.errorPostProizvod(false);
  }
  componentDidMount() {
    this.props.getProizvodi();
  }
  cijenaFilters = filter => {
    if (typeof filter.minCijena === "string") {
      return this.setState({ minCijena: filter.minCijena });
    }
    if (typeof filter.maxCijena === "string") {
      return this.setState({ maxCijena: filter.maxCijena });
    }
    if (typeof filter.minTezina === "string") {
      return this.setState({ minTezina: filter.minTezina });
    }
    if (typeof filter.maxTezina === "string") {
      return this.setState({ maxTezina: filter.maxTezina });
    }
  };
  changeFiltersState = () => {
    this.setState(prevState => ({
      filters: !prevState.filters
    }));
  };
  changeLayout = number => {
    if (number !== this.state.layout) this.setState({ layout: number });
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
  snackRemove = e => {
    this.props.errorPostProizvod(e);
  };
  render() {
    const { classes, width, proizvodi, errorState, history } = this.props;
    const {
      filters,
      layout,
      minCijena,
      maxCijena,
      maxTezina,
      minTezina
    } = this.state;

    return (
      <Grid
        container
        alignContent="flex-start"
        alignItems="flex-start"
        justify="center"
        className={width === "xs" ? classes.rootMobile : classes.rootDesktop}
      >
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
              cijenaFilters={this.cijenaFilters}
            />
          )}
        </Grid>
        {width === "xs" ? null : (
          <LayoutButtons changeLayout={this.changeLayout} />
        )}
        {proizvodi.length > 0 ? (
          proizvodi.map(({ naslov, slike, cijena, tezina, _id }) => (
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
          ))
        ) : (
          <img className={classes.slika} src={Slika} alt="" />
        )}
        {errorState && (
          <SnackBar
            variantSnackBar="error"
            poruka={errorState}
            snackRemove={this.snackRemove}
          />
        )}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  proizvodi: state.proizvodi.proizvodi,
  errorState: state.proizvodi.error
});

const mapDispatchToProps = {
  getProizvodi,
  errorPostProizvod
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth()(withStyles(styles)(MainContent)));
