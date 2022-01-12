import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import '../Layout/modal.css';
import image from '../../assets/TALAT_Success1.svg'

export default function Modal(props) {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo} = userLogin;
    const navigate = useNavigate();
    
    const handleClick = () => {
        if(userInfo) {
            navigate("/dashboard");
         }
    }
    
  if(!props.showModal) {
    return null
  }
    return (
        <>
        {userInfo && (
           <div className="modal">
                <div className="modal-content">
                    <div className=" m-auto" style={{width:"10%"}}>
                        <img className="" src={image} alt="pic" />
                    </div>
                    <div className="modal-header">
                        
                        <div className="modal-body">
                            <p className="text-center m-0 h3">Account Created Successfully. </p>
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




