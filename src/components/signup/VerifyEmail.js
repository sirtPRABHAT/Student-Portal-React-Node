import React, { Component } from 'react';

import { resendEmail } from '../backend/apiconnector'

// import axios from 'axios';

export default class VerifyEmail extends Component {
    constructor(props){
        super(props)
        this.handleResend = this.handleResend.bind(this)
    }
    handleResend(){
        resendEmail(this.props.email).then(data => {
            if(data.status==='success'){
                window.localStorage.setItem("student-nation.com-activation", JSON.stringify({
                    email: this.props.email,
                    hash: data.tokenhash,
                    verified: false
                }))
            }
        }).catch(err => {
            console.log(err)
        })
        // axios.post('http://localhost:5000/auth/resendemail', { email: this.props.email })
        // .then(res => {
        //     if(res.data.status==='success'){
        //         window.localStorage.setItem("scholarlyscience.in-activation", JSON.stringify({
        //             email: this.props.email,
        //             hash: res.data.tokenhash,
        //             verified: false
        //         }))
        //     }
        // })
    }
    handleLogout(){
        if(window.localStorage.getItem("student-nation.com-activation")||window.localStorage.removeItem("student-nation.com-tokens")||window.localStorage.removeItem("student-nation.com-user")){
            window.localStorage.removeItem("student-nation.com-activation")
            window.localStorage.removeItem("student-nation.com-tokens")
            window.localStorage.removeItem("student-nation.com-user")
            window.location.reload()
        }
    }
    
    render() { 
        return (  
            <div className="container-success">
                <h2>We Need to Verify your Email</h2>
                <div className="infodiv">
                    We sent an email to the address you provided when you created
                    your account. Verify your email to continue
                </div>
                <input
                    type="email"
                    className="email-input"
                    value={this.props.email}
                    disabled={true}
                />
                <hr/>
                <div className="infodiv">
                    Click on the link in that email to verify your account.
                    You may need to check your <b>spam</b> folder.
                </div>
                <div className="infodiv">
                    <button className="create-acc" onClick={this.handleResend}>
                        Don't see it? Resend
                    </button>
                    <div className="log-in">
                        Not Your Account ?{' '}
                        <span className="log-in-link" onClick={this.handleLogout}>Log Out</span>
                    </div>
                </div>
            </div>
        );
    }
}