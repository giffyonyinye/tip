import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import './modal.css';
import { tip } from '../Redux/Action/walletActions';

export default function TipModal(props) {
    const toggle = useSelector((state) => state.toggleTip);
    const { toggleTip} = toggle;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        navigate("/dashboard")
    }
    
  if(!props.showModal) {
    return null
  }
    return (
        <>
        {toggleTip && (
            <div className="modal">
                <div className="modal-content">
                  <div className="modal-header">
                      <div className="modal-body">
                          <p className="text-center m-0">Tip Myself Wallet updated successfully.</p>
                        
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




