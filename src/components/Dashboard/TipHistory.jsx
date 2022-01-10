import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { walletHistory,  } from '../Redux/Action/walletActions';
import { useEffect } from 'react';
import moment from 'moment';

const TipHistory = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const history = useSelector((state) => state.tipHistory);
    const { tipHistory } = history;

    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(walletHistory(userInfo.acctNumber));
    }, []);
    
    return (
        <div>
            <div>
                <div>
                    <div className="text-center text-white" style={{paddingTop:"1rem"}}>
                        <h4>Tip History</h4>
                    </div>
                </div>
                <div>
                    <table className="table table-active text-white w-75 m-auto mt-5">
                        <thead>
                            <tr>
                                <th>Transaction Date</th>
                                <th>Tip Amount</th>
                                <th>Tip Percent</th>
                                <th>Tip Amount</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            
                                {tipHistory.map((trans, index) => (
                                    <tr key={index}>
                                        <td>{moment(trans.date).format("DD/MM/YY hh:mma")}</td>
                                        <td>{trans.tipAmount}</td>
                                        <td>{trans.tipPercent}</td>
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
