import { combineReducers } from "redux";
import { userReducer, transactionReducer, tipReducer } from "./index";
export const reducers = combineReducers(
    {
        userLogin: userReducer,
        transaction: transactionReducer,
        toggleTip: tipReducer
    });