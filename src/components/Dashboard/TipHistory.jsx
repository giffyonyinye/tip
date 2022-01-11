import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { walletHistory,  } from '../Redux/Action/walletActions';
import { useEffect, useState } from 'react';
import moment from 'moment';

const TipHistory = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const history = useSelector((state) => state.tipHistory);
    const { tipHistory } = history;
    const [emptyHistory, setEmptyHistory] = useState(false);

    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(walletHistory(userInfo.acctNumber));
    }, []);
    
    return (
        <div>
            <div>
                <div>
                    <div className="text-center text-white" style={{paddingTop:"1rem"}}>
                        <h4 style={{color:"#ab2656"}}>Tip History</h4>
                    </div>
                </div>

                
                <div className="" style={{background:"#811a52", overflow:"auto", height:"50%"}}>
                    <table className="table text-white w-full m-auto mt-3">
                        <thead>
                            <tr>
                                <th>Transaction Date</th>
                                <th>Transaction Amount</th>
                                <th>Tip Percent</th>
                                <th>Tip Amount</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                               tipHistory.length === 0 &&
                                <p className="ps-2">No Tip History Record</p>
                            }
                            {tipHistory.map((trans, index) => (
                                <tr key={index}>
                                    <td>{moment(trans.date).format("DD/MM/YY hh:mma")}</td>
                                    <td>₦{trans.transactionAmount}</td>
                                    <td>{trans.tipPercent}%</td>
                                    <td>{trans.tipAmount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TipHistory;
