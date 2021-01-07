import React, { useEffect, useState } from 'react';
import '../ExperienceModal/ExperienceModal.css';
import './ProfileModal.css';
import { Formik } from 'formik';
import PhoneInput from "react-phone-input-2";
import { updateProfile } from '../../../backend/apiconnector';
import PrefSearch from '../PreferenceModal/PrefSearch';

import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';

const ct = ['Bangalore', 'Mumbai', 'Kolkata', 'Hyderabad', 'Chennai', 'Gurgaon', 'Noida', 'Ahmedabad', 'Jaipur']

function ProfileModal({ openProfile ,setOpenProfile, user }) {
    const [cities, setCities] = useState(ct);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")

    const handleAddCity = () => {
        var arr = selectedCities;
        arr.unshift(city);
        setCities([city, ...cities]);
        setSelectedCities(arr);
    }

    const save = (data) => {
        console.log(data);
        // data.userid = user._id;
        
        // updateProfile(data).then(res => {
        //     console.log(res)
        //     if(res.message == 'UPDATED'){
        //         localStorage.setItem("student-nation.com-tokens", res.token);
        //         setOpenProfile(false);
        //         window.location.reload()
        //     }
        // })
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
                        name: "",
                        logo: "",
                        webbanner: "",
                        mobilebanner: "",
                        openings: 0,
                        assignments: "",
                        description: "",
                        tag: "",
                        city: ""
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
                        <label>Company Name</label>
                        <input type='text' placeholder='Enter company name' name='name' onChange={handleChange} value={values.username} />
                        <label>Logo</label>
                        <input type='text' placeholder='Enter Your desired username' name='logo' onChange={handleChange} value={values.username} />
                        <label>Web Banner URL</label>
                        <input type='text' placeholder='Enter url for web banner' name='webbanner' onChange={handleChange} value={values.webbanner} />
                        <label>Mobile Banner URL</label>
                        <input type='text' placeholder='Enter url for mobile banner' name='mobilebanner' onChange={handleChange} value={values.mobilebanner} />
                        <label>No. of openings</label>
                        <input type='number' placeholder='Enter url' name='opening' onChange={handleChange} value={values.school} />
                        <label>No. of assignments</label>
                        <input type='number' placeholder='Enter graduation year of expected graduation year' name='gradyear' onChange={handleChange} value={values.gradyear} />
                        <label>Description</label>
                        <textarea name='description' onChange={handleChange} value={values.description} />
                        <div className='preference__modal__roles'>
                            <h5>Tags</h5>
                            <PrefSearch pref={tags} placeholder="tag" selectedTags={selectedTags} set={setSelectedTags} />
                            <div>
                                {tags?.map((pref, ind) => (
                                    <p
                                        key={ind}
                                        className={ selectedTags?.includes(pref) ? 'preference__modal__roles__role__selected' : 'preference__modal__roles__role'}
                                        onClick={() => {
                                            if(selectedTags.indexOf(pref) !== -1){
                                                var arr = selectedTags?.filter((t) => t !== pref)
                                                setSelectedTags(arr);
                                            } else {
                                                setSelectedTags([pref, ...selectedTags])
                                            }

                                        }}>{pref}</p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h5>Location</h5>
                            {countries.map(val => (<p></p>))}
                            <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="city"/>
                            <input type="text" name="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="state"/>
                            <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="country"/>
                            <button type="button" onClick={handleAddCity}>Add city</button>
                            <div>
                                {selectedCities?.map((city, ind) => (
                                    <p
                                        key={ind}
                                        className='preference__modal__roles__role__selected'
                                        onClick={() => {
                                            if(selectedCities.indexOf(city) !== -1){
                                                var arr = selectedCities?.filter((t) => t !== city)
                                                setSelectedCities(arr);
                                            } else {
                                                setSelectedCities([city, ...selectedCities])
                                            }

                                        }}>{city}</p>
                                ))}
                            </div>
                        </div>
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

const tags = ["Remote", "Artificial Intelligence", "Machine Learning", "Fintech", "Edtech", "SaaS", "Software as a Service", "Big Data",
"E-Commerce", "E-learning", "Financial Services", "Logistics", "Supply Chain"];

const countries = ["Asia", "Africa", "Europe", "North America", "South America", "Autralia"]

export default ProfileModal
