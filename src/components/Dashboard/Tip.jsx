import React from 'react';
import "./dashboard.css";
import { useNavigate } from 'react-router';
import CreateWallet from './CreateWallet';
import UserWallet from './UserWallet';

const TipWallet = () => {
    const navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate(-1)
    }
    // useEffect(() => {
    //    dispatch(tipWalletDetails(userInfo.acctNumber))
    // })
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
