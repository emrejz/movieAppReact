import {
  SIGN_IN_PENDING,
  SIGN_IN_FULFILLED,
  SIGN_IN_REJECTED,
  SIGN_UP_PENDING,
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED,
  SESSION_PENDING,
  SESSION_FULFILLED,
  SESSION_REJECTED
} from "../actions/authActions";
const initState = {
  fetching: false,
  fetched: false,
  tokenData: { status: null, message: null, token: null },
  errors: {}
};
const initState1 = {
  fetching: false,
  fetched: false,
  errors: {},
  session: { status: null, message: null, username: null }
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_PENDING:
      return {
        ...initState,
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
export const sessionReducer = (state = initState1, { type, payload }) => {
  switch (type) {
    case SESSION_PENDING:
      return {
        ...initState1,
        fetching: true,
        fetched: false
      };
    case SESSION_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        session: payload
      };
    case SESSION_REJECTED:
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
