import React from 'react';
import { useNavigate } from 'react-router';
import { login } from '../Redux/Action/Action';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../Layout/Loader';
import '../Layout/banner.css';

const LoginAuth = () => {
    const dispatch = useDispatch()

    const [passwordShown, setPasswordShown] = useState(false);
    const [emailValidity, setEmailValidity] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo, error, loading } = userLogin;
    useEffect(() => {
        if(userInfo) {
           navigate("/dashboard")
        }
    }, [userInfo])
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
        }
        
        
    }

   
    return (
        <>
            <div className="banner text-white"> 
                <div  style={{paddingTop:"5rem",marginRight:"5rem", display:"flex", justifyContent:"end"}}>
                    <div style={{width:"30%",  }}>
                        <div>
                            <p className="m-0 h2">Welcome Back!</p>
                            <hr style={{width:"30%", height:".2rem", backgroundColor:"#AB2656"}} />

                            <div className="mt-5">
                                <form onSubmit={handleLogin}>
                                    <div>
                                        <label>Email Address</label><br />
                                        <input className="w-100 p-2 rounded-3  mt-1 border-0 " type="email" 
                                        name="email" 
                                        id="email" 
                                        style={{ outline:"none"}}
                                        onChange={handleChange}/>
                                        {emailValidity &&
                                            <p className="text-danger" style={{fontSize:".8rem"}}>please enter your email address</p>
                                        }
                                       
                                        
                                    </div>
                                    <div className="mt-3">
                                        <label>Password</label><br />
                                        <div>
                                            <input className="w-100 mt-1 p-2 rounded-3 border-0 " 
                                            type={passwordShown ? "text" : "password"} 
                                            name="password" id="passowrd"
                                            style={{ outline:"none"}} 
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
                                        className="text-white rounded w-100 p-2 border-0 outline-none" style={{backgroundColor:"#AB2656"}}>Login {loading && <i className="fa fa-spin fa-spinner"></i>}
                                        {/* {isLoading &&
                                        <i className="fa fa-spin fa-spinner"></i>
                                        } */}
                                        </button>
                                        {/* {loading && <Loader />} */}
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="text-center mt-3">
                            <p className="m-0">Don't have an account yet?</p>
                            <Link to="/create-account" className=" text-decoration-none" style={{color:"#ab2656"}}>Sign Up</Link>
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

