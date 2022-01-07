import axios from 'axios';
import {
    CREATE_ACTION,
    CREATE_SUCCESS,
    CREATE_FAILED,
    LOGIN_ACTION,
    TRANSFER_ACTION,
    TRANSFER_SUCCESS,
    TRANSFER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_ACTION,
    TIP_ACTION,
    TIP_SUCCESS,
    TIP_FAILED,
    TRANSACTION_HISTORY_SUCCESS,
    TRANSACTION_HISTORY_ACTION,
    TRANSACTION_HISTORY_FAILED,
    TIP_TOGGLE_SUCCESS,
    TIP_TOGGLE_ACTION,
    TIP_TOGGLE_FAILED

} from '../constants/userConstants'
const url = "https://tipproj.azurewebsites.net"

export const createAccount = (firstName, lastName, email, password, pin) => async (dispatch) => {

    try {
        dispatch({
            type:CREATE_ACTION
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `${url}/api/Users/CreateAccount`,
            { 
            'firstName': firstName, 
            'lastName': lastName, 
            'email': email, 
            'password':password, 
            'transactionPin': pin  
            },
            config
        )

        dispatch({
            type: CREATE_SUCCESS,
            payload: data
        })

        // localStorage.setItem('createAccount', JSON.stringify(data))

    } catch (error) {
        let err = error.response.data.Message
        dispatch({
            type: CREATE_FAILED,
            payload: err
        })
    }
}

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
            `${url}/api/Users/login`,
            { 'email': email, 'password': password },
            config
        )

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
       let err = error.response.data.Message
        dispatch({
            type: LOGIN_FAILED,
            payload: err
        })
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: LOGOUT_ACTION })

}

export const transfer = (acctNumber, receiver, amount, pin) => async (dispatch) => {

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
            `${url}/api/Transactions/SendMoney?FromAccount=${acctNumber}`,
            { 'toAccount': receiver, 'amount': amount, 'transactionPin' : pin  },
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
export const toggleTip = (acctNumber, toggleStatus) => async (dispatch) => {

    try {
        dispatch({
            type:TIP_TOGGLE_ACTION
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `https://localhost:5001/api/TipWallet/ToggleTipMyself?acctNum=${acctNumber}`,
            { 'tipStatus': toggleStatus },
            config
        )

        dispatch({
            type:TIP_TOGGLE_SUCCESS,
            payload: data
        })

        // localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: TIP_TOGGLE_FAILED,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }

}

export const transaction_History = (acctNumber) => async (dispatch) => {

    try {
        dispatch({
            type:TRANSACTION_HISTORY_ACTION
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get(
            `https://localhost:5001/api/Transactions/TransactionHistory?AcctNumber=${acctNumber}`,
            config
        )
            console.log(data)
        dispatch({
            type: TRANSACTION_HISTORY_SUCCESS,
            payload: data
        })


    } catch (error) {
        console.log(error)
        dispatch({
            type: TRANSACTION_HISTORY_FAILED,
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
            `https://localhost:5001/api/TipWallet/ActivateStatus?acctNum=${acctNumber}`,
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

    
