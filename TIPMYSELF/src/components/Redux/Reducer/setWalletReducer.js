import { TIP_ACTION, TIP_SUCCESS, TIP_FAILED } from "../constants/walletConstants";

export const setWalletReducer = (state = {}, action) => {
    switch (action.type) {
        case TIP_ACTION:
            return {...state, loading:true}
        case TIP_SUCCESS:
            return {...state, loading:false, setWallet: action.payload};
        case TIP_FAILED:
            return {...state, loading:false, error: action.payload}
        default:
            return state;
    }
}