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
                <div >
                    <div className=" mb-5" style={{width:"40%"}}>
                        <div>
                            <UserBalance/>
                        </div>
                        <div className=" mt-3 " style={{width:"80%", margin:"auto"}}>
                            <div className="d-flex justify-content-around text-center">
                                <Link to="/transfer" className="w-75 text-black text-decoration-none bg-white p-3 rounded">
                                    <i className="fa fa-money fa-2x" style={{color:"#AB2656"}}></i>
                                    <p className="">Send Money</p>
                                </Link>
                                <Link to="/tip-myself" className="w-75 text-black  mx-4 bg-white p-3 rounded text-decoration-none">
                                    <i className="fa fa-hand-grab-o fa-2x" style={{color:"#AB2656"}}></i>
                                    <p>Tip Myself</p>
                                </Link>
                            </div>
                            <div className="d-flex justify-content-around mt-3 text-center">
                                <div className="w-75 bg-white rounded">
                                    <i className="fa fa-money fa-2x p-3" style={{color:"#AB2656"}}></i>
                                    <p>Pay Bills</p>
                                </div>
                                <div className="w-75 mx-4 bg-white p-3 rounded">
                                    <i className="fa fa-bookmark fa-2x" style={{color:"#AB2656"}}></i>
                                    <p>Data & Mobile Topup</p>
                                </div>
                            </div>

                            <div className=" bg-white rounded">
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


