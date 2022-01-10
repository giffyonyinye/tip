import React from 'react';
import '../Dashboard/dashboard.css';
import logo from '../../assets/logo1.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../Redux/Action/Action';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [pinShown, setPinShown] = useState(false);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        pin: ""
    });
    const [isfirstName, setIsFirstName] = useState("");
    const [isLastName, setIsLastName] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const [isPassword, setIsPassword] = useState("");
    const [isPin, setIsPin] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    useEffect(() => {
        console.log(userInfo)
        if(userInfo) {
           navigate("/dashboard");
        }
    }, [userInfo])
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const togglePin = () => {
        setPinShown(!pinShown);
    };
    const createAcct = useSelector((state) => state.userLogin);
    const {  error } = createAcct
    const handleChange = (e) => {
        if (form.firstName) {
            setIsFirstName("")
        }
        if (form.lastName) {
            setIsLastName("")
        }
        if (form.email) {
            setIsEmail("")
        }
        if (form.password) {
            setIsPassword("")
        }
        if (form.pin) {
            setIsPin("")
        }
        return setForm({...form, [e.target.name] : e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.firstName) {
            setIsFirstName("This field cannot be empty");
        } else if (!form.lastName) {
            setIsLastName("This field cannot be empty");
        } else if (!form.email) {
            setIsEmail("Please enter email Address");
        } else if (!form.password) {
            setIsPassword("Please enter your password");
        } else if (!form.pin) {
            setIsPin("Please enter Pin")
        } else {
            dispatch(createAccount(form.firstName, form.lastName, form.email, form.password, form.pin));
        }
            }
  
    return (
        <div className="register-bg">
            <div className="d-flex justify-content-between">
                <img className="mx-5 mt-3" style={{width:"8rem", height:"3rem"}} src={logo} alt="logo" />
                <div className="mt-3">
                    <Link to="/" className="text-decoration-none text-white text-center h5 px-4 ps-4 pt-1 pb-1 mx-5" style={{border:"1px solid #ab2656", fontWeight:"bold"}}>Log In</Link>
                </div>
                
            </div>
            <div className="text-white mt-5 mx-3" style={{width:"30%"}}>
                <div>
                    <p style={{fontWeight:"lighter", fontSize:"3rem"}}>Sign Up </p>
                </div>
                <form onSubmit={handleSubmit}> 
                    <div style={{fontWeight:"lighter"}}>
                        <div>
                            <input className="w-100 p-1 border-0 border-bottom mt-1 text-white" style={{background:"transparent", borderRadius:".6rem", outline:"none"}} type="text" name="firstName" 
                            id="firstName" 
                            placeholder="First Name" 
                            onChange={handleChange}
                            />
                            <p className="text-danger" style={{fontSize:".7rem"}}>{isfirstName}</p>
                        </div>
                        <div className="mt-3">
                            <input className="w-100 p-2 border-0 border-bottom mt-1 text-white" style={{background:"transparent", borderRadius:".6rem", outline:"none"}} type="text" name="lastName" id="lastName" 
                            placeholder="Last Name" 
                            onChange={handleChange}
                            />
                            <p className="text-danger" style={{fontSize:".7rem"}}>{isLastName}</p>
                        </div>
                        <div className="mt-3">
                            <input className="w-100 p-2 border-0 border-bottom mt-1 text-white" style={{background:"transparent", borderRadius:".6rem", outline:"none"}} type="text" name="email" id="emailAddress" 
                            placeholder="Email Address"
                            onChange={handleChange} 
                            />
                            <p className="text-danger" style={{fontSize:".7rem"}}>{isEmail}</p>

                        </div>
                        <div className="mt-3">
                            <input className="w-100 p-2 border-0 border-bottom mt-1 text-white" 
                            type={passwordShown ? "text" : "password"} 
                            name="password" id="password" placeholder="Password"
                            style={{background:"transparent", borderRadius:".6rem", outline:"none"}}
                            onChange={handleChange}
                            />
                            <i style={{marginLeft:"-2rem", color:"gray "}} onClick={togglePassword} className={passwordShown ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                            <p className="text-danger" style={{fontSize:".7rem"}}>{isPassword}</p>
                        </div>
                        <div className="mt-3">
                            <input className="w-100 p-2 border-0 border-bottom mt-1 text-white" 
                            type={pinShown ? "number" : "password"} 
                            name="pin" id="pin" placeholder="Pin" maxLength="4"
                            onChange={handleChange}
                            style={{background:"transparent", borderRadius:".6rem", outline:"none"}}
                            />
                            <i style={{marginLeft:"-2rem", color:"gray "}} onClick={togglePin} className={pinShown ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                            <p className="text-red" style={{fontSize:".7rem"}}>{isPin}</p>

                        </div>
                        {error && (
                            <div className="text-danger">{error}</div>
                        )}
                        <div className="mt-4 ">
                            <button className="w-50 border-0 p-1 rounded-3" style={{color:"#ab2656", fontWeight:"bold", fontSize:"1.2rem"}}>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
