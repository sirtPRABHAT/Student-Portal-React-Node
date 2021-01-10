import React, { useEffect } from "react";
import WhatsApp from "./NewWhatsApp";
import Projects from "./NewProjects";
import Zoom from './Zoom';
import Cards from './Cards';
import './UtilityBoard.css';
function UtilityBoard(){

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return(
        <div className="utility-component">
            <div className="utility-header"/>
            <Cards/> 
            <Projects/>
            <div className="align-div">
            <div className="illustration1"></div>
            <div className="illustration2"></div>
            </div>
            {/* <WhatsApp/> */}
            <div className="align-div2">
            <Zoom/>
            <div className="illustration3"></div>
            </div>
        </div>
    )
}

export default UtilityBoard;