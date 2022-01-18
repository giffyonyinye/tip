import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tip, tipWalletDetails, toggleTip } from '../Redux/Action/walletActions';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import TipHistory from './TipHistory';
import UserModal from '../Layout/UserModal';

export default function UserWallet() {
    const [showModal, setShowModal] = useState(false);
    const [percentValidity, setPercentValidity] = useState(false);
    const [whenTippedValidity, setWhenTippedValidity] = useState(false);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const walletStatus = useSelector((state) => state.walletDetails);
    const { walletDetails, loading, error } = walletStatus;
    // useEffect(() => {
    //     if(!userInfo) {
    //        navigate("/")
    //     }
    // }, [userInfo])

  
    useEffect(() => {
        dispatch(tipWalletDetails(userInfo.acctNumber));
    }, []);
   

    const [form, setForm] = useState({
        tipPercent: "",
        whenTipped: ""
    });
    const [falseStatus, setFalseStatus] = useState(false);
    const [trueStatus, setTrueStatus] = useState(true);
    const [showOptions, setShowOptions] = useState(false);
    const [viewWalletHistory, setViewWalletHistory] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
   
    const handleChange = (e) => {
        console.log(setForm({...form, [e.target.name] : e.target.value}));
        console.log(form)
        return setForm({...form, [e.target.name] : e.target.value});

    };
    const tipped = () => {
        if(!form.tipPercent) {
            setPercentValidity(true);
        } else if(!form.whenTipped) {
            setWhenTippedValidity(true);
        } else {
            dispatch(tip(walletDetails.acctNumber, walletDetails.tipStatus, form.tipPercent));
            setShowModal(true);
        }
        
    }
    
    const toggleFalse = () => {
        dispatch(toggleTip(userInfo.acctNumber, falseStatus));
        setShowModal(true);
    }

    const toggleTrue = () => {
        dispatch(toggleTip(userInfo.acctNumber, trueStatus));
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
        "Pay Bills",
        "Mobile TopUp"
    ]
    return (
        <div>
        <div className="container row">
            <div className="col-md-6">
                { !error && 
                    <div>
                        <div>
                        {userInfo && 
                            <div>
                                <div className="balance-bg col-md-9 text-white mt-4 p-3 rounded">
                                    <div className="text-center">
                                        <p className="m-0">Tip Balance</p>
                                        <p className="h1"><span style={{fontSize:"1.5rem"}}>₦</span> {walletDetails.walletBalance}</p>
                                    </div>
                                    
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="m-0" style={{fontSize:".8rem"}}>Tip Percent</p>
                                            <p className="m-0"style={{fontSize:"1.2rem"}} >{walletDetails.tipPercent}%</p>
                                        </div>
                                        <div>
                                            <button onClick={tipHistory} className="text-white ps-4 px-4" style={{border:"1px solid grey", background:"transparent", fontSize:".8rem"}}>Tip History</button>
                                            <div className="d-flex justify-content-between mt-2">
                                                <div>
                                                    {walletDetails.tipStatus === true &&
                                                    <div>
                                                        <p className="m-0">Status: Enabled</p>
                                                    </div>
                                                    }
                                                    <div>
                                                    {walletDetails.tipStatus === false &&
                                                    <div>
                                                        <p className="m-0">Status: Disabled</p>
                                                    </div>

                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        }
                    </div>
                    
                    <div>
                        
                </div>

                <div className="bg-white col-md-9 p-3 rounded mt-2">
                    <div>
                            <div>
                                {
                                walletDetails.tipStatus === true && (
                                    <div className="d-flex justify-content-between border border-secondary p-2 rounded">
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
                                    <div  className="d-flex justify-content-between border border-secondary p-2 rounded">
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
                                {walletDetails.tipStatus === true &&
                                    <div>
                                        <div>
                                            <select name="tipPercent" id="tip-percent" className="p-2 mt-3 w-100 rounded" style={{color:"#ab2656", fontWeight:"bold"}} onChange={handleChange} >
                                                <option  value="5" >Tip Percentage</option>
                                                {tipPercentage.map((p, index) => (
                                                    <option key={index} value={p}>{p}</option>
                                                ))}
                                            </select>
                                            {percentValidity &&
                                             <p className="text-danger" style={{fontSize:".7rem"}}>Please select an option.</p>
                                            }
                                            
                                        </div>
                    
                                        <div>
                                            <select name="whenTipped" id="when-tipped" className="p-2 mt-3 w-100 rounded" style={{color:"#ab2656", fontWeight:"bold"}} onChange={handleChange}>
                                                <option  value="when-tipped" >When Should I be tipped</option>
                                                {whenTipped.map((tip, index) => (
                                                    <option key={index} value={tip}>{tip}</option>
                                                ))}
                                            </select>
                                            {whenTippedValidity &&
                                             <p className="text-danger" style={{fontSize:".7rem"}}>Please select an option.</p>
                                            }
                                           
                                        </div>
                                        <div>
                                            <button onClick={tipped} className="p-2 mt-3 w-100 rounded text-white" style={{border:"1px solid grey", background:"#811a52"}}>
                                                Proceed
                                                {loading && <i className="fa fa-spinner fa-spin"></i>}
                                            </button>
                                        </div>
                                    </div>
                                }    
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                }
            
            </div>      
            <div className="col-md-6">
                {
                    viewWalletHistory &&
                    <TipHistory/>
                    }
            </div>
        </div>

        <div>
            {
                showModal &&
                <UserModal 
                showModal = {() => setShowModal(true)} 
                onClose = {() => setShowModal(false)} 
                walletDetails={walletDetails.tipstatus}
                trueStatus={trueStatus}
                falseStatus={falseStatus}
                />
            }
        </div>
        </div>
    )
}
