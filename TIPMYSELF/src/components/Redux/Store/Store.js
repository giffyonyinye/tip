import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {reducers}  from '../Reducer/RootReducer';

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
    accountName : {accountName: []}
}

const middleware = [thunk]

const Store = createStore(reducers, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default Store;


