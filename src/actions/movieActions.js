import Axios from "axios";

export const GET_MOVIES_PENDING = "GET_MOVIES_PENDING";
export const GET_MOVIES_FULLFIELED = "GET_MOVIES_FULLFIELED";
export const GET_MOVIES_REJECTED = "GET_MOVIES_REJECTED";

export const getMovies = () => {
  var config = {
    headers: {
      "x-access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtb2EiLCJpYXQiOjE1NjMyOTQ5MzIsImV4cCI6MTU2MzI5NTY1Mn0.7onOTrkXPckaTljE2JDxcN_XCCTW_C4Exosx_2XmnUk"
    }
  };
  return dispathc => {
    dispathc({
      type: "GET_MOVIES",

      payload: Axios.get(
        "https://movie-api-with-nodejs.herokuapp.com/api/movies",
        config
      ).then(res => console.log(res))
    });
  };
};
