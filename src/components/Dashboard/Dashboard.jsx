import React from 'react';
import Header from '../Layout/Header';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import "./dashboard.css"
import UserBalance from './UserBalance';
import { useEffect, useState } from 'react';
import { getUser } from '../Redux/Action/Action';
import Datalogo from '../../assets/Datalogo.png';
import historyLogo from '../../assets/history-logo.png';
import sendMoneyLogo from '../../assets/send-money-logo.png';
import tipLogo from '../../assets/Tip-logo.png';
import payBills from '../../assets/PayBills.png';
import DashboardModal from './DashboardModal';

const Dashboard = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if(!userInfo) {
           navigate("/")
        }
    }, [userInfo]);
    
    
    useEffect(() => {
        dispatch(getUser(userInfo.acctNumber));
       
    }, []);
    
    return (
        <div className="dashboard">
            <Header/>

            <div className="container mt-4">
                <div >
                    <div className=" mb-5" style={{width:"40%"}}>
                        <div>
                            <UserBalance/>
                        </div>
                        <div className=" mt-3 pb-5" style={{width:"80%", margin:"auto"}}>
                            <div className="d-flex justify-content-between text-center">
                                <Link to="/transfer" className=" text-black text-decoration-none bg-white p-3 rounded" style={{height:"6rem", width:"45%", boxShadow:"6px 6px 6px grey"}}>
                                    <img className="mt-1" src={sendMoneyLogo} alt="logo" style={{width:"2rem", height:"2rem"}}/>
                                    <p className="">Send Money</p>
                                </Link>
                                <Link to="/tip-myself" className="p-3 text-black  bg-white rounded text-decoration-none" style={{height:"6rem", width:"45%", boxShadow:"6px 6px 6px grey"}}>
                                    <img className="mt-1" src={tipLogo} alt="logo" style={{width:"2rem", height:"2rem"}}/>
                                    <p>Tip Myself</p>
                                </Link>
                            </div>
                            <div className="d-flex justify-content-between mt-3 text-center">
                                <div onClick={() => setShowModal(true)} className=" bg-white rounded p-3" style={{height:"6rem", width:"45%", boxShadow:"6px 6px 6px grey"}}>
                                    <img className="mt-1" src={payBills} alt="logo" style={{width:"2rem", height:"2rem"}}/>
                                    <p>Pay Bills</p>
                                </div>
                                <Link to="/transaction-history" className=" bg-white pt-3 rounded text-decoration-none text-black " style={{height:"6rem", width:"45%", boxShadow:"6px 6px 6px grey"}}>
                                <img className="mt-1" src={historyLogo} alt="logo" style={{width:"2rem", height:"2rem"}}/>
                                    <p>Transaction History</p>
                                </Link>
                            </div>

                            {/* <div onClick={() => setShowModal(true)} className=" bg-white rounded mt-3 text-center d-flex justify-content-center" style={{boxShadow:"6px 6px 6px grey"}} >
                                <p className="m-0 mx-3">Data &<br /> Mobile Topup</p>
                                <img className="mt-1" src={Datalogo} alt="logo" style={{width:"2rem", height:"2rem"}}/>
                            </div> */}
                        </div>
                    </div>     
                </div>   
            </div>

            <div>
                {
                    showModal &&
                    <DashboardModal 
                    showModal = {() => setShowModal(true)} 
                    onClose = {() => setShowModal(false)} 
                />
                }
                
            </div>
        </div>
    )
}

export default Dashboard;


