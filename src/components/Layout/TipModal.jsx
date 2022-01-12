import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import './modal.css';
import { getUser } from '../Redux/Action/Action';
import { tip } from '../Redux/Action/walletActions';

export default function TipModal(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const walletStatus = useSelector((state) => state.walletDetails);
    const { walletDetails, error } = walletStatus;
   let message = "You have successfully enabled your wallet"
    const handleClick = () => {
        dispatch(tip(walletDetails.acctNumber, walletDetails.tipStatus, props.tipPercent));
        // props.onClose();
        navigate("/dashboard")
    }
    useEffect(() => {
       getUser(walletDetails.acctNumber)
    }, [])
    
  if(!props.showModal) {
    return null
  }
    return (
        <>
        {props.tipPercent && (
            <div className="modal">
                <div className="modal-content">
                  <div className="modal-header">
                      <div className="modal-body">
                          <p className="text-center m-0">Tip Myself Wallet enabled successfully.</p>
                      </div>
                      
                  </div>
                  <div className="text-center pb-3 ">
                          <button className="w-50 border-0 text-white rounded" style={{background:"#ab2656"}} onClick={handleClick}>OK</button>
                  </div>

                </div>
            </div>
        )}
          
        </>
    )
}




