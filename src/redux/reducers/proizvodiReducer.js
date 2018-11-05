import {
  LOADING_PROIZVOD,
  NEW_PROIZVOD,
  ERROR_PROIZVOD,
  GET_PROIZVODI,
  ONE_PROIZVOD,
  SUCCESS
} from "../consts";
const initialState = {
  newProizvod: {},
  loading: false,
  error: false,
  proizvodi: [],
  oneProizvod: {},
  success: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_PROIZVOD:
      return { ...state, newProizvod: action.payload };
    case LOADING_PROIZVOD:
      return { ...state, loading: action.payload };
    case ERROR_PROIZVOD:
      return { ...state, error: action.payload };
    case GET_PROIZVODI:
      return { ...state, proizvodi: action.payload };
    case ONE_PROIZVOD:
      return { ...state, oneProizvod: action.payload };
    case SUCCESS:
      return { ...state, success: action.payload };
    default:
      return state;
  }
};
