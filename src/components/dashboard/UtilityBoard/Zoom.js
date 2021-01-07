import { rgbToHex } from '@material-ui/core';
import React from 'react';
import './Zoom.css';

function Zoom(){
    return(
        <div className="zoom-div shadow">
            <div className="zoom-header">
                <div className="zoom-logo-card">
                    <img src="/images/utility_assets/logos/zoom.png" className="zoom-img"/>
                    <p className="zoom-name">Zoom</p>
                    <p className="zoom-time">4:30PM</p>
                    <p className="zoom-text">You have an upcoming zoom call for<br/><span className="zoom-company" style={{color:"#2eb28f"}}>Anzo Design</span> at 5:00PM</p>
                </div>
            </div>
            <div className="zoom-id">
                <p className="zoom-id-text"><span style={{fontWeight:650}}>Meeting</span> ID : 987-986-908</p>
            </div>
            <div className="zoom-footer">
                <img src="/images/utility_assets/users_zoom.jpg" className="zoom-footer-img"/>
                <div className="zoom-footer-btn"><p className="zoom-footer-btn-text">Join</p></div>
            </div>
        </div>
    );
}

export default Zoom;