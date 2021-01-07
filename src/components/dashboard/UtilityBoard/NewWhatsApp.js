import React from 'react';
import './NewWhatsApp.css';

function WhatsApp(){
    return(
        <div className="wa-card shadow">
            <div className="wa-body">
                <p className="wa-title">IMF Design System</p>
                <img src="/images/utility_assets/favicon.ico" className="wa-header-img"/> 
                <p className="wa-body-group-name">Emotion and Experience</p>
                <p className="wa-body-group-info">3 Months Ago • By Dai Jiong</p>
            </div>

            <div className="wa-footer">
                <img src="/images/utility_assets/users.jpg" className="wa-footer-img"/>
                <div className="wa-footer-btn"><p className="wa-footer-btn-text">Join Group</p></div>
            </div>
        </div>
    );
}

export default WhatsApp;