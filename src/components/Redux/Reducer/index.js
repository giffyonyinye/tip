import {
    LOGIN_ACTION,
    LOGIN_SUCCESS,
    CREATE_ACTION,
    CREATE_SUCCESS,
    TRANSFER_ACTION,
    TRANSFER_SUCCESS,
    TRANSFER_FAIL,
    LOGIN_FAILED,
    LOGOUT_ACTION,
    TIP_ACTION,
    TIP_SUCCESS,
    TIP_FAILED,
    TIP_TOGGLE_ACTION,
    TIP_TOGGLE_SUCCESS,
    TIP_TOGGLE_FAILED,
    TRANSACTION_HISTORY_ACTION,
    TRANSACTION_HISTORY_SUCCESS,
    TRANSACTION_HISTORY_FAILED,
    CREATE_FAILED

} from '../constants/userConstants'


export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ACTION:
            return {...state, loading:true}
        case CREATE_SUCCESS:
            return {...state, loading:false, create: action.payload}
        case CREATE_FAILED:
            return {...state, loading:false, error:action.payload}
        case LOGIN_ACTION:
        case TRANSFER_ACTION:    
            return { ...state, loading: true};
        case LOGIN_SUCCESS: 
            return { ...state, loading: false, authenticated: true,  userInfo: action.payload }; 
        case TRANSFER_SUCCESS:
            return { ...state, loading: false,  userInfo: action.payload }; 
        case TIP_SUCCESS:
            return { ...state, loading: false,  userInfo: action.payload }; 
        case LOGIN_FAILED: 
            return {...state, loading:false, error: action.payload}  
        case LOGOUT_ACTION: 
            return{};
        case TIP_ACTION:
            return {...state, loading: true};
        default:
            return state;
    }
}

export const transactionReducer = (state= {}, action) => {
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

export const tipReducer = (state= {}, action) => {
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