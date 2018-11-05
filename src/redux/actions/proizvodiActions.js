import axios from "axios";
import {
  NEW_PROIZVOD,
  LOADING_PROIZVOD,
  ERROR_PROIZVOD,
  GET_PROIZVODI
} from "../consts";
import { proizvodToRedux } from "./oneProizvodAction";
import { reset } from "redux-form";
export const postProizvod = podaci => async dispatch => {
  dispatch(loading(true));
  try {
    const proizvod = await axios.post(
      "https://prodaja-server.herokuapp.com/Proizvod",
      podaci
    );
    dispatch(newProizvod(proizvod.data));
    dispatch(proizvodToRedux(proizvod.data));
    dispatch(loading(false));
    dispatch(reset("noviProizvodForm"));
  } catch (error) {
    if (!error.response) {
      dispatch(loading(false));
      return dispatch(
        errorPostProizvod(
          "Server trenutno ne radi pokusajte kasnije ili se obratite programeru"
        )
      );
    }
    dispatch(
      errorPostProizvod(
        "Nesto niste pravilno unijeli. Pokusajte ponovo ili se obratite programeru"
      )
    );
    dispatch(loading(false));
  }
};
export const getProizvodi = podaci => async dispatch => {
  dispatch(loading(true));
  try {
    const proizvod = await axios.post(
      "https://prodaja-server.herokuapp.com/Proizvod/get",
      podaci
    );
    dispatch(proizvodiToRedux(proizvod.data));
    dispatch(loading(false));
  } catch (error) {
    if (!error.response) {
      dispatch(loading(false));
      return dispatch(
        errorPostProizvod(
          "Server trenutno ne radi pokusajte kasnije ili se obratite programeru"
        )
      );
    }
    dispatch(errorPostProizvod("Nesto nije uredu pokusajte kasnije ponovo"));
    dispatch(loading(false));
  }
};
export const newProizvod = data => ({
  type: NEW_PROIZVOD,
  payload: data
});
export const loading = state => ({
  type: LOADING_PROIZVOD,
  payload: state
});
export const errorPostProizvod = data => ({
  type: ERROR_PROIZVOD,
  payload: data
});
export const proizvodiToRedux = proizvodi => ({
  type: GET_PROIZVODI,
  payload: proizvodi
});
