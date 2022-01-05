import React from 'react';
import Header from '../Layout/Header';
import {Link} from 'react-router-dom';
import "./dashboard.css"
import UserBalance from './UserBalance';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header/>

            <div className="container">
                <div className="row">
                    <div className=" col-md-6">
                        <div>
                            <UserBalance/>
                        </div>
                        <div className="text-center">
                            <div className="row m-auto mt-5">
                                <Link to="/transfer" className="col-md-5 text-black text-decoration-none bg-white p-4 rounded">
                                    <i className="fa fa-money fa-2x" style={{color:"#AB2656"}}></i>
                                    <p className="">Send Money</p>
                                </Link>
                                <Link to="/tip-myself" className="col-md-5 text-black  mx-4 bg-white p-4 rounded">
                                    <i className="fa fa-hand-grab-o fa-2x" style={{color:"#AB2656"}}></i>
                                    <p>Tip Myself</p>
                                </Link>
                            </div>
                            <div className="row m-auto mt-5">
                                <div className="col-md-5 bg-white p-4 rounded">
                                    <i className="fa fa-money fa-2x" style={{color:"#AB2656"}}></i>
                                    <p>Pay Bills</p>
                                </div>
                                <div className="col-md-5 mx-4 bg-white p-4 rounded">
                                    <i className="fa fa-bookmark fa-2x" style={{color:"#AB2656"}}></i>
                                    <p>Transaction History</p>
                                </div>
                            </div>
                        </div>
                    </div>     
                </div>   
            </div>
        </div>
    )
}

export default Dashboard;


