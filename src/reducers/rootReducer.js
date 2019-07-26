import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { authReducer, registerReducer } from "./authReducer";
import { directorReducer } from "./directorReducer";

export const rootReducer = combineReducers({
  movieReducer,
  authReducer,
  registerReducer,
  directorReducer
});
