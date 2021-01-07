import React, { Component } from 'react';
import sha256 from 'crypto-js/sha256';
import { useParams } from "react-router-dom";

import { verifyEmail } from "../backend/apiconnector";

function Verification() {
    const { token } = useParams();
    if(localStorage.getItem("student-nation.com-activation")){
        var lsread = JSON.parse(localStorage.getItem("student-nation.com-activation"))
        console.log(sha256(token).toString())
        if(sha256(token).toString()===lsread.hash){
            verifyEmail(token).then(res => {
                if(res.status==="success"){
                    localStorage.setItem("student-nation.com-tokens", JSON.stringify(res.tokens))
                    localStorage.setItem("student-nation.com-user", JSON.stringify(res.user))
                    localStorage.removeItem("student-nation.com-activation")
                    window.location.replace("/dashboard/profile")
                }
            }).catch(err => {
                console.log(err)
            })
        }else{
            alert("Invalid/Expired Link")
            window.location.replace("/signup")    
        }
    }else{
        window.location.replace("/signup")
    }
}
export default Verification; 