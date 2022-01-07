import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transaction_History } from '../Redux/Action/Action';
import "../Dashboard/dashboard.css";
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

export default function TransactionHistory() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const transaction = useSelector((state) => state.transaction);
    const { transactionInfo } = transaction;
    console.log(transactionInfo)
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate(-1)
    }

    useEffect(() => {
        dispatch(transaction_History(userInfo.acctNumber))
    }, [])
    return (
        <div>
            <div className="send-money-bg">
                <div>
                    <div className="d-flex text-white" style={{paddingTop:"4rem"}}>
                        <i onClick={goToPreviousPath} className="fa fa-arrow-left mt-1 mx-5"></i>
                        <h4>Transaction History</h4>
                    </div>
                </div>
                <div>
                    <table className="table table-active text-white w-75b m-auto mt-5">
                        <thead>
                            <tr>
                                <th>Transaction Date</th>
                                <th>Source Account</th>
                                <th>Beneficiary</th>
                                <th>Amount</th>
                                <th>Reference ID</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            
                                {transactionInfo.map((trans, index) => (
                                    <tr key={index}>
                                        <td>{moment(trans.transactionDate).format("DD/MM/YY hh:mma")}</td>
                                        <td>{trans.transactionSourceAccount}</td>
                                        <td>{trans.transactionDestinationAccount}</td>
                                        <td>{trans.transactionAmount}</td>
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
