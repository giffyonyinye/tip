import axios from "axios";
import { getUser } from "./Action";
import { TRANSFER_ACTION, TRANSFER_SUCCESS, TRANSFER_FAILED } from "../constants/userConstants";
import { Navigate } from "react-router";

const url = "https://localhost:5001"

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
        console.log(data)
        dispatch(getUser(acctNumber));
        Navigate("/dashboard")

    } catch (error) {
        let err = error.response.data.Message
        dispatch({
            type: TRANSFER_FAILED,
            payload: err
        })
    }

}