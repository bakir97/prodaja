import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Account from "@material-ui/icons/AccountCircle";
import Add from "@material-ui/icons/AddCircleOutline";
import HomeIcon from "@material-ui/icons/Home";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  text: {
    color: "white"
  }
};
export default withStyles(styles)(({ classes, promjenaSteta, auth }) => {
  const { text } = classes;
  const { isAdmin } = auth;
  const promjena = () => {
    promjenaSteta();
  };
  return (
    <List>
      <ListItem onClick={promjena} button component={Link} to="/">
        <ListItemIcon classes={{ root: text }}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText classes={{ primary: text }} primary="Home" />
      </ListItem>
      {isAdmin ? (
        <>
          <Divider />
          <ListItem>
            <ListItemText classes={{ primary: text }} primary="Admin" />
          </ListItem>
          <ListItem
            button
            onClick={promjena}
            component={Link}
            to="/noviProizvod"
          >
            <ListItemIcon classes={{ root: text }}>
              <Add />
            </ListItemIcon>
            <ListItemText classes={{ primary: text }} primary="New Product" />
          </ListItem>
        </>
      ) : (
        <ListItem button onClick={promjena} component={Link} to="/Login">
          <ListItemIcon classes={{ root: text }}>
            <Account />
          </ListItemIcon>
          <ListItemText primary="Login" classes={{ primary: text }} />
        </ListItem>
      )}
    </List>
  );
});
