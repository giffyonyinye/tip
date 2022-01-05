import React from 'react';
import "./dashboard.css";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const TipWallet = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const [form, setForm] = useState({
        tipStatus: "",
        tipPercentage: ""
    });
    const [status, setStatus] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // state = {
    //     status: false,
    //     switchButton: "Off"
    // }

   const handleClick = () => {
        setStatus({
            status: !status,
            switchButton: !status ? 'ON' : 'OFF'
        })
    }
    const handleChange = (e) => {
        // if(form.toAmount) {
        //     setEmailValidity(false);
        // }
        // if(form.amount) {
        //     setPasswordValidity(false);
        // }
        setStatus({
            status: !status,
            switchButton: !status ? true : false
        })
        console.log(setForm({...form, [e.target.name] : e.target.value}));
        return setForm({...form, [e.target.name] : e.target.value});

    };
    const tip = (e) => {
        e.preventDefault();
        // if (!form.email) {
        //     setEmailValidity(true);
        // } else if (!form.password) {
        //     setPasswordValidity(true);
        // } else {
            // setIsLoading(true)
            dispatch(tip(userInfo.acctNumber, form.tipStatus, form.tipPercentage))
            navigate("/dashboard")
            
        // }
    }

    const tipPercentage = [
        "5",
        "10",
        "15",
        "20"
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
                                <p className="h1">₦ 20,000</p>
                            </div>
                            <div style={{textAlign:"right"}}>
                                <button className="text-white w-25" style={{border:"1px solid grey", background:"transparent", fontSize:".8rem"}}>Tip History</button>
                            </div>
                        </div>  

                        <div className="bg-white w-75 p-3 rounded mt-2">
                            <div className="d-flex justify-content-between p-1 mt-3 w-100 rounded border border-dark">
                                <div style={{color:"#ab2656", fontWeight:"bold"}}>
                                    Tip Status
                                </div>
                                <label class="switch">
                                    
                                    <input onChange={handleChange} name={status} type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            
                            <div>
                                <select name="tip-percent" id="tip-percent" className="p-2 mt-3 w-100 rounded" style={{color:"#ab2656", fontWeight:"bold"}}>
                                    <option value="tip-percentage" >Tip Percentage</option>
                                    {tipPercentage.map(p => (
                                        <option value={p}>{p}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div>
                                <select name="when-tipped" id="when-tipped" className="p-2 mt-3 w-100 rounded" style={{color:"#ab2656", fontWeight:"bold"}}>
                                    <option value="when-tipped" >When Should I be tipped</option>
                                    {whenTipped.map(tip => (
                                        <option value={tip}>{tip}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <button onClick={tip} className="p-2 mt-3 w-100 rounded text-white" style={{border:"1px solid grey", background:"#AB2656"}}>Proceed</button>
                            </div>

                        </div>
                    </div>
                    
                </div>
                
            </div>  
        </>
    )
}

export default TipWallet;
