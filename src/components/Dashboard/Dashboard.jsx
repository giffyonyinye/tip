import React from 'react';
import Header from '../Layout/Header';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import "./dashboard.css"
import UserBalance from './UserBalance';
import { useEffect } from 'react';
import { getUser } from '../Redux/Action/Action';

const Dashboard = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // useEffect(() => {
    //     if(!userInfo) {
    //        navigate("/")
    //     }
    // }, [userInfo])
    useEffect(() => {
        dispatch(getUser(userInfo.acctNumber));
    }, [])
    return (
        <div className="dashboard">
            <Header/>

            <div className="container">
                <div >
                    <div className=" mb-5" style={{width:"40%"}}>
                        <div>
                            <UserBalance/>
                        </div>
                        <div className=" mt-3" style={{width:"80%", margin:"auto"}}>
                            <div className="d-flex justify-content-between text-center">
                                <Link to="/transfer" className=" text-black text-decoration-none bg-white p-3 rounded" style={{height:"6rem", width:"45%"}}>
                                    <i className="fa fa-money fa-2x" style={{color:"#AB2656"}}></i>
                                    <p className="">Send Money</p>
                                </Link>
                                <Link to="/tip-myself" className=" text-black bg-white p-3 rounded text-decoration-none" style={{height:"6rem", width:"45%"}}>
                                    <i className="fa fa-hand-grab-o fa-2x" style={{color:"#AB2656"}}></i>
                                    <p>Tip Myself</p>
                                </Link>
                            </div>
                            <div className="d-flex justify-content-between mt-3 text-center">
                                <div className=" bg-white rounded" style={{height:"6rem", width:"45%"}}>
                                    <i className="fa fa-money fa-2x p-3" style={{color:"#AB2656"}}></i>
                                    <p>Pay Bills</p>
                                </div>
                                <Link to="/transaction-history" className=" bg-white p-3 rounded" style={{height:"6rem", width:"45%"}}>
                                    <i className="fa fa-bookmark fa-2x" style={{color:"#AB2656"}}></i>
                                    <p>Transaction History</p>
                                </Link>
                            </div>

                            <div className=" bg-white rounded mt-2 text-center" >
                                <i className="fa fa-bookmark" style={{color:"#AB2656"}}></i>
                                <p className="m-0">Data & Mobile Topup</p>
                            </div>
                        </div>
                    </div>     
                </div>   
            </div>
        </div>
    )
}

export default Dashboard;


