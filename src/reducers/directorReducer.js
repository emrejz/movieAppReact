import {
  GET_DIRECTORS_PENDING,
  GET_DIRECTORS_FULFILLED,
  GET_DIRECTORS_REJECTED
} from "../actions/directorActions";
const initState = {
  fetching: false,
  fetched: false,
  directorData: {},
  errors: {}
};
export const directorReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DIRECTORS_PENDING:
      return {
        ...initState,
        fetching: true,
        fetched: false
      };
    case GET_DIRECTORS_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        directorData: payload
      };
    case GET_DIRECTORS_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        errors: payload
      };
    default:
      return state;
  }
};
