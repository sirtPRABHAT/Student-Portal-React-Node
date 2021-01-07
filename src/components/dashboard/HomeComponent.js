import React, { useEffect } from "react";
import "./HomeComponent.css";

import asset1 from '../images/asset1.svg';
import asset2 from '../images/asset2.svg';
import asset3 from '../images/asset3.svg';
import asset4 from '../images/asset4.svg';
import asset5 from '../images/asset5.svg';
import asset6 from '../images/asset6.svg';
import asset7 from '../images/asset7.svg';
import asset8 from '../images/asset8.svg';
import asset9 from '../images/asset9.svg';
import asset10 from '../images/asset10.svg';
import asset11 from '../images/asset11.svg';
import asset12 from '../images/asset12.svg';
import asset13 from '../images/asset13.svg';

import disableScroll from "disable-scroll";

function HomeComponent() {
  useEffect(() => {
    disableScroll.off();
  }, []);
  return (
    <div className="home">
      <div className="home__content">
        {/* <p className="home__title">
          Stop searching for opportunities. <br /> Let companies discover you,
          not viceversa
        </p> */}
        <img src={asset1} className="asset1" width="50"/>
        <img src={asset2} className="asset2" width="40"/>
        <img src={asset3} className="asset3" width="50"/>
        <img src={asset4} className="asset4" width="60"/>
        <img src={asset5} className="asset5" width="45"/>
        <img src={asset6} className="asset6" width="45"/>
        <img src={asset7} className="asset7" width="55"/>
        <img src={asset8} className="asset8" width="40"/>
        <img src={asset9} className="asset9" width="55"/>
        <img src={asset10} className="asset10" width="35"/>
        <img src={asset11} className="asset11" width="35"/>
        <img src={asset12} className="asset12" width="40"/>
        <img src={asset13} className="asset13" width="35"/>
        <div className="title__container">
          <p className="title">
            Stop searching for opportunities. <br /> Let companies discover you,
            not viceversa
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
