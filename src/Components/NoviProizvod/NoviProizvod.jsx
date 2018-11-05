import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import DropZoneComponent from "./DropZone";
import Form from "./Form";
import myStyles from "./styles";
import SnackBar from "../../Layout/SnackBar/SnackBar";
import {
  errorPostProizvod,
  newProizvod
} from "../../redux/actions/proizvodiActions";
import {
  getOneProizvod,
  proizvodToRedux
} from "../../redux/actions/oneProizvodAction";
import Pictures from "./Pictures";
const styles = theme => myStyles(theme);
class NoviProizvod extends Component {
  state = {
    slike: [],
    oldPictures: []
  };
  componentDidMount() {
    if (this.props.match.params.id) {
      return this.props.getOneProizvod(this.props.match.params.id);
    }
  }
  componentDidUpdate() {
    if (
      Object.keys(this.props.newProizvodState).length > 0 &&
      this.state.slike.length > 0
    ) {
      this.setState({ slike: [] });
    }
    if (
      !this.props.match.params.id &&
      Object.keys(this.props.proizvod).length > 0
    ) {
      this.props.proizvodToRedux({});
      this.setState({ slike: [], oldPictures: [] });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.proizvod !== nextProps.proizvod &&
      Object.keys(nextProps.proizvod).length > 0
    ) {
      this.setState({ oldPictures: nextProps.proizvod.slike });
    }
  }
  componentWillUnmount() {
    this.props.proizvodToRedux({});
    this.props.errorPostProizvod(false);
    this.props.newProizvod({});
  }
  drop = files => {
    this.setState(prevState => ({
      slike: [...prevState.slike, ...files]
    }));
  };
  obrisi = id => () => {
    this.setState(prevState => ({
      slike: prevState.slike.filter(slika => slika.preview !== id)
    }));
  };
  obrisiOldPictures = id => () => {
    this.setState(prevState => ({
      oldPictures: prevState.oldPictures.filter(
        oldPictures => oldPictures !== id
      )
    }));
  };
  prikaziStareSlike = () => {
    return this.state.oldPictures.map(slika => (
      <Pictures key={slika} slika={slika} obrisi={this.obrisiOldPictures} />
    ));
  };
  prikaziSlike = () => {
    return this.state.slike.map(slika => (
      <Pictures
        key={slika.preview}
        slika={slika.preview}
        obrisi={this.obrisi}
      />
    ));
  };
  snackRemoveError = () => {
    this.props.errorPostProizvod(false);
  };
  snackRemoveSuccess = () => {
    this.props.newProizvod({});
  };
  render() {
    const { classes, errorServer, newProizvodState, proizvod } = this.props;
    const { slike, oldPictures } = this.state;

    return (
      <Grid
        className={classes.root}
        container
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <DropZoneComponent drop={this.drop} />

        {slike.length > 0 || oldPictures.length > 0 ? (
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="row"
            item
          >
            {this.prikaziStareSlike()}
            {this.prikaziSlike()}
          </Grid>
        ) : null}
        <Form
          oldPictures={oldPictures}
          id={proizvod._id}
          submit={this.submit}
          pictures={this.state.slike}
        />
        {errorServer && (
          <SnackBar
            variantSnackBar="error"
            poruka={errorServer}
            open={true}
            snackRemove={this.snackRemoveError}
          />
        )}
        {newProizvodState.naslov && (
          <SnackBar
            variantSnackBar="success"
            poruka={`Upsjesno ste objavili proizvod: ${
              newProizvodState.naslov
            }`}
            open={true}
            snackRemove={this.snackRemoveSuccess}
          />
        )}
      </Grid>
    );
  }
}
const mapStateToProps = state => ({
  proizvod: state.proizvodi.oneProizvod,
  newProizvodState: state.proizvodi.newProizvod,
  errorServer: state.proizvodi.error
});

const mapDispatchToProps = {
  errorPostProizvod,
  newProizvod,
  getOneProizvod,
  proizvodToRedux
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NoviProizvod));
