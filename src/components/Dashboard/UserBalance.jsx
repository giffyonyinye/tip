import React from 'react';
import "./dashboard.css";
import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../Redux/Action/Action';

const UserBalance = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser(userInfo.acctNumber));
    }, [])
    return (
        <div>
            <div className="balance-bg  text-white p-2 rounded"  style={{boxShadow:"6px 6px 6px grey"}}>
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="m-0">Current Balance</p>
                        <p className="h2"><span style={{fontSize:"1.5rem"}}>₦</span> {userInfo && userInfo.acctBalance.toLocaleString()}</p>
                        <div style={{fontSize:".7rem", marginTop:"3rem"}}>
                            <p className="m-0">Account Number</p>
                            <p className="m-0" style={{fontSize:"1.2rem", fontWeight:"bold"}}>{userInfo && userInfo.acctNumber}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        <div>
                            <p className="m-0" style={{fontSize:".7rem"}}>Status</p>
                            <p className="m-0" style={{fontSize:"1.2rem"}}>Active</p>
                        </div>
                        <div>
                            <p className="m-0" style={{fontSize:".7rem"}}>Account Type</p>
                            <p className="m-0" style={{fontSize:"1.2rem"}}>Tier 3</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default UserBalance;
