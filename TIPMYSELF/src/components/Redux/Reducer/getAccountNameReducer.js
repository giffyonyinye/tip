import { GET_ACCOUNT_NAME_ACTION, GET_ACCOUNT_NAME_SUCCESS, GET_ACCOUNT_NAME_FAILED} from "../constants/getAcctNameConstant";

export const getAccountName = (state = {}, action) => {
    switch (action.type) {
        case GET_ACCOUNT_NAME_ACTION:
            return {...state, loading:true}
        case GET_ACCOUNT_NAME_SUCCESS:
            return {...state, loading:false, accountName: action.payload};
        case GET_ACCOUNT_NAME_FAILED:
            return {...state, loading:false, error: action.payload}
        default:
            return state;
    }
}