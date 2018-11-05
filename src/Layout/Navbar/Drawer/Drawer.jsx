import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "./List";
const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  paper: {
    background: "linear-gradient(to top, #373b44, #4286f4)",
    color: "white"
  },
  text: {
    color: "white"
  }
};

class SwipeableTemporaryDrawer extends React.Component {
  promjenaSteta = () => {
    this.props.promjenaDrawera();
  };
  render() {
    const { classes, open, auth } = this.props;
    return (
      <div>
        <SwipeableDrawer
          open={open}
          onClose={this.promjenaSteta}
          onOpen={this.promjenaSteta}
          classes={{
            paper: classes.paper
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.promjenaSteta}
            onKeyDown={this.promjenaSteta}
          />
          <List auth={auth} promjenaSteta={this.promjenaSteta} />
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(SwipeableTemporaryDrawer);
