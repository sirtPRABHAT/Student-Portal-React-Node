import React, { Component, useState } from 'react';
import './ShowCalender.css';
import moment from 'moment';
import Dialog from "@material-ui/core/Dialog";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import MediaQuery, { useMediaQuery } from "react-responsive";

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


          



        
{/* 
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
            <Calender mon={11}/> */}
            
            {/* <Calender />
            <Calender />
            <Calender />
            <Calender />
            <Calender />
            <Calender />
            <Calender />
            <Calender/>
            <Calender />
            <Calender /> */}
  
            
        </div>
      
    ) 
}





  export default ShowCalender;



