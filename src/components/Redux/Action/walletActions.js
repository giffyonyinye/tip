import axios from 'axios';
import { 
    TIP_ACTION,
    TIP_SUCCESS,
    TIP_FAILED,
    TIP_TOGGLE_FAILED,
    TIP_WALLET_ACTION,
    TIP_WALLET_SUCCESS,
    TIP_WALLET_FAILED,
    TIP_TOGGLE_SUCCESS,
    TIP_TOGGLE_ACTION,
    WALLET_HISTORY_ACTION,
    WALLET_HISTORY_SUCCESS,
    WALLET_HISTORY_FAILED,
} from '../constants/walletConstants';

const url = "https://tipproj.azurewebsites.net"

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
            `${url}/api/TipWallet/ToggleTipMyself?acctNum=${acctNumber}`,
            { 'tipStatus': toggleStatus },
            config
        )

        dispatch({
            type:TIP_TOGGLE_SUCCESS,
            payload: data
        })
        dispatch(tipWalletDetails(acctNumber));

    } catch (error) {
        dispatch({
            type: TIP_TOGGLE_FAILED,
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
            `${url}/api/TipWallet/ActivateStatus?acctNum=${acctNumber}`,
            { 'tipStatus': tip_status, 'tipPercent': tip_percentage  },
            config
        )

        dispatch({
            type: TIP_SUCCESS,
            payload: data
        })
        dispatch(tipWalletDetails(acctNumber));


    } catch (error) {
        dispatch({
            type: TIP_FAILED,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const tipWalletDetails = (acctNumber) => async (dispatch) => {

    try {
        dispatch({
            type:TIP_WALLET_ACTION
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get(
            `${url}/api/Users/WalletDetail?acctNumber=${acctNumber}`,
            config
        )
        dispatch({
            type: TIP_WALLET_SUCCESS,
            payload: data
        })


    } catch (error) {
        console.log(error)
        dispatch({
            type: TIP_WALLET_FAILED,
            payload: error.response && error.response.data
                ? error.response.data
                : error.message,
        })
    }

}

export const walletHistory = (acctNumber) => async (dispatch) => {

    try {
        dispatch({
            type:WALLET_HISTORY_ACTION
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get(
            `${url}/api/Transactions/WalletHistory?acctNumber=${acctNumber}`,
            config
        )
            console.log(data)
        dispatch({
            type: WALLET_HISTORY_SUCCESS,
            payload: data
        })


    } catch (error) {
        console.log(error)
        dispatch({
            type: WALLET_HISTORY_FAILED,
            payload: error.response && error.response.data
                ? error.response.data
                : error.message,
        })
    }

}