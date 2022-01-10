import React from 'react';
import './modal.css';

export default function Modal(props) {
  if(!props.showModal) {
    return null
  }
    return (
        <>
          <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                    <p className="modal-title">hi</p>
                    <div className="modal-body">
                        <p>its good</p>
                    </div>
                    <div className="modal-footer">
                        <button>OK</button>
                    </div>
                </div>

              </div>
          </div>
        </>
    )
}


