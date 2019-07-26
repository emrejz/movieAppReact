import {
  SIGN_IN_PENDING,
  SIGN_IN_FULFILLED,
  SIGN_IN_REJECTED,
  SIGN_UP_PENDING,
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED
} from "../actions/authActions";
const initState = {
  fetching: false,
  fetched: false,
  tokenData: { status: null, message: null, token: null, username: null },
  errors: {}
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_PENDING:
      return {
        ...state,
        fetching: true
      };
    case SIGN_IN_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        tokenData: payload
      };
    case SIGN_IN_REJECTED:
      return {
        ...state,
        fetching: false,
        errors: payload
      };

    default:
      return state;
  }
};

export const registerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGN_UP_PENDING:
      return {
        ...initState,
        fetching: true,
        fetched: false
      };
    case SIGN_UP_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        tokenData: payload
      };
    case SIGN_UP_REJECTED:
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
