import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../../redux/actions/loginAction";
import LoginContent from "./LoginContent";
import { reduxForm } from "redux-form";

export class Login extends Component {
  submit = e => {
    this.props.login(e);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <LoginContent {...this.props} />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  account: state.login.account,
  errorLogin: state.login.errorLogin,
  loading: state.login.loading
});

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "login" })(Login));
