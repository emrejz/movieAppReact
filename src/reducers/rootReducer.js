import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { authReducer, registerReducer, sessionReducer } from "./authReducer";
import { directorReducer } from "./directorReducer";

export const rootReducer = combineReducers({
  movieReducer,
  authReducer,
  registerReducer,
  sessionReducer,
  directorReducer
});
