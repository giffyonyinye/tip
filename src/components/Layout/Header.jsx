import React from 'react';
import logo from '../../assets/logo1.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout} from '../Redux/Action/Action';
import { useNavigate } from 'react-router';

const Header = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(logout());
        navigate('/');
    } 
    const data = JSON.parse(localStorage.getItem("userData"));
    return (
        <>
            <div className="d-flex justify-content-end">
                <img className="mx-5 mt-3" style={{width:"8rem", height:"3rem"}} src={logo} alt="logo" />
            </div>
            <div className="p-2 mt-2" style={{color:"#ab2656"}} >
                <div className="d-flex mx-5">
                    <div className="d-flex mx-5 p-2">
                        <i className="fa fa-user mt-1 mx-2"></i>
                            <p>{userInfo && userInfo.acctName}</p>
                    </div>
                    <div>
                        <button className="outline-none  rounded p-2" style={{background:"transparent", border:"1px solid white", color:"#ab2656"}} onClick = {handleClick}>Logout</button>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Header;
