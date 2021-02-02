import React, { Component, useState } from 'react';
import './ShowCalender.css';
import moment from 'moment';
import Dialog from "@material-ui/core/Dialog";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import MediaQuery, { useMediaQuery } from "react-responsive";

import { Icon, InlineIcon } from '@iconify/react';
import mdPeople from '@iconify/icons-ion/md-people';
import starIcon from '@iconify/icons-feather/star';



import Calender from "./Calender"



  
function ShowCalender() {
    const [openSignup, setOpenSignup] = useState(false)

    return ( 

        <div className="home__modal">

            <button className="home__login" onClick={() => {setOpenSignup(true);}}>
                Calender UI
           </button>

        <Dialog
            fullScreen
            open={openSignup} 
            className="modal modal"
            onClose={() => setOpenSignup(false)}
          >
            <div className="modal__container">

              <div className ="modal__sec2-top">

                <div className="modal__sec2-top-1">
                 <div className="calender-location"> <svg className="sv" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>Amstardem </div>
                 
                  <div className="calender-people"><Icon className="svg-people"  icon={mdPeople} /> 2 </div>
                 
                  <div className="calender-star"> <Icon className= "svg-star" icon = {starIcon} />Star</div>
                </div>
                 
                  
                
              </div>

              <div className ="modal__sec2-middle">

                <div className = "modal__sec2-middle-text">
                  Choose a Date
                </div>

                <div className = "modal__sec2-middle-price">
                  <p>Prices</p>

                  <div className= "Low">
                  <p>Low</p>
                    
                  </div>

                  <div  className= "Mid">
                  Mid
                  </div>

                  <div  className= "High">
                  High
                  </div>

                </div>
                  
                
              </div>



              <div className="modal__sec2-calendar">              
            <Calender mon={0} />
            <Calender mon={1}/>
            <Calender mon={2}/>
            <Calender mon={3}/>
            <Calender mon={4}/>
            <Calender mon={5}/>
            <Calender mon={6}/>
            <Calender mon={7}/>
            <Calender mon={8}/>
            <Calender mon={9}/>
            <Calender mon={10}/>
            <Calender mon={11}/>
                           
              </div>
            </div>
          </Dialog>

           
       
            
        </div>
      
    ) 
}





  export default ShowCalender;



