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
   
    const handleClick = () => {
        dispatch(tip(walletDetails.acctNumber, walletDetails.tipStatus, props.tipPercent));
        props.onClose();
    }
    useEffect(() => {
        navigate("/tip-myself")
    })
  if(!props.showModal) {
    return null
  }
    return (
        <>
          <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-body">
                        <p>You have succesfully enabled tip wallet</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleClick}>OK</button>
                    </div>
                </div>

              </div>
          </div>
        </>
    )
}




