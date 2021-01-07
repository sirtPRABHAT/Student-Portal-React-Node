import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeComponent-new.css";
import Dialog from "@material-ui/core/Dialog";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import MediaQuery, { useMediaQuery } from "react-responsive";
import forstudents from "../../images/homeasset/3.svg";
import foremployers from "../../images/homeasset/2.svg";
import forcolleges from "../../images/homeasset/4.svg";
import companiescover from "../../images/homeasset/companies.svg";
import trees from "../../images/homeasset/Group 120.svg";
import work from "../../images/homeasset/work.svg";
import ecosystem from "../../images/homeasset/ecosystem.svg";
import sec2Img from "../../images/homeasset/Group 122.svg";
import box from "../../images/homeasset/box.svg";
import modalLogo from "../../images/homeasset/modal-logo.svg";
import googleLogo from "../../images/homeasset/Google-logo.png";
import ModalForm from "./ModalForm";
import SignupForm from "./SignupForm";

function HomeComponent() {
  const [open, setOpen] = useState(false)
  const [openSignup, setOpenSignup] = useState(false)
  // constructor(props) { 
  //   super(props);
  //   this.onClick = this.onClick.bind(this);
  // }

  // onClick() {
  //   this.setState2();
  // }
    return (
      <div className="home">
        <div className="home__modal">
          <Dialog
            fullScreen
            open={open}
            className="modal"
            onClose={() => setOpen(false)}
          >
            <div className="modal__container">
              <div className="modal__sec1">
                <img src={modalLogo} alt="logo" />
                <div className="modal__content">
                  <p className="modal__welcome">Welcome Back</p>
                  <p className="modal__signIn">Sign in to continue.</p>
                </div>
              </div>

              <div className="modal__sec2">
                <CloseRoundedIcon
                  onClick={() => setOpen(false)}
                />
                <div className="modal__content2">
                  <div className="google__login">
                    <img src={googleLogo} alt="gl" />
                    <p>Continue with Google</p>
                  </div>
                  <div className="modal__seperator">
                    <hr />
                    <p>or</p>
                    <hr />
                  </div>
                  <ModalForm />
                </div>

                <div className="modal__contentbottom">
                  <hr />
                  <p>
                    Don’t have an account? <span onClick={() => {setOpen(false); setOpenSignup(true)}}>Sign Up</span>
                    {/* <a
                      href=""
                      onClick={() => {
                        this.setState2({ open: true }) &&
                          this.setState({ open: false });
                      }}
                    >
                      Sign Up
                    </a> */}
                  </p>
                  <p>
                    Forgot your password? <span>Recover password</span>
                  </p>
                </div>
              </div>
            </div>
          </Dialog>

          <Dialog
            fullScreen
            open={openSignup}
            className="modal modal"
            onClose={() => setOpenSignup(false)}
          >
            <div className="modal__container">
              <MediaQuery minDeviceWidth={200} device={{ deviceWidth: 1600 }}>
                <div className="modal__sec1">
                  <img src={modalLogo} alt="logo" />
                  <div className="modal__content">
                    <p className="modal__welcome">Welcome Back</p>
                    <p className="modal__signIn">Sign in to continue.</p>
                  </div>
                </div>
              </MediaQuery>
              <div className="modal__sec2">
                <CloseRoundedIcon
                  onClick={() => setOpenSignup(false)}
                />
                <div className="modal__content2">
                  <div className="google__login">
                    <img src={googleLogo} alt="gl" />
                    <p>Continue with Google</p>
                  </div>
                  <div className="modal__seperator">
                    <hr />
                    <p>or</p>
                    <hr />
                  </div>
                  <SignupForm setOpenSignup={setOpenSignup} />
                </div>
                <div className="modal__contentbottom">
                  <hr />
                  <p>
                    By signing up, you're agreeing to our{" "}
                    <span>Terms of Use</span>
                    {/* <a
                      href=""
                      onClick={() => {
                        this.setState2({ open: true }) &&
                          this.setState({ open: false });
                      }}
                    >
                      Sign Up
                    </a> */}
                  </p>
                  <p>
                    Already have an account? <span onClick={() => {setOpen(true); setOpenSignup(false)}}>Log In</span>
                  </p>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
        <div className="home_nav_bar">
          <button
            className="home__login"
            onClick={() => setOpen(true)}
          >
            Log In
          </button>
          <button
            className="home__login"
            onClick={() => {
              setOpenSignup(true);
            }}
          >
            Sign Up
          </button>
        </div>
        <section className="home_firstsection">
          <div className="sec1_content">
            <h1>Bridging companies and campuses to empower students</h1>
            <p>
              Student Nation is creating a future where it is exciting and fair
              to pursue your career in the ever-evolving world of technology.
            </p>
          </div>
          <img src={trees} alt="trees" />
        </section>

        <section className="home_secondsection">
          <div className="sec2_content1">
            <img src={work} alt="work" />
            <p>
              Recent graduates want great jobs. Companies want great talent.
              Student Nation enables collaboration between companies,
              universities and their students by creating an ecosystem of
              opportunities where students are rewarded with opportunities they
              deserve
            </p>
          </div>

          <img src={sec2Img} alt="work1" className="sec2__img" />

          <div className="sec2_content2">
            <h1>Creating an ecosystem of opportunities</h1>
            <p>
              Recruiting is so broken in that it focuses so much on background
              information through resumes rather than the candidate’s actual
              abilities to perform on the job. That’s why millions of great
              candidates are not getting hired and are working multiple jobs to
              make ends meet while 72% of recruiters struggling to find
              qualified candidates.
            </p>
          </div>
          <div className="sec2__ecosystem">
            <img src={ecosystem} alt="ecosystem" />
          </div>
        </section>

        <section className="home_thirdsectionImg">
          <div style={{ textAlign: "center" }}>
            <img src={companiescover} alt="companies" />
            <img src={box} alt="box" className="box__image" />
          </div>
        </section>

        <section className="home_thirdsection">
          <div className="for_cards_container">
            <div className="for_card">
              <img src={forstudents} style={{ width: "80%" }} />
              <h4>For Students</h4>
              <p>
                We help candidates showcase their skills and experience to
                employers as a way to get hired.
              </p>
            </div>
            <div className="for_card">
              <img src={foremployers} style={{ width: "80%" }} />
              <h4>For Employers</h4>
              <p>
                We partner with employers to help companies discover the
                untapped talent.
              </p>
            </div>
            <div className="for_card">
              <img src={forcolleges} style={{ width: "80%" }} />
              <h4>For Colleges</h4>
              <p>
                We collaborate with colleges to transform the educational
                opportunities and introduce student talents to the industry.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default HomeComponent;
