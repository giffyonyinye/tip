import React, { useState } from 'react';
import './modal.css';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router';

export default function Modal(props) {
  const [tipWallet, setTipWallet] = useState(false)
  console.log(props)
  let message = "";
  let nextMessage = "";
  const navigate = useNavigate();
  const transferSuccess = () => {
    props.onClose()
    navigate("/dashboard")
  } 

  if(!props.showModal) {
    return null
  }
    return (
        <>
        {
          props.tipAmount && (
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-body">
                        <p>
                          {props.tipAmount === -1 &&
                            <div>
                              <p className="text-success h3 text-center">{ message = "Transfer Successful!"}</p>
                            </div>
                          }
                        </p>
                        <p>
                          {props.tipAmount === -2 &&
                            <div className="text-center">
                              <p className="text-success h3 text-center">{ message = "Transfer Successful!"}</p>
                              
                                <Link to="/tip-myself" className=" text-black ">Activate Tip Wallet?</Link>
                              
                            </div>
                          }
                        </p>
                        <p>
                          {props.tipAmount > 0 &&
                            <div className="text-center">
                              <p className="text-success h3 text-center">{ message = "Transfer Successful!"}</p>
                              {nextMessage = "You have been tipped"} ₦{props.tipAmount} being {props.tipPercent}% of ₦{props.transactionAmount}
                            </div>
                          }
                        </p>
                        <p>
                          {props.tipAmount === -3 &&
                            <div className="text-center">
                              <p className="text-success h3 text-center">{ message = "Transfer Successful!"}</p>
                              {nextMessage = "You have no tip for this transaction due to insufficient funds"}
                            </div>
                          }
                        </p>
                    </div>
                    
                </div>
                <div className="text-center pb-3">
                    <button className="w-50 border-0 text-white p-1" style={{background:"#ab2656"}} onClick={transferSuccess}>OK</button>
                </div>
              </div>
          </div>
          )
        }
          
          
        </>
    )
}




