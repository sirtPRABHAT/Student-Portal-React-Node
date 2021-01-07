import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ToggleButton } from "./ToggleButton";
import { SideDrawer } from "./SideDrawer";
import Tour from 'reactour';
import { Backdrop } from "./Backdrop";
import { Company } from "./Company";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { Discover } from "./Discover";
import Profile from "./Profile";
import "./dashboard.css";
import { useHistory } from 'react-router-dom';
import HomeComponent from "./homeComponent-new/HomeComponent-new";
import Landing from "./CompanyDetail";
import JobOpenings from "./JobOpenings";
import JobDescription from "./JobDescription";
import JobsForYou from "./JobsForYou";
import EmployeeReferrals from "./EmployeeReferrals";
import Description from "./Description";
import Home from "./Home";
import ProjectDescription from "./UtilityBoard/ProjectDescription"
import Events from "./Events/Events.js";
import Assessment from "./Assessment/Assessment";

import { SignUpStudent } from "../signup/SignUpStudent";
import Assessment__Body from "./Assessment/Assessment__Body/Assessment__Body";
import Assignments from "./Assignments/Assignments";
import Research from "./Research/Research";
import Projects from "./Projects/Projects";
import NewProfile from "./NewProfile/NewProfile";
import CompanyProfile from "./CompanyProfile";
import StudentAssessment from "./StudentAssessment/StudentAssessment";
import UtilityBoard from "./UtilityBoard/UtilityBoard";

export const Dashboard = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [auth, setAuth] = useState(false)
  const [isTourOpen, setIsTourOpen] = useState(false);
  const history = useHistory()
  const steps = [
    {
      selector: ".company-item",
      content: () => (
        <p>search for new companies here!</p>
      ),
      style: {
        backgroundColor: '#fff',
        padding: '20px 60px',
        margin: '10px 0',
        margin: '10px 0',
        borderRadius: '8px'
      },
      action: (node) => {
        if(!isToggle){
          setIsToggle(!isToggle)
        }
      }
    },
    {
      selector: ".events-item",
      content: () => (
       <p>Many companies organises events from time to time. Check those out!</p>
      ),
      style: {
        backgroundColor: '#fff',
        padding: '20px 60px',
        margin: '10px 0',
        borderRadius: '8px'
      },
      action: (node) => {
        if(!isToggle){
          setIsToggle(!isToggle)
        }
      }
    },
    {
      selector: ".openings-item",
      content: () => (
        <p>Find job openings of the day, here</p>
      ),
      style: {
        backgroundColor: '#fff',
        padding: '20px 60px',
        margin: '10px 0',
        borderRadius: '8px'
      },
      action: (node) => {
        if(!isToggle){
          setIsToggle(!isToggle)
        }
      }
    },
    {
      selector: ".jobs-item",
      content: () => (
        <p>Job openings as per your personal preferences</p>
      ),
      style: {
        backgroundColor: '#fff',
        padding: '20px 60px',
        margin: '10px 0',
        borderRadius: '8px'
      },
      action: (node) => {
        if(!isToggle){
          setIsToggle(!isToggle)
        }
      }
    },
    {
      selector: ".assignment-item",
      content: () => (
        <p>Complete assignments related to your domain to increase your chances of getting short listed for the job</p>
      ),
      style: {
        backgroundColor: '#fff',
        padding: '20px 60px',
        margin: '10px 0',
        borderRadius: '8px'
      },
      action: (node) => {
        if(!isToggle){
          setIsToggle(!isToggle)
        }
      }
    },
    {
      selector: ".profile-item",
      content: () => (
        <p>Maintain your profile so that employers can get to know your skills and experiences</p>
      ),
      style: {
        backgroundColor: '#fff',
        padding: '20px 60px',
        margin: '10px 0',
        borderRadius: '8px'
      },
      action: (node) => {
        if(!isToggle){
          setIsToggle(!isToggle)
        }
      }
    },
    {
      selector: ".newProfile__preference",
      content: () => (
        <p>filter opportunities with custom preferences</p>
      ),
      style: {
        backgroundColor: '#fff',
        padding: '20px 60px',
        margin: '10px 0',
        borderRadius: '8px'
      },
      action: (node) => {
        if(isToggle){
          setIsToggle(!isToggle)
        }
      }
    },
    {
      selector: ".newProfile__right__elsewhere",
      content: () => (
        <p>Add external profile links to add to your portfolio</p>
      ),
      style: {
        backgroundColor: '#fff',
        padding: '20px 60px',
        margin: '10px 0',
        borderRadius: '8px'
      },
    }
  ]

  useEffect(() => {
    if(localStorage.getItem("student-nation.com-tokens")){
      setAuth(true);
    } else {
      history.push("/signup")
    }

    if(history.location.signedup){
      if(!(window.innerWidth <= 1150)){
        setIsTourOpen(true);
      } else {
        setIsToggle(!isToggle);
        setIsTourOpen(true);
      }
    }
  }, [])

  let backDrop;
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const clickBackDrop = () => {
    setIsToggle(false);
  };

  if (isToggle) {
    backDrop = <Backdrop click={clickBackDrop} />;
  }
  return (
    <Switch>
      {/* <Route path="/" component={SignUpStudent} /> */}
      <Route exact path="/dashboard/assessment/:id" component={Assessment} />
      <Route exact path="/dashboard/assessment" component={Assessment} />

      <Route exact path="/dashboard/homecomponent" component={HomeComponent} />
      <div className="main-dash-container">
        <div className="left-sidebar-container">
          <Navbar />
        </div>
        <div className="dash-container">
          <Tour
            maskClassName="tour-mask"
            highlightedMaskClassName="highlighted"
            lastStepNextButton={<button className="tour-last-step" onClick={() => {setIsTourOpen(false)}}>Finish</button>}
            scrollDuration={5}
            isOpen={isTourOpen}
            showNumber={false}
            steps={steps}
            onRequestClose={()=>{setIsTourOpen(false)}} />
          <div className="mobile hidenav">
            <ToggleButton click={handleToggle} />
            <SideDrawer show={isToggle} click={clickBackDrop} />
            {backDrop}
          </div>
          <div className="dash__component">
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/dashboard/profile" />;
              }}
            />
            <Route exact path="/dashboard/home" component={Home} />
            <Route exact path="/dashboard/events" component={Events} />
            <Route exact path="/dashboard/utilityboard" component={UtilityBoard} />
            <Route exact path="/dashboard/utilityboard/projectDescription" component={ProjectDescription} />
            <Route exact path="/dashboard/companies" component={Company} />
            <Route exact path="/dashboard/discover" component={Discover} />
            <Route exact path="/dashboard/openings" component={JobOpenings} />
            <Route exact path="/dashboard/assignments" component={Assignments} />
            <Route exact path="/dashboard/research" component={Research} />
            <Route exact path="/dashboard/projects" component={Projects} />
            <Route exact path="/dashboard/newProfile" render={(props) => <NewProfile {...props} setIsTourOpen={setIsTourOpen} />}/>
            <Route
              exact
              path="/dashboard/student/assessment/:id"
              component={StudentAssessment}
            />
            <Route
              exact
              path="/dashboard/description"
              component={Description}
            />
            <Route exact path="/dashboard/jobs" component={JobsForYou} />
            <Route
              exact
              path="/dashboard/referrals"
              component={EmployeeReferrals}
            />
            <Route exact path="/dashboard/profile" component={Profile} />
            <Route
              exact
              path="/dashboard/openings/:opening_name"
              component={JobDescription}
            />
            <Route
              exact
              path="/dashboard/companies/:company_name"
              component={Landing}
            />
            <Route
              exact
              path="/dashboard/company/profile"
              component={CompanyProfile}
            />
          </div>
        </div>
      </div>
    </Switch>
  );
};
