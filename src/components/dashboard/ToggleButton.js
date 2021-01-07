import React from "react";
import "./toggle.css";
export const ToggleButton = ({ click }) => {
  return (
    <div className="toggle" onClick={click}>
      <div className="toggle-line"></div>
      <div className="toggle-line"></div>
      <div className="toggle-line"></div>
    </div>
  );
};
