import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/loginAction";
// material styles
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// end material styles
import Drawer from "./Drawer/Drawer";
import navbarStyles from "./navbarStyles";
import Logout from "../../assets/logout.png";

const styles = navbarStyles;
class Navbar extends Component {
  state = {
    open: false
  };
  promjenaDrawera = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    const { root, menuButton, navBar, grow } = this.props.classes;
    const { open } = this.state;
    return (
      <div className={root}>
        <AppBar className={navBar} position="fixed">
          <Toolbar>
            <IconButton
              onClick={this.promjenaDrawera}
              className={menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={grow}>
              Sell It
            </Typography>
            {Object.keys(auth).length > 0 && (
              <>
                <Typography
                  variant="h6"
                  color="inherit"
                  style={{ marginRight: 5 }}
                >
                  {auth.username}
                </Typography>
                <IconButton onClick={this.handleLogout}>
                  {<img src={Logout} style={{ paddingLeft: 5 }} alt="" />}
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          auth={auth}
          open={open}
          promjenaDrawera={this.promjenaDrawera}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.login.account
});

const mapDispatchToProps = { logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Navbar));
