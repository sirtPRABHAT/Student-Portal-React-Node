import React, {useState} from 'react';
import './loginStudent.css';
import { useHistory } from 'react-router-dom'
 
import google from "../../assets/icons8-google.svg";
import linkedin from "../../assets/icons8-linkedin.svg";
import { signin } from '../backend/apiconnector';

export function LoginStudent() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        signin({email, password})
        .then(res => {
            if(res.status == "success"){
                localStorage.setItem("student-nation.com-tokens", res.token)
                localStorage.setItem("student-nation.com-user", JSON.stringify({email: res._doc.email}))
                history.push("/")
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="login-container">
                <div className="container">
                    <div className="signup-title">Login</div>
                    <div>
                        <div className="with-google">
                            <span>
                                <img
                                    src={google}
                                    alt="google"
                                    height="25"
                                    width="25"
                                    style={{ marginTop: "0.5rem" }}
                                />
                            </span>
                            <span>Login with Google</span>
                        </div>
                        <div className="with-linkedin">
                            <span>
                                <img
                                    src={linkedin}
                                    alt="linkedin"
                                    height="25"
                                    width="25"
                                    style={{ marginTop: "0.5rem", marginRight: "0.2rem" }}
                                />
                            </span>
                            <span>Login with LinkedIn</span>
                        </div>
                    </div>
                    <div className="with-email">
                        <span>or login with email</span>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className="email-label">
                            Email
                </label>
                        <div>
                            <input
                                type="email"
                                className="email-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <label htmlFor="password" className="password-label">
                            Password
                </label>
                        <div>
                            <input
                                type="password"
                                className="email-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        
                        <button className="create-acc">Login</button>
                    </form>
                    <div className="infodiv">
                        Don't have an account?{' '}
                        <span className="log-in-link" onClick={()=>{history.push("/signup")}}>Sign Up</span>
                    </div>
                </div>
            </div>
        </div>
    )
}