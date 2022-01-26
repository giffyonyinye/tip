import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TipModal from '../Layout/TipModal';
import { tip } from '../Redux/Action/walletActions';
import { getUser } from '../Redux/Action/Action';
import { tipWalletDetails } from '../Redux/Action/walletActions';
export default function CreateWallet() {
    const walletStatus = useSelector((state) => state.walletDetails);
    const { error } = walletStatus;
    const [showModal, setShowModal] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [trueStatus, setTrueStatus] = useState(true);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const setWallet = useSelector((state) => state.setWallet);
    const { loading } =  setWallet
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        tipPercent: "",
        whenTipped: ""
    });
    useEffect(() => {
        dispatch(getUser(userInfo.acctNumber));
    }, [])
    useEffect(() => {
        dispatch(tipWalletDetails(userInfo.acctNumber));
    }, []);
    
    const showWalletOptions = () => {
        setShowOptions(true);
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
    const handleChange = (e) => {
        console.log(setForm({...form, [e.target.name] : e.target.value}));
        return setForm({...form, [e.target.name] : e.target.value});

    };
    const newWallet = () => {
        dispatch(tip(userInfo.acctNumber, trueStatus, form.tipPercent));
        setShowModal(true);
    }
    return (
        <div className="container">
            <div className="col-md-6">
                <div>
                    
                    <div>
                        <div>
                            <div className="text-white balance-bg  text-white mt-4 p-3 rounded p-4">
                                You don't have a Tip Wallet. Please activate.
                            </div>
                        </div>

                        <div className="bg-white" >
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
                                            <option value="5" >Tip Percentage</option>
                                            {tipPercentage.map((p,index) => (
                                                <option key={index} value={p}>{p}</option>
                                            ))}
                                        </select>
                                    </div>
                
                                    <div>
                                        <select name="whenTipped" id="when-tipped" className="p-2 mt-3 w-100 rounded" style={{color:"#ab2656", fontWeight:"bold"}} onChange={handleChange}>
                                            <option value="when-tipped" >When Should I be tipped</option>
                                            {whenTipped.map((tip,index) => (
                                                <option key={index} value={tip}>{tip}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <button onClick={newWallet} className="p-2 mt-3 w-100 rounded text-white" style={{border:"1px solid grey", background:"#811a52"}}>
                                            Proceed {loading && <i className="fa fa-spin fa-spinner"></i>}
                                            </button>
                                    </div>
                                </div>
                                }
                            </div>

                            <div>
                                {
                                    showModal &&
                                    <TipModal 
                                    showModal = {() => setShowModal(true)} 
                                    onClose = {() => setShowModal(false)} 
                                    tipPercent = {form.tipPercent}
                                />
                                }
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}
