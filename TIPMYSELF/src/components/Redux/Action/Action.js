import axios from 'axios';
import {
    CREATE_ACTION,
    CREATE_SUCCESS,
    CREATE_FAILED,
    LOGIN_ACTION,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_ACTION,
    GET_USER_ACTION,
    GET_USER_SUCCESS,
    GET_USER_FAILED

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

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        let err = error.response.data.Message
        dispatch({
            type: CREATE_FAILED,
            payload: err
        })
    }
}

export const login = (email, password, acctNumber) => async (dispatch) => {

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
        dispatch(getUser(acctNumber))

    } catch (error) {
       let err = error.response.data.Message
        dispatch({
            type: LOGIN_FAILED,
            payload: err
        })
    }
}

export const getUser = (acctNumber) => async (dispatch) => {

    try {
        dispatch({
            type:GET_USER_ACTION
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.get(
            `${url}/api/Users/UserDetails?acctNum=${acctNumber}`,
            config
        )
        dispatch({
            type: GET_USER_SUCCESS,
            payload: data
        })

    } catch (error) {
       let err = error.response.data.Message
        dispatch({
            type: GET_USER_FAILED,
            payload: err
        })
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: LOGOUT_ACTION })

}













  
