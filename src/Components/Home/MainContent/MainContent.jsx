import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slika from "../../../assets/global_shopping_experience.gif";
import Cards from "./Cards";
import Styles from "./styles";
import Header from "./Header";
import SnackBar from "../../../Layout/SnackBar/SnackBar";
const styles = Styles;
class MainContent extends Component {
  state = {
    layout: 12
  };
  componentDidUpdate() {
    if (this.props.width === "xs" && this.state.layout !== 12) {
      this.setState({ layout: 12 });
    }
  }
  changeLayout = number => {
    if (number !== this.state.layout) this.setState({ layout: number });
  };

  snackRemove = e => {
    this.props.errorPostProizvod(e);
  };
  render() {
    const {
      classes,
      width,
      proizvodi,
      errorState,
      history,
      getProizvodi
    } = this.props;
    const { layout } = this.state;

    return (
      <Grid
        container
        alignContent="flex-start"
        alignItems="flex-start"
        justify="center"
        className={width === "xs" ? classes.rootMobile : classes.rootDesktop}
      >
        <Header
          width={width}
          getProizvodi={getProizvodi}
          changeLayout={this.changeLayout}
        />
        {proizvodi.length > 0 ? (
          <Cards proizvodi={proizvodi} layout={layout} history={history} />
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

export default withStyles(styles)(MainContent);
