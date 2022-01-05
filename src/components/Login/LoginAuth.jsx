import React from 'react';
import { useState } from 'react';
import '../Layout/banner.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { userInfo } from '../Redux/Action/Action';
import { connect } from 'react-redux';

// import { useSelector } from 'react-redux';
// import { logInAction, logInFailed, logInSuccess } from '../Redux/Action/Action';

const LoginAuth = (props) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [emailValidity, setEmailValidity] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isUserAuth, setIsUserAuth] = useState(false);
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
            setPasswordValidity(true);
        } else {
            setIsLoading(true)
            axios({
                method: "POST",
                url: "https://localhost:5001/api/User/login",
                headers: {
                    'Content-type': 'application/json',
                },
                data: {
                    email: form.email
                }
            })
            .then((res) => {
                let userData = []
                userData = res.data
                localStorage.setItem('userData', JSON.stringify(userData))
                props.userInfo(userData);
                setIsLoading(false);
                navigate("/dashboard");

            })
            .catch((err) => {
                if(err) {
                    setIsUserAuth(true);
                    setIsLoading(false);
                }
            })
            
        }
    }
    // const selector = useSelector(state => state.LoginReducer.userInfo)
    // console.log(selector)
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
                                         {isUserAuth &&
                                            <p className="text-danger" style={{fontSize:".8rem"}}>Incorrect Email or Password</p>
                                        }
                                        
                                    </div>
                                    <div>
                                        <p className="text-white" style={{textAlign:
                                    "right"}}>Forgot Password?</p>
                                    </div>
                                    <div className="mt-5">
                                        <button 
                                        className="text-white rounded w-100 p-2 border-0 outline-none" style={{backgroundColor:"#AB2656"}}>Login
                                        {isLoading &&
                                        <i className="fa fa-spin fa-spinner"></i>
                                        }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
               </div>
            </div>   
       </>
    )
}

const mapStateToProps = state => ({
    info: state.LoginReducer.userInfo        
})

const mapDispatchToProps = (dispatch) => ({
    // logInAction: (payload) => dispatch(logInAction(payload)),
    userInfo: (payload) => dispatch(userInfo(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginAuth);
// export default LoginAuth;

