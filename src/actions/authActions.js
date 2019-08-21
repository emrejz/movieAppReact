import Axios from "axios";
export const SIGN_IN_PENDING = "SIGN_IN_PENDING";
export const SIGN_IN_FULFILLED = "SIGN_IN_FULFILLED";
export const SIGN_IN_REJECTED = "SIGN_IN_REJECTED";

export const SIGN_UP_PENDING = "SIGN_UP_PENDING";
export const SIGN_UP_FULFILLED = "SIGN_UP_FULFILLED";
export const SIGN_UP_REJECTED = "SIGN_UP_REJECTED";

export const SESSION_PENDING = "SESSION_PENDING";
export const SESSION_FULFILLED = "SESSION_FULFILLED";
export const SESSION_REJECTED = "SESSION_REJECTED";

export const signInFunc = (username, password) => {
  return dispatch =>
    dispatch({
      type: "SIGN_IN",
      payload: Axios.post(process.env.REACT_APP_BASE_URL + "/authenticate", {
        username,
        password
      }).then(res => res.data)
    });
};

export const signUpFunc = (username, password) => {
  return dispatch =>
    dispatch({
      type: "SIGN_UP",
      payload: Axios.post(process.env.REACT_APP_BASE_URL + "/register", {
        username,
        password
      }).then(res => res.data.token)
    });
};
export const getSession = x => {
  const token = x || localStorage.getItem("token");
  return dispatch =>
    dispatch({
      type: "SESSION",
      payload: Axios.post(
        process.env.REACT_APP_BASE_URL + "/authenticate/session",
        { token }
      ).then(res => res.data)
    });
};
