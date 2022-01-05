import React from 'react';
import "./dashboard.css";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { transfer, userInfo } from '../Redux/Action/Action';
import Modal from '../Layout/Modal';
import logo from '../../assets/logo1.png';


const Transfer = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const [form, setForm] = useState({
        toAccount: "",
        amount: ""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        // if(form.toAmount) {
        //     setEmailValidity(false);
        // }
        // if(form.amount) {
        //     setPasswordValidity(false);
        // }
        return setForm({...form, [e.target.name] : e.target.value});

    };
    const banks = [
        "Access Bank",
        "First Bank Nigeria",
        "Stanbic Bank",
        "United Bank of Africa",
        "Wema Bank",
    ]
    const transferMoney = (e) => {
        e.preventDefault();
        // if (!form.email) {
        //     setEmailValidity(true);
        // } else if (!form.password) {
        //     setPasswordValidity(true);
        // } else {
            // setIsLoading(true)
            dispatch(transfer(userInfo.acctNumber, form.toAccount, form.amount))
            navigate("/dashboard")
            
        // }
    }
    return (
        <>
            <div className="send-money-bg ">
                <div className="d-flex justify-content-center">
                    <div>
                        <img className="mx-5 mt-3" style={{width:"10rem", height:"3rem"}} src={logo} alt="logo" />
                        <div className="pt-4">
                            <div>
                                <div className="text-white">
                                    <p className="mx-5 h5">SEND MONEY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
                <div className="container">
                    <div className="w-75 m-auto ">
                        <form onSubmit={transferMoney}>
                            <div className=" p-3 rounded mt-3">
                                <div>
                                    <p className="m-0 text-center"  style={{color:"#ab2656", fontWeight:"bold"}}>Select Bank</p>
                                    <select name="bank" id="bank" className="text-secondary w-100 p-2" onChange={handleChange}>
                                        <option value="select">Please select an option</option>
                                        {banks.map((bank, index)=> (
                                            <option key={index} value="bank">{bank}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mt-2">
                                <p className="m-0 text-center"  style={{color:"#ab2656", fontWeight:"bold"}}>Account Number</p>
                                    <input onChange={handleChange} type="text" name="toAccount" id="toAccount" placeholder="Enter Account Number" className="p-2 w-100 rounded " style={{border:"1px solid grey"}}/>
                                    {/* <p className="text-black m-0" style={{fontSize:".8rem", color:"#ab2656"}}>Account Name: Horace Akpan</p> */}
                                </div>
                                <div className="mt-2">
                                    <p className="m-0 text-center"  style={{color:"#ab2656", fontWeight:"bold"}}>Amount</p>
                                    <input onChange={handleChange} type="text" name="amount" id="amount" placeholder="Enter Amount" className="p-2 w-100 rounded" style={{border:"1px solid grey"}}/>
                                </div>
                                <div className="mt-2">
                                    <p className="m-0 text-center"  style={{color:"#ab2656", fontWeight:"bold"}}>Description</p>
                                    <input onChange={handleChange} type="text" name="desc" id="desc" placeholder="Description" className="p-2 w-100 rounded" style={{border:"1px solid grey"}}/>
                                </div>
                                <div className="mt-2">
                                    <p className="m-0 text-center"  style={{color:"#ab2656", fontWeight:"bold"}}>Pin</p>
                                    <input onChange={handleChange} type="password" name="pin" id="pin" placeholder="Pin" className="p-2 w-100 rounded" style={{border:"1px solid grey"}}/>
                                </div>
                                <div className="text-center">
                                    <button className="p-2 mt-3 w-50 rounded text-white border-0" style={{border:"1px solid grey", background:"#47133B"}}>Proceed</button>
                                </div>

                            </div>
                        </form>
                    </div>
                    
                </div>
                
            </div>
            <div>
                <Modal/>
            </div>
        </>
    )
}

export default Transfer;
