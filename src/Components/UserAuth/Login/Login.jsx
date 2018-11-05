import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import TextComponent from "../../../Layout/FormElements/Text";
import { Button, Grid } from "@material-ui/core";
import { login } from "../../../redux/actions/loginAction";
import CircularProgress from "@material-ui/core/CircularProgress";

export class Registration extends Component {
  submit = e => {
    this.props.login(e);
  };

  render() {
    const { loading, errorLogin } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <Grid
          direction="column"
          container
          style={{ height: "100vh", padding: "0 1rem" }}
          justify="center"
          alignItems="center"
        >
          <Field
            name="username"
            serverError={errorLogin.username && errorLogin.username}
            label="Username"
            component={TextComponent}
          />
          <Field
            serverError={errorLogin.password && errorLogin.password}
            name="password"
            label="Password"
            component={TextComponent}
            type="password"
          />
          {loading ? (
            <CircularProgress />
          ) : (
            <Button
              style={{
                fontFamily: "Kalam",
                fontSize: "1.5rem",
                paddingBottom: 0
              }}
              type="submit"
            >
              Login
            </Button>
          )}
        </Grid>
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
)(reduxForm({ form: "login" })(Registration));
