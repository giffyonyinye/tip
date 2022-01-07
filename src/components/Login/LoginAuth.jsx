import React from 'react';
import { useNavigate } from 'react-router';
import { login } from '../Redux/Action/Action';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../Layout/Loader';
import Message from '../Layout/Loader';
import '../Layout/banner.css';;


// import { useSelector } from 'react-redux';
// import { logInAction, logInFailed, logInSuccess } from '../Redux/Action/Action';

const LoginAuth = () => {
    const dispatch = useDispatch()

    const [passwordShown, setPasswordShown] = useState(false);
    const [emailValidity, setEmailValidity] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    const [isUserAuth, setIsUserAuth] = useState(false);
    const [userData, setUserData] = useState([]);
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        if(form.email) {
            setEmailValidity(false);
        }
        if(form.password) {
            setPasswordValidity(false);
        }
        return setForm({...form, [e.target.name] : e.target.value});

    }


    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!form.email) {
             setEmailValidity(true);
        } else if (!form.password) {
            return setPasswordValidity(true);
        } else {
            dispatch(login(form.email, form.password));
            // navigate("/dashboard")
        }
        
        
    }

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo, error, loading } = userLogin;
    return (
        <>
            <div className="banner text-white"> 
                <div  style={{paddingTop:"5rem",marginRight:"5rem", display:"flex", justifyContent:"end"}}>
                    <div style={{width:"30%",  }}>
                        <div>
                            <p className="m-0 h4">Welcome Back.</p>
                            <hr style={{width:"15%", height:".2rem", backgroundColor:"#AB2656"}} />

                            <div className="mt-5">
                                <form onSubmit={handleLogin}>
                                    <div>
                                        <label>Email Address</label><br />
                                        <input className="w-100 mt-2 p-2 rounded border border-secondary" type="email" 
                                        name="email" 
                                        id="email" 
                                        onChange={handleChange}/>
                                        {emailValidity &&
                                            <p className="text-danger" style={{fontSize:".8rem"}}>please enter your email address</p>
                                        }
                                       
                                        
                                    </div>
                                    <div className="mt-3">
                                        <label>Password</label><br />
                                        <div>
                                            <input className="w-100 mt-2 p-2 rounded border border-secondary" 
                                            type={passwordShown ? "text" : "password"} 
                                            name="password" id="passowrd" 
                                            onChange={handleChange}
                                            />
                                            <i style={{marginLeft:"-2rem", color:"black "}} onClick={togglePassword} className={passwordShown ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                        </div>
                                        {passwordValidity &&
                                            <p className="text-danger" style={{fontSize:".8rem"}}>please enter your password</p>
                                        }
                                        {error && (
                                            <div className="text-danger">{error}</div>
                                        )}
                                        {/* {error && <Message variant='danger'>{error}</Message>} */}
                                        
                                    </div>
                                    <div>
                                        <p className="text-white" style={{textAlign:
                                    "right"}}>Forgot Password?</p>
                                    </div>
                                    <div className="mt-5">
                                        <button 
                                        className="text-white rounded w-100 p-2 border-0 outline-none" style={{backgroundColor:"#AB2656"}}>Login
                                        {/* {isLoading &&
                                        <i className="fa fa-spin fa-spinner"></i>
                                        } */}
                                        </button>
                                        {loading && <Loader />}
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div>
                            <Link to="/create-account">Sign Up</Link>
                        </div>
                    </div>
               </div>
            </div>   
       </>
    )
}

// const mapStateToProps = state => ({
//     info: state.LoginReducer.userInfo        
// })

// const mapDispatchToProps = (dispatch) => ({
//     // logInAction: (payload) => dispatch(logInAction(payload)),
//     userInfo: (payload) => dispatch(userInfo(payload))
// })


// export default connect(mapStateToProps, mapDispatchToProps)(LoginAuth);
export default LoginAuth;

