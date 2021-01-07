import React, { useState, useEffect } from "react";
import "./ModalForm.css";
import SignupForm2 from "./SignupForm2";
import MediaQuery, { useMediaQuery } from "react-responsive";
import "./HomeComponent-new.css";
import "./SignupForm.css";
import { signUp } from "../../backend/apiconnector";
// import VerificationForm from "./VerificationForm.js";
import { Formik } from "formik";
import Dialog from "@material-ui/core/Dialog";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";
import modalLogo from "../../images/homeasset/modal-logo.svg";
import googleLogo from "../../images/homeasset/Google-logo.png";
import { values } from "lodash";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const formSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .matches(/.+?(?:[\s'].+?){1,}$/, "Invalid name"),

  email: yup 
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?.&])[A-Za-z\d@$!%*.#?&]{8,}$/,
      "Your password must have at least one of each of the following: uppercase character (A-Z), lowercase character (a-z), digit (0-9), and symbol (any non-alphanumeric character)"
    ),
});

const VerificationForm = (email) => {
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
        value={email}
        disabled={true}
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
          Not Your Account ? <span className="log-in-link" onClick={() => {localStorage.removeItem("student-nation.com-tokens"); window.location.reload()}}>Log Out</span>
        </div>
      </div>
    </form>
  );
};

export const SignupForm = (props) => {
  // const nextFunc = () => {
  //   setState(true);
  //   VerificationForm(values.email);
  // };
  const [data, setData] = useState({});
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [value, setValue] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const [email, setEmail] = useState();

  return (
    <div className="home__modal">
      <Dialog
        fullScreen
        open={state}
        className="modal modal"
        onClose={() => setState(false)}
      >
        <SignupForm2 setOpenSignup={props.setOpenSignup} value={value} setState={setState} setState2={setState2} setData={setData} data={data} onChange={handleChange} />
            {/* <div className="modal__contentbottom">
              <hr />
              <p>
                By signing up, you're agreeing to our <span>Terms of Use</span>
                {/* <a
                      href=""
                      onClick={() => {
                        this.setState2({ open: true }) &&
                          this.setState({ open: false });
                      }}
                    >
                      Sign Up
                    </a> 
              </p>
              <p>
                Already have an account? <span>Log In</span>
              </p>
            </div> */}
      </Dialog>

      <Dialog
        fullScreen
        open={state2}
        className="modal modal"
        onClose={() => setState2(false)}
      >
        <div className="modal__container ">
          <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
            <div className="modal__sec1 modal__sec1__verify">
              <img src={modalLogo} alt="logo" />
              <div className="modal__content">
                <p className="modal__welcome">Welcome Back</p>
                <p className="modal__signIn">Sign in to continue.</p>
              </div>
            </div>
          </MediaQuery>
          <div className="modal__sec2">
            <CloseRoundedIcon onClick={() => setState2(false)} />
            <div className="modal__content4">{VerificationForm(email)}</div>

            {/* <div className="modal__contentbottom">
              <hr />
              <p>
                By signing up, you're agreeing to our <span>Terms of Use</span>
                {/* <a
                      href=""
                      onClick={() => {
                        this.setState2({ open: true }) &&
                          this.setState({ open: false });
                      }}
                    >
                      Sign Up
                    </a> 
              </p>
              <p>
                Already have an account? <span>Log In</span>
              </p>
            </div> */}
          </div>
        </div>
      </Dialog>

      <Formik
        className="signupForm"
        initialValues={{
          fullName: "",
          email: "",
          password: "",
        }}
        validationSchema={formSchema}
        // validator={() => ({})}
        onSubmit={(d) => {
          // props.setOpenSignup(false);
          setData(d)
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => {
          return (
            <>
              <form onSubmit={handleSubmit} className="modal__form">
                <label>Your Full Name</label>
                <input
                  placeholder="Enter Your Full Name"
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  value={values.fullName}
                  onBlur={handleBlur}
                  />
                {errors.fullName && touched.fullName && (
                  <p className="modal__errors">
                    <ErrorIcon /> {errors.fullName}
                  </p>
                )}
                <label>Your Email Address</label>
                <input
                  placeholder="Enter Email Address"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  />
                {errors.email && touched.email && (
                  <p className="modal__errors">
                    <ErrorIcon /> {errors.email}
                  </p>
                )}
                <label>Password</label>
                <input
                  placeholder="Enter Password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  />
                  {showPassword ?
                    <VisibilityIcon
                      className="visiblity"
                      onClick={() => {setShowPassword(!showPassword)}}/>
                    :
                    <VisibilityOffIcon
                      className="visiblity"
                      onClick={() => {setShowPassword(!showPassword)}}/>
                  }
                {errors.password && touched.password && (
                  <p className="modal__errors password_error">
                    <ErrorIcon /> {errors.password}
                  </p>
                )}

                <button
                  className="home__login"
                  type="submit"
                  // onClick={() => setState(true)}
                  // onClick={nextFunc()}
                  onClick={() => {
                    setState(true);

                    setEmail(values.email);

                    VerificationForm(values.email);
                  }}
                  disabled={
                    values.fullName.length <= 0 ||
                    values.email.length <= 0 ||
                    values.password.length <= 0 ||
                    errors.name ||
                    errors.email ||
                    errors.password
                  }
                >
                  Next
                </button>
              </form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignupForm;
