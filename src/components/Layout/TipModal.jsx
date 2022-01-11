import React from 'react';
import { useNavigate } from 'react-router';
import './modal.css';

export default function TipModal(props) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/tip-myself")
    }
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




