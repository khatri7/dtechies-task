import { combineReducers } from "redux";
import initializeReducer from "./initialize/reducer";
import userReducer from "./user/reducer";
import scoresReducer from "./scores/reducer";

export default combineReducers({
  initApp: initializeReducer,
  scores: scoresReducer,
  user: userReducer,
});
