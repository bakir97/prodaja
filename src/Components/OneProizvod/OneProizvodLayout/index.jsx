import React from "react";
import AdminButtons from "../AdminButton";
import MainContent from "../MainContent";
import { Grid, CircularProgress } from "@material-ui/core";
import style from "./style";
const OneProizvodLayout = ({
  proizvod,
  history,
  match,
  loading,
  admin,
  deleteOneProizvod
}) => {
  const handleDelete = () => {
    deleteOneProizvod(match.params.id);
  };
  return (
    <Grid
      alignItems="flex-start"
      alignContent="flex-start"
      justify="center"
      container
      style={style.root}
    >
      {Object.keys(proizvod).length > 0 && (
        <>
          <MainContent {...proizvod} />
          {admin && (
            <AdminButtons
              history={history}
              match={match}
              handleDelete={handleDelete}
            />
          )}
        </>
      )}
      {loading && <CircularProgress style={style.spinner} />}
    </Grid>
  );
};

export default OneProizvodLayout;
