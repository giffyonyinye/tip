import React from 'react';
import '../Layout/modal.css';

export default function DashboardModal(props) {
  if(!props.showModal) {
    return null
  }
    return (
        <>
          <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-body">
                        <p className="text-center m-0"> Oopss.. <br />Feature Not available</p>
                    </div>
                    
                </div>
                <div className="text-center pb-3 ">
                        <button className="w-50 border-0 text-white rounded" style={{background:"#ab2656"}} onClick={props.onClose}>OK</button>
                </div>

              </div>
          </div>
        </>
    )
}




