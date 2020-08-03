import { combineReducers } from "redux";
import chatsReducer from "./chatsReducer";

const rootReducer = combineReducers({
  chat: chatsReducer,
});

export default rootReducer;
