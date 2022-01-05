import axios from 'axios';
import {
    LOGIN_ACTION,
    TRANSFER_ACTION,
    TRANSFER_SUCCESS,
    TRANSFER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_ACTION,
    TIP_ACTION,
    TIP_SUCCESS,
    TIP_FAILED

} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {

    try {
        dispatch({
            type:LOGIN_ACTION
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            "https://localhost:5001/api/User/login",
            { 'email': email  },
            config
        )

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: LOGIN_FAILED,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: LOGOUT_ACTION })

}

export const transfer = (acctNumber, receiver, amount) => async (dispatch) => {

    try {
        dispatch({
            type:TRANSFER_ACTION
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `https://localhost:5001/api/Transactions/SendMoney?FromAccount=${acctNumber}`,
            { 'toAccount': receiver, 'amount': amount  },
            config
        )

        dispatch({
            type: TRANSFER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: TRANSFER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }

}

export const tip = (acctNumber, tip_status, tip_percentage) => async (dispatch) => {
    try {
        dispatch({
            type:TIP_ACTION
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `https://localhost:5001/api/TipWallet/ActivateStatus?FromAccount=${acctNumber}`,
            { 'tipStatus': tip_status, 'tipPercent': tip_percentage  },
            config
        )

        dispatch({
            type: TIP_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: TIP_FAILED,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

    //         axios({
    //             method: "POST",
    //             url: `https://localhost:5001/api/Transactions/SendMoney?FromAccount=${contact.acctNumber}`,
    //             headers: {
    //                 'Content-type': 'application/json',
    //             },
    //             data: {
    //                 toAccount: form.toAccount,
    //                 amount: form.amount
    //             }
    //         })

// export const logInAction = (payload) => {
//     return {
//         type:LOGIN_ACTION,
//         payload
//     };
// }
// export const logInSuccess = (payload) => {  
//     return {
//         type:LOGIN_SUCCESS,
//         payload
//     };
// }

// export const logInFailed = (payload) => {
//     return {
//         type:LOGIN_FAILED,
//         payload
//     };
// }

// export const userInfo = (payload) => {
//     return {
//         type:USER_INFO,
//         payload
//     };
// }

// export const logoutAction = (payload) => {
//     return {
//         type:LOGOUT_ACTION,
//         payload
//     };
// }
