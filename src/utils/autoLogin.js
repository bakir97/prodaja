import axiosHeaders from "./axiosHeaders";
import { saveAccount } from "../redux/actions/loginAction";
export default store => {
  const account = localStorage.getItem("account");
  const token = localStorage.getItem("token");
  if (account) store.dispatch(saveAccount(JSON.parse(account)));
  if (token) axiosHeaders(token);
};
