import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getOneProizvod,
  deleteOneProizvod,
  success,
  proizvodToRedux
} from "../../redux/actions/oneProizvodAction";
import { errorPostProizvod } from "../../redux/actions/proizvodiActions";
import OneProizvodLayout from "./OneProizvodLayout";

class OneProizvod extends Component {
  componentDidMount() {
    this.props.getOneProizvod(this.props.match.params.id);
  }
  componentDidUpdate() {
    if (this.props.successState) {
      this.props.history.push("/");
    }
  }
  componentWillUnmount() {
    this.props.errorPostProizvod(false);
    this.props.success(false);
    this.props.proizvodToRedux({});
  }

  render() {
    return <OneProizvodLayout {...this.props} />;
  }
}
const mapStateToProps = state => ({
  admin: state.login.account.isAdmin,
  proizvod: state.proizvodi.oneProizvod,
  loading: state.proizvodi.loading,
  successState: state.proizvodi.success
});

const mapDispatchToProps = {
  getOneProizvod,
  errorPostProizvod,
  deleteOneProizvod,
  success,
  proizvodToRedux
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneProizvod);
