import { TIP_TOGGLE_ACTION, TIP_TOGGLE_SUCCESS, TIP_TOGGLE_FAILED } from "../constants/walletConstants";

export const toggleWalletReducer = (state = {}, action) => {
    switch (action.type) {
        case TIP_TOGGLE_ACTION:
            return {...state, loading:true}
        case TIP_TOGGLE_SUCCESS:
            return {...state, loading:false, toggleTip: action.payload};
        case TIP_TOGGLE_FAILED:
            return {...state, loading:false, error: action.payload}
        default:
            return state;
    }
}