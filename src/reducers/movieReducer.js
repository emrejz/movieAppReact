import {
  GET_MOVIES_PENDING,
  GET_MOVIES_FULFILLED,
  GET_MOVIES_REJECTED
} from "../actions/movieActions";
const initState = {
  fetching: false,
  fetched: false,
  moviesData: {},
  errors: {}
};
export const movieReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_PENDING:
      return {
        ...state,
        fetching: true
      };
    case GET_MOVIES_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        moviesData: payload
      };
    case GET_MOVIES_REJECTED:
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
