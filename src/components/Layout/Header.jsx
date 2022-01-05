import React from 'react';
import logo from '../../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../Redux/Action/Action';
import { useNavigate } from 'react-router';

const Header = () => {
    const contact = useSelector(state => state.LoginReducer.userInfo[0]);
    console.log(contact)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(logoutAction({email:'', password:''}));
        navigate('/');
    } 
    const data = JSON.parse(localStorage.getItem("userData"));
    return (
        <>
            <div className="d-flex justify-content-between p-2 text-white" style={{backgroundColor:"#AB2656"}}>
                <img className="ms-5" style={{width:"5rem", height:"2rem"}} src={logo} alt="logo" />
                <div className="d-flex mx-5">
                    <div className="d-flex mx-5 p-2">
                        <i className="fa fa-user mt-1 mx-2"></i>
                            <p>{contact.acctName}</p>
                    </div>
                    <div>
                        <button className="outline-none text-white rounded p-2" style={{background:"transparent", border:"1px solid white"}} onClick = {handleClick}>Logout</button>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Header;
