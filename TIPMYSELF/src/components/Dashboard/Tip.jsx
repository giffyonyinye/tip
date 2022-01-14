import React from 'react';
import "./dashboard.css";
import { useNavigate } from 'react-router';
import CreateWallet from './CreateWallet';
import UserWallet from './UserWallet';
import { getUser } from '../Redux/Action/Action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const TipWallet = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goToPreviousPath = () => {
        navigate(-1)
    }
    useEffect(() => {
        dispatch(getUser(userInfo.acctNumber));
    }, [])
    return (
        <>
          <div className="tip-bg">
            
                <div className="pt-4">
                    <div className="p-1 bg-white">
                        <div className="" style={{color:"#AB2656"}}>
                            <div className="container d-flex">
                                <i onClick={goToPreviousPath} className="fa fa-arrow-left mt-1 text-white rounded-circle p-2" style={{backgroundColor:"#AB2656"}}></i>
                                <p className="mx-5 mt-1 h5">Tip Myself</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div >
                  
                    <CreateWallet/>
                    <UserWallet/>
                    
                </div>
            </div>  
        </>
    )
}

export default TipWallet;
