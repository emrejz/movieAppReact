import {
  GET_MOVIES_PENDING,
  GET_MOVIES_FULLFIELED,
  GET_MOVIES_REJECTED
} from "../actions/movieActions";
const initState = {
  fetching: false,
  fetched: false,
  movies: [],
  errors: {}
};
export const movieReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_PENDING:
      return {
        ...state,
        fetching: true
      };
    case GET_MOVIES_FULLFIELED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        movies: payload
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
