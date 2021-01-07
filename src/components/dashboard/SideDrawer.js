import React from "react";
import "./sidedrawer.css";
import Navbar from "./Navbar";

export const SideDrawer = ({ show, click }) => {
  let drawerClass = "drawer";
  if (show) {
    drawerClass = "drawer open";
  }
  return (
    <div className={drawerClass}>
      <Navbar click={click} />
    </div>
  );
};
