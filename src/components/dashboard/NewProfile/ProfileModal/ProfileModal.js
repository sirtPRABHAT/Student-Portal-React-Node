import React, { useEffect, useState } from 'react';
import '../ExperienceModal/ExperienceModal.css';
import './ProfileModal.css';
import { Formik } from 'formik';
import PhoneInput from "react-phone-input-2";
import { updateProfile } from '../../../backend/apiconnector';

import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';

function ProfileModal({ openProfile ,setOpenProfile, setUserFirstName, setUserLastName, setAboutUser, user }) {
    const [phone, setPhone] = useState('');
    const [alternatephone, setAlternatePhone] = useState('');

    useEffect(() => {
        setPhone(user.mobile)
        setAlternatePhone(user.altmobile)
    }, [])

    const save = (data) => {
        console.log(data);
        data.userid = user._id;
        data.mobile = phone;
        data.altmobile = alternatephone;
        
        updateProfile(data).then(res => {
            console.log(res)
            if(res.message == 'UPDATED'){
                localStorage.setItem("student-nation.com-tokens", res.token);
                setOpenProfile(false);
                window.location.reload()
            }
        })
    }

    return (
        <Dialog className='profile__modal' fullScreen open={openProfile} onClose={() => setOpenProfile(false)}>
            <div className='profile__modal__header'>
                <h3>Edit Profile</h3>
                <CloseIcon onClick={() => setOpenProfile(false)} />
            </div>
            <div className='profile__modal__form'>
                <Formik
                    initialValues={{
                        firstname: user?.firstname,
                        lastname: user?.lastname,
                        username: user?.username,
                        school: user?.school,
                        gradyear: user?.gradyear,
                        stream: user?.stream,
                        degree: user?.degree,
                        email: user?.email,
                        altemail: user?.altemail,
                        about: user?.aboutme,
                        current_location: user?.current_location
                    }}
                    onSubmit={(data) => save(data)}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        errors,
                        touched
                    }) => (
                        <form onSubmit={handleSubmit}>
                        <div className='profile__modal__form__fullname'>
                            <div>
                                <label>First Name</label>
                                <input type='text' placeholder='John' name='firstname' onChange={handleChange} value={values.firstname} />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type='text' placeholder='Smith' name='lastname' onChange={handleChange} value={values.lastname} />
                            </div>
                        </div>
                        <label>Username</label>
                        <input type='text' placeholder='Enter Your desired username' name='username' onChange={handleChange} value={values.username} />
                        <label>College/University</label>
                        <input type='text' placeholder='Enter Your College/University Name' name='school' onChange={handleChange} value={values.school} />
                        <label>Graduation Year</label>
                        <input type='text' placeholder='Enter graduation year of expected graduation year' name='gradyear' onChange={handleChange} value={values.gradyear} />
                        <label>Degree</label>
                        <input type='text' placeholder='Enter Degree Name like B.E, B.Tech, MA, etc' name='degree' onChange={handleChange} value={values.degree} />
                        <label>Stream</label>
                        <input type='text' placeholder='Enter Field of study' name='stream' onChange={handleChange} value={values.stream} />
                        <label>Current location</label>
                        <input type='text' placeholder='Enter your current residence' name='current_location' onChange={handleChange} value={values.current_location} />
                        <label>Email Address</label>
                        <input type='email' disabled placeholder='johnsmith@gmail.com' name='email' onChange={handleChange} value={values.email} />
                        <label>Alternate Email Address <span>(optional)</span></label>
                        <input type='email' placeholder='johnsmith@gmail.com' name='altemail' onChange={handleChange} value={values.altemail}/>
                        <div className='profile__modal__form__mobile'>
                            <div>
                                <label>Mobile Number</label>
                                <PhoneInput
                                    country='in'
                                    value={phone}
                                    onChange={(num) => setPhone(num)}
                                    countryCodeEditable={false}
                                    containerClass='profile__modal__container'
                                    inputClass='profile__modal__phoneInput'
                                    placeholder='99999 99999'
                                />
                            </div>
                            <div>
                                <label>Alternate Mobile Number <span style={{opacity: 0.6}}>(optional)</span></label>
                                <PhoneInput
                                    country='in'
                                    value={alternatephone}
                                    onChange={(num) => setAlternatePhone(num)}
                                    countryCodeEditable={false}
                                    containerClass='profile__modal__container'
                                    inputClass='profile__modal__phoneInput'
                                    placeholder='99999 99999'
                                />
                            </div>
                        </div>
                        <label>About Me <span>(optional)</span></label>
                        <textarea name='about' onChange={handleChange} value={values.about} />
                        <div className='profile__btn'>
                            <button type='submit'>Save</button>
                        </div>
                    </form>    
                    )}
                </Formik>
            </div>
        </Dialog>
    )
}

export default ProfileModal
