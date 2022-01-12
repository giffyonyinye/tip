import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import './modal.css';
import { tip } from '../Redux/Action/walletActions';

export default function TipModal(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const walletStatus = useSelector((state) => state.walletDetails);
    const { walletDetails, error } = walletStatus;
   let message = "You have successfully enabled your wallet"
    const handleClick = () => {
        dispatch(tip(walletDetails.acctNumber, walletDetails.tipStatus, props.tipPercent));
        props.onClose();
        navigate("/dashboard")
    }
    
  if(!props.showModal) {
    return null
  }
    return (
        <>
        {props.walletDetails && (
            <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                  <div className="modal-body">
                      <p>{message}</p>
                  </div>
                  
              </div>

            </div>
            <div className="text-center">
                  <button  className="w-50 border-0"  onClick={handleClick} >OK</button>
              </div>
        </div>
        )}
          
        </>
    )
}




