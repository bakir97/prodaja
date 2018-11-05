import axios from "axios";
import { ONE_PROIZVOD, SUCCESS } from "../consts";
import { errorPostProizvod, loading } from "./proizvodiActions";
export const getOneProizvod = id => async dispatch => {
  dispatch(loading(true));
  try {
    const proizvod = await axios.get(
      `https://prodaja-server.herokuapp.com/Proizvod/${id}`
    );
    dispatch(proizvodToRedux(proizvod.data));
    dispatch(loading(false));
  } catch (error) {
    dispatch(loading(false));
    dispatch(
      errorPostProizvod(
        "Server trenutno ne radi pokusajte kasnije ili se obratite programeru"
      )
    );
    dispatch(loading(false));
  }
};
export const deleteOneProizvod = id => async dispatch => {
  try {
    dispatch(loading(true));
    await axios.delete(`https://prodaja-server.herokuapp.com/Proizvod/${id}`);
    dispatch(success(true));
    dispatch(loading(false));
  } catch (error) {
    dispatch(loading(false));
  }
};
export const proizvodToRedux = proizvod => ({
  type: ONE_PROIZVOD,
  payload: proizvod
});
export const success = state => ({
  type: SUCCESS,
  payload: state
});
