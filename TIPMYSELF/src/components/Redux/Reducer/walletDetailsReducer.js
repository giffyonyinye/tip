import { TIP_WALLET_ACTION, TIP_WALLET_SUCCESS, TIP_WALLET_FAILED } from "../constants/walletConstants";

export const walletDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case TIP_WALLET_ACTION:
            return {...state, loading:true}
        case TIP_WALLET_SUCCESS:
            return {...state, loading:false, walletDetails: action.payload};
        case TIP_WALLET_FAILED:
            return {...state, loading:false, error: action.payload}
        default:
            return state;
    }
}