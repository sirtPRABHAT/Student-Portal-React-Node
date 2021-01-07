import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import CancelIcon from "@material-ui/icons/Cancel";
import EventIcon from "@material-ui/icons/Event";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import React, { useState } from 'react';
import './Research.css';
import { researchData } from './ResearchData';
import ModalApplyNow from './ModalApplyNow';

function Research() {
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };

      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          //  backgroundColor: theme.palette.background.paper,
          backgroundColor: "#ededed",
       },
      }));

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [modalInfo, setModalInfo] = useState([]);

    const removePopup = () => {
        let elem = document.querySelector(".research__popup");
        elem.classList.add("research__is-hidden");
      };

      const addPopup = (item) => {
        let elem = document.querySelector(".research__popup");
        elem.classList.add("fadeInclass");
        elem.classList.remove("research__is-hidden");
        window.scrollTo(0, 0);
        setModalInfo(item);
      };
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <div className='research'>
        <div className="research__popup research__is-hidden ">
        <div className="research__popup__wrap">
          <div className="research__popup__content">
            <div className="research__popup__contentContainer">
              <div className={classes.root}>
                <div className="research__popupHeaderFixed">
                  <AppBar
                    className="appbar research__popupHeaderFixed"
                     position="static"
                  >
                    <div className="research__popup__contentBanner research__popupHeaderFixed" 
                    style={{backgroundImage: `url(${modalInfo?.modalHeader__Img})`}}>
                      <CancelIcon
                        className="popup__closeBtn"
                        onClick={removePopup}
                      />
                    </div>
                      <div className="researchpopup__heading">
                        {modalInfo?.modalHeader}
                      </div>
                    <Tabs
                      className="tabs"
                      style={{ height: "20px" }}
                      value={value}
                      onChange={handleChange}
                      TabIndicatorProps={{ style: { background: "black" } }}
                      textColor="black"
                      aria-label="simple tabs example"
                    >
                      <Tab
                        className="tab"
                        label="Background"
                        style={{
                          textTransform: "none",
                          paddingTop: "1rem",
                        }}
                        {...a11yProps(0)}
                      />
                      <Tab
                        className="tab"
                        style={{ textTransform: "none", paddingTop: "1rem" }}
                        label="Objectives"
                        {...a11yProps(1)}
                      />
                      <Tab
                        className="tab"
                        style={{ textTransform: "none", paddingTop: "1rem" }}
                        label="Summary"
                        {...a11yProps(2)}
                      />
                    </Tabs>
                  </AppBar>
                  
                </div>
                <div
                  className="projectContentContainer"
                >
                  <TabPanel value={value} index={0}>
                    <div className="research__popupmainContainer">
                      <div className="research__popupLeftContainer">
                        {modalInfo.background?.map(bg => <p>{bg}</p>)}
                      </div>
                      <ModalApplyNow />
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <div className="research__popupmainContainer">
                      <div className="research__popupLeftContainer">
                        {modalInfo.objectiveText && <p>{modalInfo.objectiveText}</p>}
                        <ul>
                          {modalInfo.objectives?.map(obj => <li>{obj}</li>)}
                        </ul>
                      </div>
                      <ModalApplyNow />
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <div className="research__popupmainContainer">
                      <div className="research__popupLeftContainer">
                        <p>
                          {modalInfo.summary1}
                        </p>
                        <p>
                          {modalInfo.summary2}                          
                        </p>
                        {modalInfo.summary_li && <p>Limitations</p>}                        
                        <ul>
                          {modalInfo.summary_li?.map(li => <li>{li}</li>)}
                        </ul>
                        <p>
                          {modalInfo.summary3}
                        </p>
                      </div>
                      <ModalApplyNow />
                    </div>
                  </TabPanel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        <div className='research__navbar'></div>
            <div className='research__container'>
                <div className='research__cards'>
                    {researchData?.map(item => (
                    <div className='research__card' onClick={() => addPopup(item)} key={item.id}>
                        <img src={item.banner} alt='banner' />
                        <p>{item.info}</p>
                    </div>
                    ))}
                </div>
                <button className='research__btn'>View More</button>
            </div>
        </div>
    )
}

export default Research
