import { combineReducers } from "redux";
import { userReducer } from "./index";
export const reducers = combineReducers({userLogin: userReducer});