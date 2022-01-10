import { combineReducers } from "redux";
import { 
    userReducer, 
} from "./userReducer";
import { transactionHistoryReducer } from "./transactionHistoryReducer";
import { walletDetailsReducer } from "./walletDetailsReducer";
import { toggleWalletReducer } from "./toggleWalletReducer";
import { transferReducer } from "./transferReducer";
import { walletHistoryReducer } from "./walletHistoryReducer";
import { setWalletReducer } from "./setWalletReducer";
export const reducers = combineReducers(
    {
        userLogin: userReducer,
        transaction: transactionHistoryReducer,
        walletDetails: walletDetailsReducer,
        tipHistory : walletHistoryReducer,
        toggleTip: toggleWalletReducer,
        transfer: transferReducer,
        setWallet: setWalletReducer
    });