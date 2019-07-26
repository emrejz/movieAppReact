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
        fetched: false,
        fetching: true
      };
    case GET_MOVIES_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        moviesData: payload,
        errors: {}
      };
    case GET_MOVIES_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        moviesData: {},
        errors: payload
      };
    case ADD_MOVIE_PENDING:
      return {
        ...state,
        fetching: true,
        fetched: false,
        addMovie: {},
        errors: {}
      };
    case ADD_MOVIE_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        addMovie: payload,
        errors: {}
      };
    case ADD_MOVIE_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        addMovie: {},
        errors: payload
      };
    default:
      return state;
  }
};
