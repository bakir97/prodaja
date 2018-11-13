import React from "react";
import SnackBar from "../../../Layout/SnackBar/SnackBar";

const SnackBars = ({
  errorServer,
  newProizvodState,
  newProizvod,
  errorPostProizvod
}) => {
  const snackRemoveError = () => {
    errorPostProizvod(false);
  };
  const snackRemoveSuccess = () => {
    newProizvod({});
  };
  return (
    <>
      {errorServer && (
        <SnackBar
          variantSnackBar="error"
          poruka={errorServer}
          open={true}
          snackRemove={snackRemoveError}
        />
      )}
      {newProizvodState.naslov && (
        <SnackBar
          variantSnackBar="success"
          poruka={`Upsjesno ste objavili proizvod: ${newProizvodState.naslov}`}
          open={true}
          snackRemove={snackRemoveSuccess}
        />
      )}
    </>
  );
};

export default SnackBars;
