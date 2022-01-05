import React from 'react';
import "./dashboard.css";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { logInAction, userInfo } from '../Redux/Action/Action';
import Modal from '../Layout/Modal';


const Transfer = () => {
    const contact = useSelector(state => state.LoginReducer.userInfo[0]);
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
        console.log(contact.acctNumber)
        // if (!form.email) {
        //     setEmailValidity(true);
        // } else if (!form.password) {
        //     setPasswordValidity(true);
        // } else {
        //     setIsLoading(true)
            axios({
                method: "POST",
                url: `https://localhost:5001/api/Transactions/SendMoney?FromAccount=${contact.acctNumber}`,
                headers: {
                    'Content-type': 'application/json',
                },
                data: {
                    toAccount: form.toAccount,
                    amount: form.amount
                }
            })
            .then((res) => {
                // let userData = []
                // userData = res.data
                // props.userInfo(userData);
                // setIsLoading(false);
                console.log(res)
                let details = res.data.
                navigate("/dashboard");
                dispatch(userInfo(contact));
            })
            .catch((err) => {
                
                    // setIsUserAuth(true);
                    // setIsLoading(false);
                    console.log("error")
                
            })
            
        // }
    }
    return (
        <>
            <div className="dashboard ">
                <div className="pt-4">
                    <div className=" p-1" style={{background:"#f1d3db"}}>
                        <div className="d-flex" style={{color:"#AB2656"}}>
                            <i className="fa fa-arrow-left mt-2  ms-4"></i>
                            <p className="mx-5 h5">Send Money</p>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="w-50">
                        <form onSubmit={transferMoney}>
                            <div className="bg-white w-75 p-3 rounded mt-5">
                                <div>
                                    <select name="bank" id="bank" className="w-100 p-2" onChange={handleChange}>
                                        {banks.map((bank, index)=> (
                                            <option key={index} value="bank">{bank}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <input onChange={handleChange} type="text" name="toAccount" id="toAccount" placeholder="Enter Account Number" className="p-2 mt-3 w-100 rounded " style={{border:"1px solid grey"}}/>
                                    <p className="text-black m-0">Account Name: Horace Akpan</p>
                                </div>
                                <div>
                                    <input onChange={handleChange} type="text" name="amount" id="amount" placeholder="Enter Amount" className="p-2 mt-3 w-100 rounded" style={{border:"1px solid grey"}}/>
                                </div>
                                <div>
                                    <input onChange={handleChange} type="text" name="desc" id="desc" placeholder="Description" className="p-2 mt-3 w-100 rounded" style={{border:"1px solid grey"}}/>
                                </div>
                                <div>
                                    <input onChange={handleChange} type="password" name="pin" id="pin" placeholder="Pin" className="p-2 mt-3 w-100 rounded" style={{border:"1px solid grey"}}/>
                                </div>
                                <div>
                                    <button className="p-2 mt-3 w-100 rounded text-white" style={{border:"1px solid grey", background:"#AB2656"}}>Proceed</button>
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
