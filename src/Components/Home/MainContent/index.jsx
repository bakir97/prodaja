import React, { Component } from "react";
import { connect } from "react-redux";
import withWidth from "@material-ui/core/withWidth";
import {
  getProizvodi,
  errorPostProizvod
} from "../../../redux/actions/proizvodiActions";
import MainContentLayout from "./MainContent";
class MainContent extends Component {
  componentWillUnmount() {
    this.props.errorPostProizvod(false);
  }
  componentDidMount() {
    this.props.getProizvodi();
  }
  render() {
    return <MainContentLayout {...this.props} />;
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
)(withWidth()(MainContent));
