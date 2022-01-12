import { 
    TRANSACTION_HISTORY_ACTION,
    TRANSACTION_HISTORY_SUCCESS,
    TRANSACTION_HISTORY_FAILED 
} from "../constants/userConstants";

export const transactionHistoryReducer = (state = [], action) => {
    switch (action.type) {
        case TRANSACTION_HISTORY_ACTION:
            return {...state, loading:true}
        case TRANSACTION_HISTORY_SUCCESS:
            return {...state, loading:false, transactionInfo: action.payload};
        case TRANSACTION_HISTORY_FAILED:
            return {...state, loading:false, error: action.payload}
        default:
            return state;
    }
}