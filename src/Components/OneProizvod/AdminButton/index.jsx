import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import styles from "./styles";
const AdminButtons = ({ history, match, handleDelete }) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ marginTop: "1rem" }}
    >
      <Button
        id="edit"
        onClick={() => history.push(`/Edit/${match.params.id}`)}
      >
        <Typography variant="h5" style={styles.edit}>
          Edit
        </Typography>
        <Edit style={styles.editButton} />
      </Button>
      <Button id="delete" onClick={() => handleDelete()}>
        <Typography variant="h5" style={styles.delete}>
          Delete
        </Typography>
        <Delete style={styles.deleteButton} />
      </Button>
    </Grid>
  );
};

export default AdminButtons;
