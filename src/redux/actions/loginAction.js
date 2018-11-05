import axios from "axios";
import axiosHeaders from "../../utils/axiosHeaders";
import { LOADING_ACCOUNT, ERROR_LOGIN, SAVE_ACCOUNT } from "../consts";
import { reset } from "redux-form";
export const login = data => async dispatch => {
  dispatch(loading(true));
  try {
    const account = await axios.post(
      "https://prodaja-server.herokuapp.com/LogIn",
      data
    );
    localStorage.setItem("token", account.data.token);
    localStorage.setItem("account", JSON.stringify(account.data.podaci));
    axiosHeaders(account.data.token);
    dispatch(saveAccount(account.data.podaci));
    dispatch(loading(false));
    dispatch(reset("login"));
  } catch (error) {
    dispatch(loading(false));
    dispatch(reset("login"));
    dispatch(errorLogin(error.response.data));
  }
};
export const loading = state => ({
  type: LOADING_ACCOUNT,
  payload: state
});

export const errorLogin = error => ({
  type: ERROR_LOGIN,
  payload: error
});
export const saveAccount = data => ({
  type: SAVE_ACCOUNT,
  payload: data
});
export const logout = () => dispatch => {
  axiosHeaders({});
  localStorage.removeItem("token");
  localStorage.removeItem("account");
  dispatch(saveAccount({}));
};
