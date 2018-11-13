import React, { Component } from "react";
import { connect } from "react-redux";
import {
  errorPostProizvod,
  newProizvod
} from "../../redux/actions/proizvodiActions";
import {
  getOneProizvod,
  proizvodToRedux
} from "../../redux/actions/oneProizvodAction";
import MainContent from "./MainContent";
class NoviProizvod extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      return this.props.getOneProizvod(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.proizvodToRedux({});
    this.props.errorPostProizvod(false);
    this.props.newProizvod({});
  }
  render() {
    return <MainContent {...this.props} />;
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
)(NoviProizvod);
