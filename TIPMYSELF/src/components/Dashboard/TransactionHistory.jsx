import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transaction_History } from '../Redux/Action/transactionHistoryAction';
import "../Dashboard/dashboard.css";
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

export default function TransactionHistory() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo, error } = userLogin;
    const transaction = useSelector((state) => state.transaction);
    const { transactionInfo, loading } = transaction;
    console.log(transactionInfo, error, loading)
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate(-1)
    }
    useEffect(() => {
        if(!userInfo) {
           navigate("/")
        }
    }, [userInfo])
    useEffect(() => {
        console.log(userInfo)
        if(userInfo) {
        dispatch(transaction_History(userInfo.acctNumber));
        }
    }, [userInfo])

    useEffect(() => {
        dispatch(transaction_History(userInfo.acctNumber));
    }, []);
    
    return (
        <div>
            <div className="transaction-bg">
                <div className="d-flex" style={{paddingTop:"2rem"}}>
                    <div >
                        <i onClick={goToPreviousPath} className="fa fa-arrow-left bg-white mt-1 mx-5 rounded-circle p-2" style={{color:"#ab2656"}}></i>
                    </div>
                    <p className="text-white" style={{fontSize:"2rem"}}>Transaction History</p>

                </div>
                <div className="p-2 rounded mt-4" style={{overflow:"auto", width:"90%", margin:"auto", height:"80vh", background:"whitesmoke"}}>
                    <table className="table text-black w-full mt-2 " >
                        <thead>
                            <tr>
                                <th>Transaction Date</th>
                                <th>Source Account</th>
                                <th>Beneficiary</th>
                                <th>Amount</th>
                                <th>Reference ID</th>
                            </tr>
                        </thead>
                        <div>
                            {
                               transactionInfo.length === 0 &&
                                <p className="p-1">No Transaction History Record</p>
                            }
                        </div>
                        <tbody>
                            {transactionInfo.map((trans, index) => (
                                <tr key={index}>
                                    <td>{moment(trans.transactionDate).format("DD/MM/YY hh:mm")}</td>
                                    <td>{trans.transactionSourceAccount}</td>
                                    <td>{trans.transactionDestinationAccount}</td>
                                    <td>₦{trans.transactionAmount}</td>
                                    <td>{trans.transactionUniqueReference}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
