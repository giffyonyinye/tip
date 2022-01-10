import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import createSagaMiddleware from 'redux-saga';
import {reducers}  from '../Reducer/RootReducer';
// import {rootSaga} from "../Saga/RootSaga";

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    transaction: {transactionInfo: []},
    tipHistory: {tipHistory: []},
    setWallet : {setWallet: {}},
    walletDetails : {walletDetails: {}},
    transfer : {transferInfo: []},
    toggleTip: {toggleTip : false},
}

const middleware = [thunk]

const Store = createStore(reducers, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default Store;


