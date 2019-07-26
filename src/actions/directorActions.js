import Axios from "axios";
export const GET_DIRECTORS_PENDING = "GET_DIRECTORS_PENDING";
export const GET_DIRECTORS_FULFILLED = "GET_DIRECTORS_FULFILLED";
export const GET_DIRECTORS_REJECTED = "GET_DIRECTORS_REJECTED";

export const getDirectors = () => {
  var config = {
    headers: {
      "x-access-token": localStorage.getItem("token")
    }
  };
  return dispatch =>
    dispatch({
      type: "GET_DIRECTORS",
      payload: Axios.get(
        process.env.REACT_APP_BASE_URL + "/api/directors",
        config
      ).then(res => res.data)
    });
};
