import axios from 'axios';
import { 
    GET_ACCOUNT_NAME_ACTION,
    GET_ACCOUNT_NAME_SUCCESS,
    GET_ACCOUNT_NAME_FAILED
} 
from "../constants/getAcctNameConstant";
const url = "https://tipproj.azurewebsites.net"

export const getAccountName = (acctNumber) => async (dispatch) => {

    try {
        dispatch({
            type:GET_ACCOUNT_NAME_ACTION
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
            type: GET_ACCOUNT_NAME_SUCCESS,
            payload: data
        })
        localStorage.setItem('accountName', JSON.stringify(data))
        
    } catch (error) {
       let err = error.response.data.Message
        dispatch({
            type: GET_ACCOUNT_NAME_FAILED,
            payload: err
        })
    }
}