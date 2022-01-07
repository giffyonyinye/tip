import React from 'react';
import "./dashboard.css";
import { useSelector, useDispatch } from 'react-redux';
import { tip, toggleTip } from '../Redux/Action/Action';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const TipWallet = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const [form, setForm] = useState({
        tipPercent: 0,
        whenTipped: ""
    });
    const [status, setStatus] = useState(Boolean);
    const [statusDisplay, setStatusDisplay] = useState("");
    const [getStatus, setGetStatus] = useState(Boolean);
    const [tipBalance, setTipBalance] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // state = {
    //     status: false,
    //     switchButton: "Off"
    // }

   const handleClick = () => {
        setStatus(!status ? true : false)
        if(status === true) {
            setGetStatus(true)
            setStatusDisplay("Deactivated")
        } else {
            setStatusDisplay("Activated")
            setGetStatus(false)

        }
        dispatch(toggleTip(userInfo.acctNumber, getStatus))
        console.log(getStatus)
    }
    const handleChange = (e) => {
        // if(form.toAmount) {
        //     setEmailValidity(false);
        // }
        // if(form.amount) {
        //     setPasswordValidity(false);
        // }   
        console.log(setForm({...form, [e.target.name] : e.target.value}));
        console.log(form)
        return setForm({...form, [e.target.name] : e.target.value});

    };
    const tipped = () => {
        // e.preventDefault();
        // if (!form.email) {
        //     setEmailValidity(true);
        // } else if (!form.password) {
        //     setPasswordValidity(true);
        // } else {
            // setIsLoading(true)
            console.log(getStatus)

            dispatch(tip(userInfo.acctNumber, status, form.tipPercent))
            // navigate("/dashboard")
            console.log(getStatus)
            console.log(form)
            
        // }
    }

    const tipPercentage = [
        parseInt(5),
        parseInt(10),
        parseInt(15),
        parseInt(20)
    ]
    const whenTipped = [
        "On every debit",
        "When I send money",
        "When I recharge",
        "When I buy data",
        "When I pay bills (electricity, TV subscription, etc.)"
    ]
    return (
        <>
          <div className="dashboard ">
                <div className="pt-4">
                    <div className=" p-1" style={{background:"#f1d3db"}}>
                        <div className="d-flex" style={{color:"#AB2656"}}>
                            <i className="fa fa-arrow-left mt-2  ms-4"></i>
                            <p className="mx-5 h5">Tip Myself</p>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="w-50">
                        <div className="balance-bg w-75 text-white mt-4 p-3 rounded">
                            <div className="text-center">
                                <p className="m-0">Tip Balance</p>
                                <p className="h1">₦ {tipBalance}</p>
                            </div>
                            <div style={{textAlign:"right"}}>
                                <button className="text-white w-25" style={{border:"1px solid grey", background:"transparent", fontSize:".8rem"}}>Tip History</button>
                            </div>
                        </div>  

                        <div className="bg-white w-75 p-3 rounded mt-2">
                            <div className="p-1 mt-3 w-100 rounded border border-dark">
                                <div className="d-flex justify-content-between ">
                                    <div style={{color:"#ab2656", fontWeight:"bold"}}>
                                        Tip Status
                                    </div>
                                    <label className="switch">
                                        <div>
                                            <input onChange={handleClick} value={getStatus} type="checkbox"/>
                                            <span className="slider round"></span>
                                        </div> 
                                    </label>
                                </div>
                                <div style={{textAlign:"right"}}>status: {statusDisplay}</div>
                            </div>
                            
                            <div>
                                {status === true && (
                                    <div>
                                        <div>
                                            <select name="tipPercent" id="tip-percent" className="p-2 mt-3 w-100 rounded" style={{color:"#ab2656", fontWeight:"bold"}} onChange={handleChange} >
                                                <option value="tip-percentage" >Tip Percentage</option>
                                                {tipPercentage.map(p => (
                                                    <option value={p}>{p}</option>
                                                ))}
                                            </select>
                                        </div>
                            
                                        <div>
                                            <select name="whenTipped" id="when-tipped" className="p-2 mt-3 w-100 rounded" style={{color:"#ab2656", fontWeight:"bold"}} onChange={handleChange}>
                                                <option value="when-tipped" >When Should I be tipped</option>
                                                {whenTipped.map(tip => (
                                                    <option value={tip}>{tip}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <button onClick={tipped} className="p-2 mt-3 w-100 rounded text-white" style={{border:"1px solid grey", background:"#AB2656"}}>Proceed</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            

                        </div>
                    </div>
                    
                </div>
                
            </div>  
        </>
    )
}

export default TipWallet;
