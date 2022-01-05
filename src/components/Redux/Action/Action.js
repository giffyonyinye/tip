export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const USER_INFO = "USER_INFO";
export const LOGOUT_ACTION = "LOGOUT_ACTION";

export const logInAction = (payload) => {
    return {
        type:LOGIN_ACTION,
        payload
    };
}
export const logInSuccess = (payload) => {  
    return {
        type:LOGIN_SUCCESS,
        payload
    };
}

export const logInFailed = (payload) => {
    return {
        type:LOGIN_FAILED,
        payload
    };
}

export const userInfo = (payload) => {
    return {
        type:USER_INFO,
        payload
    };
}

export const logoutAction = (payload) => {
    return {
        type:LOGOUT_ACTION,
        payload
    };
}
