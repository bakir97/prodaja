import React, { Component } from "react";
import Navbar from "./Layout/Navbar/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./Components/Home/Home";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import NoviProizvod from "./Components/NoviProizvod/NoviProizvod";
import Login from "./Components/UserAuth/Login/Login";
import { connect } from "react-redux";
import NotFound from "./Components/404/NotFound";
import OneProizvod from "./Components/OneProizvod/OneProizvod";
class App extends Component {
  routes = () => {
    const { isAdmin } = this.props.auth;
    if (isAdmin) {
      return (
        <Switch>
          <Route path="/noviProizvod" component={NoviProizvod} />
          <Route path="/Edit/:id" component={NoviProizvod} />
          <Route path="/Login" render={() => <Redirect to="/" />} />
          <Route path="/Proizvod/:id" exact component={OneProizvod} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      );
    }
    return (
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Proizvod/:id" exact component={OneProizvod} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    );
  };
  render() {
    return (
      <>
        <CssBaseline>
          <Navbar history={this.props.history} />
          {this.routes()}
        </CssBaseline>
      </>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.login.account
});

export default withRouter(connect(mapStateToProps)(App));
