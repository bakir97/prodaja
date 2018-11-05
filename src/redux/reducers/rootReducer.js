import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginReducer from "./loginReducer";
import proizvodiReducer from "./proizvodiReducer";
export default combineReducers({
  form: formReducer,
  login: loginReducer,
  proizvodi: proizvodiReducer
});
