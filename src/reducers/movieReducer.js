import {
  GET_MOVIES_PENDING,
  GET_MOVIES_FULFILLED,
  GET_MOVIES_REJECTED,
  ADD_MOVIE_PENDING,
  ADD_MOVIE_FULFILLED,
  ADD_MOVIE_REJECTED
} from "../actions/movieActions";
const initState = {
  fetching: false,
  fetched: false,
  moviesData: {},
  addMovie: {},
  errors: {}
};
export const movieReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_PENDING:
      return {
        ...initState,
        fetching: true
      };
    case GET_MOVIES_FULFILLED:
      return {
        ...initState,
        fetched: true,
        moviesData: payload
      };
    case GET_MOVIES_REJECTED:
      return {
        ...initState,
        errors: payload
      };
    case ADD_MOVIE_PENDING:
      return {
        ...initState,
        fetching: true
      };
    case ADD_MOVIE_FULFILLED:
      return {
        ...initState,
        fetched: true,
        addMovie: payload
      };
    case ADD_MOVIE_REJECTED:
      return {
        ...initState,
        errors: payload
      };
    default:
      return state;
  }
};
