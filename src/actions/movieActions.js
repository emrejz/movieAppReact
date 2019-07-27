import Axios from "axios";

export const GET_MOVIES_PENDING = "GET_MOVIES_PENDING";
export const GET_MOVIES_FULFILLED = "GET_MOVIES_FULFILLED";
export const GET_MOVIES_REJECTED = "GET_MOVIES_REJECTED";

export const ADD_MOVIE_PENDING = "ADD_MOVIE_PENDING";
export const ADD_MOVIE_FULFILLED = "ADD_MOVIE_FULFILLED";
export const ADD_MOVIE_REJECTED = "ADD_MOVIE_REJECTED";
export const getMovies = token => {
  var config = {
    headers: {
      "x-access-token": localStorage.getItem("token")
    }
  };
  return dispatch => {
    dispatch({
      type: "GET_MOVIES",
      payload: Axios.get(
        process.env.REACT_APP_BASE_URL + "/api/movies",
        config
      ).then(res => res.data)
    });
  };
};
export const addMovie = movie => {
  var config = {
    headers: {
      "x-access-token": localStorage.getItem("token")
    }
  };
  return dispatch => {
    dispatch({
      type: "ADD_MOVIE",
      payload: Axios.post(
        process.env.REACT_APP_BASE_URL + "/api/movies",
        movie,
        config
      ).then(res => res)
    });
  };
};
