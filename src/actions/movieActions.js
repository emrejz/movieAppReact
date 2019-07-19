import Axios from "axios";

export const GET_MOVIES_PENDING = "GET_MOVIES_PENDING";
export const GET_MOVIES_FULFILLED = "GET_MOVIES_FULFILLED";
export const GET_MOVIES_REJECTED = "GET_MOVIES_REJECTED";

export const getMovies = () => {
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
