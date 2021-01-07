import React, { useState, useEffect } from "react";
import "./ModalForm.css";
import "./HomeComponent-new.css";
import Dropdown from "react-dropdown";
import MediaQuery from "react-responsive";
import "react-dropdown/style.css";
import { Redirect, useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import modalLogo from "../../images/homeasset/modal-logo.svg";
import ErrorIcon from "@material-ui/icons/Error";
import { values } from "lodash";
import { signUp } from "../../backend/apiconnector";
import { CalendarViewDaySharp } from "@material-ui/icons";

const formSchema = yup.object().shape({
  college: yup.string().required("College is required"),
  date: yup.string().required("Graduation Date is required"),
  degree: yup.string().required("Degree is required"),
  major: yup.string().required("Major is required"),
});

export const SignupForm2 = (props) => {
  const history = useHistory();

  // const [state, setState] = useState(false);

  // const [button, setButton] = useState(false);

  // function handleChange(newValue) {
  //   if (newValue) {
  //     props.onChange(setButton(true));
  //   }
  // }

  const handleButtonChange = () => {
    if (values.college) {
      console.log(values.college);
      props.onChange(false);
    }
  };
  // const defaultOption = options[0];

  // useEffect(() => {
  //   if (
  //     values.college.length > 0 &&
  //     values.degree.length > 0 &&
  //     values.major.length > 0
  //   ) {
  //     setButton(true);
  //   }
  // }, [values.college, values.degree, values.major, values.date]);

  //   function redirect() {
  //     var url = "http://localhost:5000/dashboard";
  //     window.location = url;
  //   }

  // function handleChange(event) {
  //   props.onChange(event.target.value)
  // }

  return (
    <div className="modal__container modal__container2">
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
        <CloseRoundedIcon onClick={() => {props.setState(false); props.setOpenSignup(false)}} />
        <div className="modal__content3">
          <Formik
            initialValues={{
              college: "",
              date: "",
              degree: "",
              major: "",
            }}
            validationSchema={formSchema}
            // validator={() => ({})}
            onSubmit={(values) => {
              props.setData({...props.data, ...values})

              var user = {
                firstname: props.data.fullName.split(" ")[0],
                lastname: props.data.fullName.split(" ")[1],
                email: props.data.email,
                password: props.data.password,
                school: values.college,
                gradyear: values.date,
                degree: values.degree,
                stream: values.major
              }

              signUp(user).then((res) => {
                if (res.status === "success") {
                  localStorage.setItem("student-nation.com-tokens", res.token)
                  history.push({
                    pathname: "/dashboard/newProfile",
                    signedup: true
                  })
                }
              })
              .catch(err => {
                console.log("error: ", err);
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
                <form onSubmit={handleSubmit} className="modal__form form2">
                  <label className="newLabel">College</label>
                  <input
                    className="college_field"
                    placeholder="Enter College Name"
                    type="text"
                    name="college"
                    onChange={handleChange}
                    value={values.college}
                    onBlur={handleBlur}
                  />
                  {errors.college && touched.college && (
                    <p className="modal__errors">
                      <ErrorIcon /> {errors.college}
                    </p>
                  )}
                  <div className="yearDegree">
                    <div>
                      <label className="newLabel">Graduation Year</label>
                      <select
                        placeholder="Select Year"
                        className="signupDropdown2"
                        type="text"
                        name="date"
                        onChange={handleChange}
                        value={values.date}
                        onBlur={handleBlur}
                      >
                        <option
                          disabled
                          selected
                          hidden
                          className="option__heading"
                          value=""
                        >
                          Graduation Year
                        </option>

                        <option className="signupOption" value="Fall 2024">
                          Fall 2024
                        </option>
                        <option className="signupOption" value="Spring 2024">
                          Spring 2024
                        </option>
                        <option className="signupOption" value="Fall 2023">
                          Fall 2023
                        </option>
                        <option className="signupOption" value="Spring 2023">
                          Spring 2023
                        </option>
                        <option className="signupOption" value="Fall 2022">
                          Fall 2022
                        </option>

                        <option className="signupOption" value="Spring 2022">
                          Spring 2022
                        </option>
                        <option className="signupOption" value="Fall 2021">
                          Fall 2021
                        </option>
                        <option className="signupOption" value="Spring 2021">
                          Spring 2021
                        </option>
                        <option className="signupOption" value="Spring 2020">
                          Fall 2020
                        </option>
                        <option className="signupOption" value="Spring 2020">
                          Spring 2020
                        </option>
                        <option className="signupOption" value="2019">
                          2019
                        </option>
                        <option className="signupOption" value="2018">
                          2018
                        </option>
                      </select>
                      {/* <Dropdown
                    className="signupDropdown"
                    type="text"
                    options={options}
                    onChange={handleChange}
                    value={defaultOption}
                  /> */}
                      {errors.date && touched.date && (
                        <p className="modal__errors">
                          <ErrorIcon /> {errors.date}
                        </p>
                      )}
                    </div>
                    <div className="degreeContainer">
                      <label className="newLabel">Degree</label>
                      <select
                        className="Degree"
                        placeholder="Enter Degree Name"
                        type="text"
                        name="degree"
                        onChange={handleChange}
                        value={values.degree}
                        onBlur={handleBlur}
                      >
                        <option
                          className="option__heading"
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          Select Degree Name
                        </option>
                        <option className="signupOption" value="BTech">
                          BTech
                        </option>
                        <option className="signupOption" value="BSc">
                          BSc
                        </option>
                        <option className="signupOption" value="BBA">
                          BBA
                        </option>
                        <option className="signupOption" value="BA">
                          BA
                        </option>
                        <option className="signupOption" value="Bcom">
                          Bcom
                        </option>
                        <option className="signupOption" value="BCA">
                          BCA
                        </option>
                        <option className="signupOption" value="BFA">
                          BFA
                        </option>
                        <option className="signupOption" value="BE">
                          BE
                        </option>
                      </select>
                      {errors.degree && touched.degree && (
                        <p className="modal__errors">
                          <ErrorIcon /> {errors.degree}
                        </p>
                      )}
                    </div>
                  </div>
                  <label className="newLabel">Major</label>
                  <input
                    placeholder="Enter Major Name"
                    type="text"
                    name="major"
                    onChange={handleChange}
                    value={values.major}
                    onBlur={handleBlur}
                  />
                  {errors.major && touched.major && (
                    <p className="modal__errors">
                      <ErrorIcon /> {errors.major}
                    </p>
                  )}
                  <div className="buttons">
                    <button
                      className="signupButton2 "
                      type="button"
                      onClick={() => props.setState(false)}
                    >
                      Back
                    </button>
                    <button
                      className=" signupButton "
                      type="submit"
                      onClick={() => {
                        props.setState2(true);
                      }}
                      disabled={
                        values.college.length <= 0 ||
                        values.degree.length <= 0 ||
                        values.date.length <= 0 ||
                        values.major.length <= 0 ||
                        errors.college ||
                        errors.degree ||
                        errors.major ||
                        errors.date
                      }
                    >
                      Signup
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignupForm2;
