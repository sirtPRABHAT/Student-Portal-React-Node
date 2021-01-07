import React, { useEffect, useState } from "react";
import "./StudentAssessment.css";
import StudentAssessmentBody from "./StudentAssessmentBody";
import StudentSidebar from "./StudentSidebar";
import { useHistory, useParams } from "react-router-dom";
import { getQuestionsByRole, getAssignmentRoles, parseJwt } from '../../backend/apiconnector';

import disableScroll from "disable-scroll";
import { CodeSharp, SettingsSystemDaydream, SettingsSystemDaydreamTwoTone } from "@material-ui/icons";
//Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function StudentAssessment() {
  let history = useHistory();
  const [assignment, setAssignment] = useState({})
  const [label, setLabel] = useState('')
  const [qn, setQn] = useState([]);
  const [qnLen, setQnLen] = useState(0);
  const [qnIndex, setQnIndex] = useState(0);
  const [role, setRole] = useState(null);
  const [showQns, setShowQns] = useState(false);
  const [data, setData] = useState([])
  let { id } = useParams()
  const [error, setError] = useState(false);
  const [expiry, setExpiry] = useState(false);
  const [reasons, setReasons] = useState([]);
  const [days, setDays] = useState(0);
  const [submitDate, setSubmitDate] = useState(null);
  var body = localStorage.getItem("student-nation.com-tokens") ? parseJwt(localStorage.getItem("student-nation.com-tokens")) : undefined;
  var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0],
  windowWidth = w.innerWidth || e.clientWidth || g.clientWidth; //window width
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  useEffect(() => {
    if(body){
      const requiredFields = ['school', 'stream', 'gradyear', 'degree', 'mobile']
      const reason = []
      var diffTime = Math.abs(Date.now() - new Date(body.createdAt))
      var diffDays = Math.ceil(diffTime/(1000 * 60 * 60 * 24))
      setSubmitDate(new Date(new Date(body.createdAt).getTime() + 7*(1000 * 60 * 60 * 24)))
      setDays(diffDays);
        if(diffDays > 7){
            setExpiry(true);
        }
        let allowed = true;
        let numberOfLinks = 0;
        requiredFields.forEach(val => {
            if(!body[val]){
                allowed = false;
                reason.push(`${val} is required in your profile`);
            }
        })

        Object.keys(body.links).forEach(val => {
            if(body.links[val]){
                numberOfLinks++;
            }
        })
        if(numberOfLinks < 2) {
            allowed = false;
            reason.push("atleast two social media links are required")
        }
        if(!allowed){
            setError(true);
            setReasons(reason);
        }
    }
    
    async function getQuestions() {
      var d = await getQuestionsByRole(id)
      setData(d.data)
      setQnLen(d.data.length)
      setQn(d.data[0])
    }
    getQuestions();

    getAssignmentRoles().then(resp => {
      resp.data.forEach(val => {
        if(val._id == id){
          setLabel(val.label)
        }
      })
    })
  }, [])

  const removePopup = () => {
    let elem = document.querySelector(".assessment__popup");
    elem.classList.add("assessment__is-hidden");
    disableScroll.off();
  };
  const addPopup = () => {
    let elem = document.querySelector(".assessment__popup");
    elem.classList.add("fadeInclass");
    elem.classList.remove("assessment__is-hidden");
    window.scrollTo(0, 0);
    disableScroll.on();
  };

  return (
    <div className="studentAssessment">
      {windowWidth > 568?
        showQns ? (
          <div>
            <div className="assessment__popup is-hidden ">
              <div className="assessment__popup__wrap">
                <div className="assessment__popup__content">
                  <p className="assessment__popup__para">
                    {`Your deadline to submit this interview is ${submitDate?.getDate()} ${monthNames[submitDate?.getMonth()]} ${submitDate?.getFullYear()}. All of your answers have been saved.`}
                  </p>
                  <div className="assessment__popup__buttons">
                    <button
                      className="assessment__popup__button"
                      onClick={() => {history.goBack()}}
                    >
                      Complete Later
                    </button>
                    <button
                      className="assessment__popup__button"
                      onClick={removePopup}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="studentAssessment__header">
              <div className="studentAssessment__headerName"></div>
              <div className="studentAssessment__headerOptions">
                <div className="studentAssessment__submitOptions">
                  <button
                    className="studentAssessment__submitOption"
                    onClick={() => {history.goBack()}}
                  >
                    <span>Complete Later</span>
                  </button>
                  <button className="studentAssessment__submitOption">
                    <span>Submit </span>
                  </button>
                </div>
              </div>
            </div>
            {/* <div>{data.length > 0 ? data.map(val => <p>{val.question.statement}</p>) : null}</div> */}
            <div className="studentAssessment__body">
              <StudentSidebar
                ques={data}
                setQn={setQn}
                setQnIndex={setQnIndex}
                setQnLen={setQnLen}
                setRole={setRole}
              />
              <StudentAssessmentBody
                setQn={setQn}
                setQnIndex={setQnIndex}
                ques={data} qn={qn}
                qnsLen={qnLen}
                assignment={assignment}
                setAssignment={setAssignment}
                qnIndex={qnIndex} />
            </div>
          </div>
        ) : (
          <div className="startAssessmentBody">
            <div className="startAssessmentContainer">
              <h1>{label}</h1>
              <h3>{!expiry ? `Submit assignment before ${submitDate?.getDate()} ${monthNames[submitDate?.getMonth()]} ${submitDate?.getFullYear()}` : null}</h3>
              <h3 style={{margin: '0'}}>{ !expiry ? `Your free trial expires in ${7 - days} days` : null}</h3>
              {error || expiry ?
                  expiry ?
                      <div>
                          <h3>Your 1 week trial has been expired. Upgrade to premium version to continue your progress</h3>
                          <div>
                              <button onClick={() => {history.push("/dashboard/newProfile")}} className="error-popup-button">Upgrade to Premium</button>
                          </div>
                      </div>
                      :
                      <div>
                          <h3>Complete your profile</h3>
                          {reasons.map((val, ind) => (
                              <p key={ind}>{ind + 1}. {val}</p>
                          ))}
                          <p>Please make the necessary changes and update your profile before submitting assignments</p>
                          <div>
                              <button onClick={() => {history.push("/dashboard/newProfile")}} className="error-popup-button">OK</button>
                          </div>
                      </div>
                    :
                    <div>
                      <p>
                        Thank you for your interest in a position at{" "}
                        <span>Scholarly Science</span>. To assess your skills for this
                        role, we request that you complete an online interview.
                      </p>
                      <p>
                        This interview includes job-related questions that may be answered
                        in a variety of ways (e.g., video, audio, text). It's an
                        opportunity to demonstrate how you would handle real-world
                        scenarios in this role. Feel free to complete this interview at
                        home at a time that works for you.
                      </p>
                      <p>We look forward to seeing your answers!</p>
                      <p>
                        - The <span>Scholarly Science</span> Team
                      </p>
                      <button
                        className="startAssessmentButton"
                        disabled={expiry}
                        onClick={() => setShowQns(true)}
                      >
                        Start
                      </button>
                    </div>
                  }
                </div>
            </div>
        )
        :
        <div>
          <div className="studentAssessment__Unavailable">
            <p>Sorry, this feature is not available in mobile view</p>
            <button onClick={() => history.push('/dashboard/newprofile')}><FontAwesomeIcon icon={faArrowLeft}/> Back to Dashboard</button>
          </div>
        </div>
      }
    </div>
  );
}

export default StudentAssessment;
