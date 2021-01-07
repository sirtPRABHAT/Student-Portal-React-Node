import React, { useState } from "react";
import "./ModalForm.css";

import { Formik } from "formik";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";
import { signin } from "../../backend/apiconnector";
import { useHistory } from 'react-router-dom'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const formSchema = yup.object().shape({
  email: yup.string().required("Email is required").email(),
  password: yup.string().required("Password is required").min(6),
});

function ModalForm() {
  // const [show,SetShow] = useState(true);
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    // <div>
    // {show?
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={formSchema}
      onSubmit={(data) => {
        console.log("data: ", data)
        signin(data)
        // SetShow(false)
        .then(res => {
            if(res.status == "success"){
                localStorage.setItem("student-nation.com-tokens", res.token)
                history.push("/dashboard/newProfile")
            }
        })
        .catch(err => {
            console.log(err);
        })
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
          <form onSubmit={handleSubmit} className="modal__form">
            <label>Your Email</label>
            <input
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
              type={showPassword ? "text" : "password"}
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
              type="submit"
              disabled={
                values.email.length <= 0 ||
                values.password.length <= 0 ||
                errors.email ||
                errors.password
              }
              className="modal__login"
            >
              Log In
            </button>
          </form>
        );
      }}
    </Formik>
    // :null}
    // </div>
  );
}

export default ModalForm;
