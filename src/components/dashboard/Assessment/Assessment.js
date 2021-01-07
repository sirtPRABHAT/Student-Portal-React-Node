import React from "react";

import "./Assessment.css";
import Assessment__Body from "./Assessment__Body/Assessment__Body";
import Sidebar from "./Sidebar/Sidebar";

function Assessment() {
  return (
    <div className="assessment">
      <div className="assessment__container">
        <Sidebar />
        <Assessment__Body />
      </div>
    </div>
  );
}

export default Assessment;
