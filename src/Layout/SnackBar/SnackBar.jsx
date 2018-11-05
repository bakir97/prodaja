import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";
import SnackBarComponent from "./SnackBarComponent";
const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

class CustomizedSnackbars extends React.Component {
  state = {
    open: true
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
    this.props.snackRemove(false);
  };
  render() {
    const { variantSnackBar, poruka } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <SnackBarComponent
          onClose={this.handleClose}
          variant={variantSnackBar}
          message={poruka}
        />
      </Snackbar>
    );
  }
}
export default withStyles(styles2)(CustomizedSnackbars);
