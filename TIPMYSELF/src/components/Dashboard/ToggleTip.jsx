import React from 'react';
import { toggleTip } from '../Redux/Action/walletActions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ToggleTip() {
    const [falseStatus, setFalseStatus] = useState(false);
    const [trueStatus, setTrueStatus] = useState(true);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const walletStatus = useSelector((state) => state.walletDetails);
    const { walletDetails } = walletStatus;
    const dispatch = useDispatch();
    const toggleFalse = () => {
        dispatch(toggleTip(userInfo.acctNumber, falseStatus));
    }

    const toggleTrue = () => {
        dispatch(toggleTip(userInfo.acctNumber, trueStatus));
    }
    return (
        <div>
            <div>
                {
                    walletDetails.tipStatus === true && (
                        <div className="d-flex justify-content-between border border-secondary p-2 rounded">
                            <div style={{color:"#ab2656", fontWeight:"bold"}}>
                                    Do you want Tip for this Transaction?
                            </div>
                            
                            <label className="switch">
                                <div>
                                    <input type="checkbox" onClick={toggleFalse}/>
                                    <span className="slider round"></span>
                                </div> 
                            </label>
                        </div>
                    
                    )
                }
                {
                    walletDetails.tipStatus === false && (
                        <div  className="d-flex justify-content-between border border-secondary p-2 rounded">
                            <div style={{color:"#ab2656", fontWeight:"bold"}}>
                            Do you want tip for this transaction?
                            </div>
                            <label className="switch">
                                <div>
                                    <input type="checkbox" onClick={toggleTrue}/>
                                    <span className="slider2 round"></span>
                                </div> 
                            </label>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
