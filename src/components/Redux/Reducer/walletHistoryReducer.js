import { WALLET_HISTORY_ACTION, WALLET_HISTORY_SUCCESS, WALLET_HISTORY_FAILED } from "../constants/walletConstants";

export const walletHistoryReducer = (state= [], action) => {
    switch (action.type) {
        case WALLET_HISTORY_ACTION:
            return {...state, loading:true}
        case WALLET_HISTORY_SUCCESS:
            return {...state, loading:false, tipHistory : action.payload};
        case WALLET_HISTORY_FAILED:
            return {...state, loading:false, error: action.payload}
        default:
            return state;
    }
}