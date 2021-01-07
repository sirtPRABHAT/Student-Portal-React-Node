import React, { useState, useEffect } from "react";
import "./ModalForm.css";
import "./HomeComponent-new.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";

export const SignupForm2 = (props) => {
  console.log(props);
  const [state, setState] = useState(false);

  const [button, setButton] = useState(false);

  return (
    <form className="modal__form form2">
      <h2 className="verifyDiv verifyTitle">We Need to Verify your Email</h2>
      <div className="infodiv verifyDiv">
        We sent an email to the address you provided when you created your
        account. Verify your email to continue
      </div>

      <input
        type="email"
        className="email-input verifyInput"
        value={props.email}
        disabled={false}
      />
      <hr className="verificationHr" />
      <div className="infodiv verifyDiv">
        Click on the link in that email to verify your account. You may need to
        check your <b>spam</b> folder.
      </div>
      <div className="infodiv bottomVerifyDiv ">
        <button className="create-acc verify-button">
          Don't see it? Resend
        </button>
        <div className="log-in verifyLogOut">
          Not Your Account ? <span className="log-in-link">Log Out</span>
        </div>
      </div>
    </form>
  );
};

export default SignupForm2;
