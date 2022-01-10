import React from 'react';
import "./dashboard.css";
import { useSelector, useDispatch } from 'react-redux';
import { tip, tipWalletDetails, toggleTip } from '../Redux/Action/walletActions';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import TipHistory from './TipHistory';

const TipWallet = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const walletStatus = useSelector((state) => state.walletDetails);
    const { walletDetails, error } = walletStatus;

    const [form, setForm] = useState({
        tipPercent: 0,
        whenTipped: ""
    });
    const [falseStatus, setFalseStatus] = useState(false);
    const [trueStatus, setTrueStatus] = useState(true);
    const [showOptions, setShowOptions] = useState(false);
    const [viewWalletHistory, setViewWalletHistory] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(tipWalletDetails(userInfo.acctNumber));
    }, []);
   
    const handleChange = (e) => {
        console.log(setForm({...form, [e.target.name] : e.target.value}));
        console.log(form)
        return setForm({...form, [e.target.name] : e.target.value});

    };
    const tipped = () => {
        dispatch(tip(walletDetails.acctNumber, walletDetails.tipStatus, form.tipPercent))
    }
    const newWallet = () => {
        dispatch(tip(userInfo.acctNumber, trueStatus, form.tipPercent));
        
    }
    const toggleFalse = () => {
        dispatch(toggleTip(userInfo.acctNumber, falseStatus));
    }

    const toggleTrue = () => {
        dispatch(toggleTip(userInfo.acctNumber, trueStatus));
    }

    const showWalletOptions = () => {
        setShowOptions(true);
    }

    const tipHistory = () => {
        setViewWalletHistory(!viewWalletHistory)
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
                
                <div className="container d-flex justify-content-between">
                    
                    <div className="w-50">
                        {
                            !error && (
                                <div>
                                    {userInfo && 
                                        <div>
                                            <div className="balance-bg w-75 text-white mt-4 p-3 rounded">
                                                <div className="text-center">
                                                    <p className="m-0">Tip Balance</p>
                                                    <p className="h1">₦ {walletDetails.walletBalance}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        {walletDetails.tipStatus === true &&
                                                        <div>
                                                            <p>Status: Enabled</p>
                                                        </div>

                                                        }
                                                    </div>
                                                    <div>
                                                        {walletDetails.tipStatus === false &&
                                                        <div>
                                                            <p>Status: Disabled</p>
                                                        </div>

                                                        }
                                                    </div>
                                                    <div>
                                                        <button onClick={tipHistory} className="text-white" style={{border:"1px solid grey", background:"transparent", fontSize:".8rem"}}>Tip History</button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="m-0">Tip Percent</p>
                                                    <p>{walletDetails.tipPercent}%</p>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            ) 
                        }

                        {
                            error && 
                            <div className="text-white balance-bg w-75 text-white mt-4 p-3 rounded p-4">You dont have a Tip Wallet please activate</div>
                        }
                          

                        <div className="bg-white w-75 p-3 rounded mt-2">
                            <div>
                                <div>
                                    {
                                        error && 
                                        <div >
                                            <div >
                                                <div className="d-flex justify-content-between border border-secondary p-2 rounded">
                                                    <div style={{color:"#ab2656", fontWeight:"bold"}}>
                                                        Tip Status
                                                    </div>
                                                    <label className="switch" onClick={showWalletOptions}>
                                                        <div>
                                                            <input type="checkbox"/>
                                                            <span className="slider2 round"></span>
                                                        </div> 
                                                    </label>
                                                </div>
                                                {showOptions &&
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
                                                        <button onClick={newWallet} className="p-2 mt-3 w-100 rounded text-white" style={{border:"1px solid grey", background:"#AB2656"}}>Proceed</button>
                                                    </div>
                                                </div>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div>
                                { !error &&
                                    <div>
                                        {
                                        walletDetails.tipStatus === true && (
                                            <div  className="d-flex justify-content-between border border-secondary rounded p-2">
                                                <div style={{color:"#ab2656", fontWeight:"bold"}}>
                                                        Tip Status
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
                                            <div  className="d-flex justify-content-between border border-secondary ">
                                                <div style={{color:"#ab2656", fontWeight:"bold"}}>
                                                Tip Status
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
                                            <button onClick={ tipped} className="p-2 mt-3 w-100 rounded text-white" style={{border:"1px solid grey", background:"#AB2656"}}>Proceed</button>
                                        </div>
                                    </div>
                                }
                            </div>

                            
                        </div>
                    </div>

                    <div className="w-50">
                        {
                            viewWalletHistory &&
                            <TipHistory/>
                         }
                    </div>
                    
                </div>

                
            </div>  
        </>
    )
}

export default TipWallet;
