import React from 'react';
import "./dashboard.css";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const UserBalance = () => {
    const contact = useSelector(state => state.LoginReducer.userInfo[0]);
    let data = JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
        data = JSON.parse(localStorage.getItem("userData"));
        
      });
    return (
        <div>
            <div className="balance-bg w-75 text-white mt-4 p-2 rounded">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="m-0">Current Balance</p>
                        <p className="h2">₦ {contact.acctBalance.toLocaleString()}</p>
                        <div style={{fontSize:".7rem", marginTop:"3rem"}}>
                            <p className="m-0">Account Number</p>
                            <p className="m-0">{contact.acctNumber}</p>
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
