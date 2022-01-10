import { TRANSFER_ACTION, TRANSFER_SUCCESS, TRANSFER_FAILED } from "../constants/userConstants";

export const transferReducer = (state = {}, action) => {
    switch (action.type) {
        case TRANSFER_ACTION:
            return {...state, loading:true}
        case TRANSFER_SUCCESS:
            return {...state, loading:false, transferInfo: action.payload};
        case TRANSFER_FAILED:
            return {...state, loading:false, error: action.payload}
        default:
            return state;
    }
}