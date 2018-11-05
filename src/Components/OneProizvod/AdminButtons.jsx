import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
const styles = {
  button: {
    fontFamily: "Kalam",
    paddingBottom: 0,
    marginRight: "1rem",
    WebkitBackgroundClip: "text",
    color: "transparent"
  }
};
const AdminButtons = ({ history, match, handleDelete }) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ marginTop: "1rem" }}
    >
      <Button onClick={() => history.push(`/Edit/${match.params.id}`)}>
        <Typography
          variant="h5"
          style={{
            background: "linear-gradient(to right, #fdc830, #f37335)",
            ...styles.button
          }}
        >
          Edit
        </Typography>
        <Edit
          style={{
            color: "#f37335",
            marginBottom: 5
          }}
        />
      </Button>
      <Button onClick={() => handleDelete()}>
        <Typography
          variant="h5"
          style={{
            background: "linear-gradient(to right, #333333, #dd1818)",
            ...styles.button
          }}
        >
          Delete
        </Typography>
        <Delete
          style={{
            color: "#dd1818",
            marginBottom: 5
          }}
        />
      </Button>
    </Grid>
  );
};

export default AdminButtons;
