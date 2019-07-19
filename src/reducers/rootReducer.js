import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { authReducer, registerReducer } from "./authReducer";

export const rootReducer = combineReducers({
  movieReducer,
  authReducer,
  registerReducer
});
