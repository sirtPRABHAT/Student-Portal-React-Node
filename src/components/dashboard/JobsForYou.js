import React from "react";
import "./JobsForYou.css";
import Asset1 from "../../updated__assets/Asset 1.svg";

function JobsForYou() {
  return (
    <div className="jobsForYou">
      <div className="jobsForYou__container">
        <div className="jobsForYou__leftcontainer">
          <img src={Asset1} className="jobsForYou__asset" alt="" />

          <div className="jobsForYou__title">
            <h2>Opportunities personalized for you appear here!</h2>

            <p>
              Complete the registration process so that our algorithm can fetch
              the opportunities personalized for you and explore opportunities
              of your interest.
            </p>
          </div>
        </div>
        {/* <div className="jobsForYou__rightContainer">
          <div className="jobsForYou__svg"></div>
          <div className="jobsForYou__rightContent">
            <div className="jobsForYou__rightTitle">Project-based hiring</div>
            <div className="jobsForYou__rightDesc">
              Complete some of the challenges of your dream companies, submit
              the proposals and get hired
            </div>
            <div className="jobsForYou__submit">Submit proposal</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default JobsForYou;
