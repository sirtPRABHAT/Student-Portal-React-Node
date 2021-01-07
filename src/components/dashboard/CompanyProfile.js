import React, { useEffect, useState } from 'react';
import './CompanyProfile/NewProfile.css';
import Avatar from '@material-ui/core/Avatar';
import { Badge } from '@material-ui/core';
import { parseJwt, GetExpByUserId, updatePreferenceRoles, updatePreferenceExp, updatePreferenceSkills, updatePreferenceLoc } from '../backend/apiconnector';

import { roles, experience, skills, location, yearsfunc, months } from './CompanyProfile/NewProfileData';
// Modals
import JobModal from './CompanyProfile/ExperienceModal/ExperienceModal';
import EventModal from './CompanyProfile/EventModal/EventModal';
import ProfileModal from './CompanyProfile/ProfileModal/ProfileModal';
import ProjectModal from './CompanyProfile/ProjectModal/ProjectModal';
//Draft-js
import {Editor, EditorState, convertFromRaw} from 'draft-js'
// Images $& Icons
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import AvatarEdit from '../images/newProfile/avatar-edit.png';
import resumeSelected from '../images/newProfile/resume-selected.svg';
import github from '../images/newProfile/github.svg';
import heart from '../images/newProfile/heart.svg';
import linkedin from '../images/newProfile/linkedin.svg';
import personal from '../images/newProfile/personal-website.svg';
import lineimg from '../images/newProfile/line.png';
import { parse } from '@fortawesome/fontawesome-svg-core';

function CompanyProfile() {
    // For Profile and exp modal opening
    const [openProfile, setOpenProfile] = useState(false);
    const [open, setOpen] = useState(false);
    const [jobOpen, setJobOpen] = useState(false);
    const [eventOpen, setEventOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(false);
    // Years
    const [years, setYears] = useState([]);
    //Profile Info is Stored Here 
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [avatar, setAvatar] = useState('')
    const [aboutUser, setAboutUser] = useState('');

    // Added Avatar, Experiences & Resume are stored here
    const [addExperience, setAddExperience] = useState([]);
    const [addJob, setAddJob] = useState([])
    const [addEvent, setAddEvent] = useState([])
    const [addProject, setAddProject] = useState([])
    
    const [expData, setExpData] = useState({})
    const [expIndex, setExpIndex] = useState(0);
    const [jobData, setJobData] = useState({})
    const [jobIndex, setJobIndex] = useState(0);
    const [eventData, setEventData] = useState({})
    const [eventIndex, setEventIndex] = useState(0);
    const [projectData, setProjectData] = useState({})
    const [projectIndex, setProjectIndex] = useState(0);
    let body = {};
    if(localStorage.getItem("student-nation.com-tokens")){
        body = parseJwt(localStorage.getItem("student-nation.com-tokens"));
    }

    useEffect(() => {
        setYears(yearsfunc());
        // var backendroles = await getRoles();
    }, [])

    useEffect(() => {
        console.log("job: ", addJob)
    }, [addJob])

    const openAvatarFile = () => {
        document.getElementById('avatar-file').click();
    }

    const changeAvatar = () => {
        let select = document.getElementById('avatar-file'),
        avatar = select.files[0];
        setAvatar(avatar);
    }

    return (
        <div className='newProfile'>
            <div className='newProfile__container'>
                <section className='newProfile__left'>
                    <div className='newProfile__userBio'>
                        <div>
                            <Badge
                                overlap="circle"
                                anchorOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                                }}
                                badgeContent={
                                    <img onClick={openAvatarFile} 
                                        style={{width: '20px', marginLeft: '-35px', cursor: 'pointer'}} 
                                        src={AvatarEdit} alt='avatar-edit' />
                                }
                            >
                                <input type='file' id='avatar-file' onChange={changeAvatar} style={{display: 'none'}}/>
                                <Avatar alt={userFirstName || 'Akshay'} onClick={openAvatarFile} src='jhcdbjbdcjf'></Avatar>
                            </Badge>
                            <div className='newProfile__userBio__info'>
                                <h4>{body.firstname || "Google"} {body.lastname}</h4>
                                <button className='btn' onClick={() => setOpenProfile(true)} style={{marginTop: '7px'}}>Edit</button>
                                <ProfileModal 
                                    openProfile={openProfile} 
                                    setOpenProfile={setOpenProfile} 
                                    setUserFirstName={setUserFirstName}
                                    setUserLastName={setUserLastName}
                                    setAboutUser={setAboutUser}
                                    user={body}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='newProfile__experience' 
                        style={{
                            background: `${addJob?.length > 0 && '#fff'}`
                        }}
                    >
                        <h1>JOBS</h1>
                        {addJob.length > 0 ? (
                            <div className='experiences__card'>
                                {addJob.map((exp, index) => (
                                    <div key={index}>
                                        <div style={{width: '80%'}}>
                                            <h2>{exp.title}</h2>
                                        </div>
                                        <CreateOutlinedIcon
                                            onClick={() => {
                                                setJobOpen(true)
                                                setJobData(exp)
                                                setJobIndex(index)
                                            }}
                                            className='hide' />
                                    </div>                                    
                                ))}
                                <button onClick={() => setJobOpen(true)}>+ Add Job</button>
                            </div>
                                
                        ) : (
                            <div className='newProfile__experience__bg'>
                                <h3>Add your first Job</h3>
                                <button onClick={() => setJobOpen(true)} className='btn'>Add Job</button>
                            </div>                          
                        )}
                        <JobModal 
                            open={jobOpen} 
                            setOpen={setJobOpen} 
                            years={years}
                            addExperience={addJob}
                            setAddExperience={setAddJob}
                            expData={jobData}
                            setExpData={setJobData}
                            expIndex={jobIndex}
                        />
                    </div>

                    <div className='newProfile__experience' 
                        style={{
                            background: `${addEvent?.length > 0 && '#fff'}`
                        }}
                    >
                        <h1>Events</h1>
                        {addEvent.length > 0 ? (
                            <div className='experiences__card'>
                                {addEvent.map((exp, index) => (
                                    <div key={index}>
                                        <div style={{width: '80%'}}>
                                            <h2>{exp.title}</h2>
                                        </div>
                                        <CreateOutlinedIcon
                                            onClick={() => {
                                                setEventOpen(true)
                                                setEventData(exp)
                                                setEventIndex(index)
                                            }}
                                            className='hide' />
                                    </div>                                    
                                ))}
                                <button onClick={() => setEventOpen(true)}>+ Add Event</button>
                            </div>
                                
                        ) : (
                            <div className='newProfile__experience__bg'>
                                <h3>Add your first event</h3>
                                <button onClick={() => setEventOpen(true)} className='btn'>Add Event</button>
                            </div>                          
                        )}
                        <EventModal
                            open={eventOpen} 
                            setOpen={setEventOpen} 
                            years={years}
                            addExperience={addEvent}
                            setAddExperience={setAddEvent}
                            expData={eventData}
                            setExpData={setEventData}
                            expIndex={eventIndex}
                        />
                    </div>

                    <div className='newProfile__experience' 
                        style={{
                            background: `${addProject?.length > 0 && '#fff'}`
                        }}
                    >
                        <h1>Projects</h1>
                        {addProject.length > 0 ? (
                            <div className='experiences__card'>
                                {addProject.map((exp, index) => (
                                    <div key={index}>
                                        <div style={{width: '80%'}}>
                                            <h2>{exp.title}</h2>
                                        </div>
                                        <CreateOutlinedIcon
                                            onClick={() => {
                                                setProjectOpen(true)
                                                setProjectData(exp)
                                                setProjectIndex(index)
                                            }}
                                            className='hide' />
                                    </div>                                    
                                ))}
                                <button onClick={() => setProjectOpen(true)}>+ Add Project</button>
                            </div>
                                
                        ) : (
                            <div className='newProfile__experience__bg'>
                                <h3>Add your first project</h3>
                                <button onClick={() => setProjectOpen(true)} className='btn'>Add Project</button>
                            </div>                          
                        )}
                        <ProjectModal
                            open={projectOpen} 
                            setOpen={setProjectOpen} 
                            years={years}
                            addExperience={addProject}
                            setAddExperience={setAddProject}
                            expData={projectData}
                            setExpData={setProjectData}
                            expIndex={expIndex}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CompanyProfile;
