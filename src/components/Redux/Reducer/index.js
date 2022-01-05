const initialState = {
    userInfo: [],
    logout:[]
    // loading: false,
    // error: null
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_INFO": 
        return {...state,
            userInfo:[...state.userInfo, action.payload]};
        case "LOGOUT_ACTION": 
            return{userInfo:[], logout:[{...action.payload}]};
        default:
            return state;
    }
}