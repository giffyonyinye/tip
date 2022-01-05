import {
    LOGIN_ACTION,
    LOGIN_SUCCESS,
    TRANSFER_ACTION,
    TRANSFER_SUCCESS,
    TRANSFER_FAIL,
    LOGIN_FAILED,
    LOGOUT_ACTION,
    TIP_ACTION,
    TIP_SUCCESS,
    TIP_FAILED

} from '../constants/userConstants'


export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
        case TRANSFER_ACTION:    
            return { ...state, loading: true};
        case LOGIN_SUCCESS: 
        case TRANSFER_SUCCESS: 
        case TIP_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload };   
        case LOGOUT_ACTION: 
            return{};
        case TIP_ACTION:
            return {...state, loading: true};
        default:
            return state;
    }
}