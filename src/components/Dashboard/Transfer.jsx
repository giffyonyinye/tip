import React from 'react';
import "./dashboard.css";
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transfer } from '../Redux/Action/transferAction';
import Modal from '../Layout/Modal';
import { getAccountName } from '../Redux/Action/getAcctNameAction';
import logo from '../../assets/logo1.png';


const Transfer = () => {
    const [showModal, setShowModal] = useState(false);
    const [bankValidity, setbankValidity] = useState(false);
    const [acctNumberValidity, setAcctNumberValidity] = useState(false);
    const [amountValidity, setAmountValidity] = useState(false);
    const [descValidity, setDescValidity] = useState(false);
    const [pinValidity, setPinValidity] = useState(false);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const transferred = useSelector((state) => state.transfer);
    const { transferInfo,loading, error } = transferred;
    const getAcctName = useSelector((state) => state.accountName);
    const { accountName } = getAcctName;



    const [form, setForm] = useState({
        toAccount: "",
        amount: "",
        pin: "",
        bank: "",
        description : ""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        return setForm({...form, [e.target.name] : e.target.value});
    };
    const banks = [
        "Access Bank",
        "First Bank Nigeria",
        "Stanbic Bank",
        "United Bank of Africa",
        "Wema Bank",
    ]

    const getName = () => {
        dispatch(getAccountName(form.toAccount))
    }
    const goToPreviousPath = () => {
        navigate(-1)
    }
    const transferMoney = (e) => {
        e.preventDefault();
        if (!form.bank) {
            setbankValidity(true)
        } else if(!form.toAccount) {
            setAmountValidity(true)
        } else if (!form.amount) {
            setAmountValidity(true)
        } else if (!form.pin) {
            setPinValidity(true)
        } else {
            dispatch(transfer(userInfo.acctNumber, form.toAccount, form.amount, form.pin));
            
                setShowModal(true)
            
        } 
    }

    return (
        <>
            <div className="send-money-bg ">
                <div className="d-flex justify-content-end">
                    <div>
                        <img className="mx-5 mt-3" style={{width:"10rem", height:"3rem"}} src={logo} alt="logo" />
                    </div>
                </div>
                   
                <div className="container">
                    <div className="w-50 ">
                    <div className="pt-1">
                            <div className="d-flex" style={{cursor:"pointer"}}>
                                <div onClick={goToPreviousPath}>
                                    <i className="fa fa-arrow-left text-white p-2 rounded-circle " style={{background:"#ab2656"}}></i>
                                </div>
                                <div className="text-black">
                                    <p className="mx-5 h5">SEND MONEY</p>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={transferMoney}>
                            <div className=" p-3 rounded mt-3">
                                <div>
                                    <p className="m-0 "  style={{color:"#ab2656", fontWeight:"bold"}}>Select Bank</p>
                                    <select name="bank" id="bank" className="text-secondary w-100 p-2" onChange={handleChange}>
                                        <option value="select">Please select an option</option>
                                        {banks.map((bank, index)=> (
                                            <option key={index} value="bank">{bank}</option>
                                        ))}
                                    </select>
                                    {
                                        bankValidity &&
                                        <p className="text-danger" style={{fontSize:".8rem"}}>please select destination bank</p>
                                    }
                                </div>
                                <div className="mt-2">
                                <p className="m-0 "  style={{color:"#ab2656", fontWeight:"bold"}}>Account Number</p>
                                    <input onChange={handleChange} type="text" name="toAccount" id="toAccount" placeholder="Enter Account Number" className="p-2 w-100 rounded " style={{border:"1px solid grey"}}/>
                                    <p className="text-black m-0" style={{fontSize:"1rem", color:"#ab2656"}}>{accountName.acctName}</p>
                                    {
                                        acctNumberValidity &&
                                        <p className="text-danger" style={{fontSize:".8rem"}}>please enter account number</p>
                                    }
                                </div>
                                <div className="mt-2">
                                    <p className="m-0 "  style={{color:"#ab2656", fontWeight:"bold"}}>Amount</p>
                                    <input onChange={handleChange} onClick={getName} type="text" name="amount" id="amount" placeholder="Enter Amount" className="p-2 w-100 rounded" style={{border:"1px solid grey"}}/>
                                    {
                                        amountValidity &&
                                        <p className="text-danger" style={{fontSize:".8rem"}}>please enter amount</p>
                                    }
                                </div>
                                <div className="mt-2">
                                    <p className="m-0 "  style={{color:"#ab2656", fontWeight:"bold"}}>Description</p>
                                    <input onChange={handleChange} type="text" name="desc" id="desc" placeholder="Description" className="p-2 w-100 rounded" style={{border:"1px solid grey"}}/>
                                    {
                                        descValidity &&
                                        <p className="text-danger" style={{fontSize:".8rem"}}>this field cannot be empty</p>
                                    }
                                </div>
                                <div className="mt-2">
                                    <p className="m-0"  style={{color:"#ab2656", fontWeight:"bold"}}>Pin</p>
                                    <input onChange={handleChange} type="password" name="pin" id="pin" placeholder="Pin" className="p-2 w-100 rounded" style={{border:"1px solid grey"}}/>
                                    {
                                        pinValidity &&
                                        <p className="text-danger" style={{fontSize:".8rem"}}>enter Pin</p>
                                    }
                                </div>
                                <div>
                                    <p className="text-danger">{error}</p>
                                </div>
                                <div>
                                    <button  className="p-2 mt-3 w-50 rounded text-white border-0" style={{border:"1px solid grey", background:"#ab2656"}}>
                                        Proceed
                                        {loading && <i className="fa fa-spin fa-spinner"></i>}
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div>
                        {
                            showModal &&
                            <Modal 
                            showModal = {() => setShowModal(true)} 
                            onClose = {() => setShowModal(false)} 
                            transactionAmount = {transferInfo.transactionAmount}
                            tipPercent = {transferInfo.tipPercent}
                            date = {transferInfo.date}
                        />
                        }
                        
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default Transfer;
