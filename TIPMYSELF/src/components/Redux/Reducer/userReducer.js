import {
    LOGIN_ACTION,
    LOGIN_SUCCESS,
    CREATE_ACTION,
    CREATE_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_ACTION,
    CREATE_FAILED,
    GET_USER_ACTION,
    GET_USER_SUCCESS,
    GET_USER_FAILED

} from '../constants/userConstants'

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ACTION:
        case GET_USER_ACTION:   
        case LOGIN_ACTION:
            return {...state, loading:true}
        case CREATE_FAILED:
            return {...state, loading:false, error:action.payload} 
        
        case GET_USER_SUCCESS:
        case CREATE_SUCCESS:
        case LOGIN_SUCCESS: 
            return { ...state, loading: false, authenticated: true,  userInfo: action.payload };  
        case GET_USER_FAILED:
        case LOGIN_FAILED: 
            return {...state, loading:false, error: action.payload}  
        case LOGOUT_ACTION: 
            return{};
        default:
            return state;
    }
}




