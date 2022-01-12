import axios from "axios";
import { TRANSACTION_HISTORY_ACTION, TRANSACTION_HISTORY_SUCCESS, TRANSACTION_HISTORY_FAILED } from "../constants/userConstants";

const url = "https://tipproj.azurewebsites.net"

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
            `${url}/api/Transactions/TransactionHistory?AcctNumber=${acctNumber}`,
            config
        )
        dispatch({
            type: TRANSACTION_HISTORY_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: TRANSACTION_HISTORY_FAILED,
            payload: error.response && error.response.data
                ? error.response.data
                : error.message,
        })
    }

}