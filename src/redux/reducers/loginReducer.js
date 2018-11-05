import { LOADING_ACCOUNT, ERROR_LOGIN, SAVE_ACCOUNT } from "../consts";
const initialState = {
  account: {},
  loading: false,
  errorLogin: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ACCOUNT:
      return { ...state, account: action.payload };
    case LOADING_ACCOUNT:
      return { ...state, loading: action.payload };
    case ERROR_LOGIN:
      return { ...state, errorLogin: action.payload };
    default:
      return state;
  }
};
