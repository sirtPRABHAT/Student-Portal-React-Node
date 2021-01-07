import React from "react";
import home from "../../assets/icons8-home.svg";
import discover from "../../assets/icons8-compass-24.png";
import user from "../../assets/icons8-user-male-30.png";
import setting from "../../assets/icons8-gear-16.png";
import noti from "../../assets/icons8-notification-24.png";
import jobsforyou from "../../assets/jobsforyou.png";
import jobopenings from "../../assets/jobopenings.png";
import plan from "../../assets/plan.png";
import { Link, withRouter } from "react-router-dom";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return {
      // backgroundColor: "rgb(255, 231, 235)",
      borderLeft: "5px solid #516cf0",
      // textDecoration: "none",
      fontWeight: "700",
      color: "#516cf0",
      background: "none",
      // color: "black",
    };
  } else {
    return {
      textDecoration: "none",
      // color: "#788699"
      color: "black",
      fontSize: "16px",
      // lineHeight: "28px",
      fontWeight: "400",
      fontFamily: "Inter,Helvetica,sans-serif",
      borderBottom: "0",
      background: "white",
    };
  }
};

const Navbar = ({ history, click }) => {
  return (
    <>
      <div className="header">
        {/* <div className="logo">Logo</div>
        <div className="top-icons1">
          <img src={setting} alt="setting" height="20" width="20" />
        </div>
        <div className="top-icons2">
          <img src={noti} alt="noti" height="20" width="20" />
        </div> */}
      </div>
      <div className="nav-items">
        {/* <Link to="/dashboard/home" style={{ textDecoration: "none" }}>
          <div
            className="home-item"
            style={currentTab(history, "/dashboard/home")}
            onClick={click}
          >
            <img
              src={home}
              alt="home"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>Home</span>
          </div>
        </Link> */}
        <Link to="/dashboard/utilityboard" style={{ textDecoration: "none" }}>
          <div
            className="company-item"
            onClick={click}
            style={currentTab(history, "/dashboard/utilityboard")}
          >
            <img
              src={home}
              alt="home"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link to="/dashboard/companies" style={{ textDecoration: "none" }}>
          <div
            className="company-item"
            onClick={click}
            style={currentTab(history, "/dashboard/companies")}
          >
            <img
              src={home}
              alt="home"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>Companies</span>
          </div>
        </Link>
        <Link to="/dashboard/events" style={{ textDecoration: "none" }}>
          <div
            className="events-item"
            onClick={click}
            style={currentTab(history, "/dashboard/events")}
          >
            <img
              src={home}
              alt="home"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>Events</span>
          </div>
        </Link>
        {/* <Link to="/dashboard/discover" style={{ textDecoration: "none" }}>
          <div
            className="discover-item"
            onClick={click}
            style={currentTab(history, "/dashboard/discover")}
          >
            <img
              src={discover}
              alt="home"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>Discover</span>
          </div>
        </Link> */}
        <Link to="/dashboard/openings" style={{ textDecoration: "none" }}>
          <div
            className="openings-item"
            onClick={click}
            style={currentTab(history, "/dashboard/openings")}
          >
            <img
              src={jobopenings}
              alt="home"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>Job Openings</span>
          </div>
        </Link>
        <Link to="/dashboard/jobs" style={{ textDecoration: "none" }}>
          <div
            className="jobs-item"
            onClick={click}
            style={currentTab(history, "/dashboard/jobs")}
          >
            <img
              src={jobsforyou}
              alt="jobs"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>Jobs for you</span>
          </div>
        </Link>
        <Link to="/dashboard/description" style={{ textDecoration: "none" }}>
          <div
            className="description-item"
            onClick={click}
            style={currentTab(history, "/dashboard/description")}
          >
            <img
              src={plan}
              alt="description"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>Projects</span>
          </div>
        </Link>
        <Link to="/dashboard/new-projects" style={{ textDecoration: "none" }}>
          <div
            className="description-item"
            onClick={click}
            style={currentTab(history, "/dashboard/new-projects")}
          >
            <img
              src={plan}
              alt="description"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>NEW Projects</span>
          </div>
        </Link>
        <Link to="/dashboard/assignments" style={{ textDecoration: "none" }}>
          <div
            className="description-item"
            onClick={click}
            style={currentTab(history, "/dashboard/assignments")}
          >
            <img
              src={discover}
              alt="referrals"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>Assignments</span>
          </div>
        </Link>
        <Link to="/dashboard/research" style={{ textDecoration: "none" }}>
          <div
            className="description-item"
            onClick={click}
            style={currentTab(history, "/dashboard/research")}
          >
            <img
              src={discover}
              alt="referrals"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>Research</span>
          </div>
        </Link>
        <Link to="/dashboard/projects" style={{ textDecoration: "none" }}>
          <div
            className="description-item"
            onClick={click}
            style={currentTab(history, "/dashboard/projects")}
          >
            <img
              src={discover}
              alt="referrals"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>Projects</span>
          </div>
        </Link>
        <Link to="/dashboard/newProfile" style={{ textDecoration: "none" }}>
          <div
            className="description-item"
            onClick={click}
            style={currentTab(history, "/dashboard/newProfile")}
          >
            <img
              src={discover}
              alt="referrals"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>New Profile</span>
          </div>
        </Link>
        <Link to="/dashboard/profile" style={{ textDecoration: "none" }}>
          <div
            className="username-item"
            onClick={click}
            style={currentTab(history, "/dashboard/profile")}
          >
            <img
              src={user}
              alt="home"
              height="25"
              width="25"
              className="icons-nav"
            />
            <span>{localStorage.getItem("student-nation.com-user")?JSON.parse(localStorage.getItem("student-nation.com-user")).fullName:`My Profile`}</span>
          </div>
        </Link>
      </div>
    </>
  );
};
export default withRouter(Navbar);
