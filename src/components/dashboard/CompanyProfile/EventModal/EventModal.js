import React, { useState, useEffect } from 'react';
import './ExperienceModal.css';
import TextEditor from '../TextEditor/TextEditor';
import { Formik } from 'formik';
import { AddExperience, UpdateExperience, RemoveExperience, parseJwt } from '../../../backend/apiconnector';

import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import { months } from '../NewProfileData';
import InputSearch from './InputSearch';

function EventModal({ open, setOpen, years, addExperience, setAddExperience, expData, setExpData, expIndex }) {
    const [checked, setChecked] = useState(false);
    const [checkedTo, setCheckedTo] = useState(false);
    const [loading, setLoading] = useState(false);
    const [max, setMax] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [companyImg, setCompanyImg] = useState('');
    const [desc, setDesc] = useState({})

    // useEffect(() => {
    //     if (Object.keys(expData).length > 0) {
            
    //     }
    // }, [expData])

    const handleDelete = () => {
        var arr = addExperience.filter((e, ind) => ind !== expIndex)
        setAddExperience(arr)
        setExpData({})
        setOpen(false)
    }

    const save = (data) => {
        console.log(data);

        if (Object.keys(expData).length > 0) {
            var arr = addExperience;
            arr[expIndex] = data;
            setAddExperience(arr);
            setExpData({})
            setOpen(false)
        } else {
            setAddExperience([...addExperience, data])
            setOpen(false)
        }
    }

    return (
        <div>
            <Dialog className='experience__modal' fullScreen open={open} onClose={() => setOpen(false)}>
                <div className='experience__modal__header'>
                    <h3>Add Event</h3>
                    <CloseIcon onClick={() => {
                        setOpen(false)
                        if(Object.keys(expData).length > 0){
                            setExpData({})
                        }
                    }} />
                </div>
                <div className='experience__modal__form'>
                    <Formik
                        initialValues={{
                            banner: expData.banner || "",
                            title: expData.title || "",
                            date: expData.date || ""
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
                                    <label>Event Banner URL</label>
                                    <input type="text" placeholder="Example: Engineer, Analyst..." name="banner" value={values.banner} onChange={handleChange} />
                                    <label>Title</label>
                                    <input type="text" placeholder="Event title" name="title" value={values.title} onChange={handleChange} />
                                    <label>Date of Event</label>
                                    <input type="date" value={values.date} name="date" value={values.date} onChange={handleChange} />
                                    <div className='experience__button'>
                                        <button disabled={max} type='submit'>
                                            {max ? 'Cannot Save' : loading ? 'Saving...' : 'Save'}
                                        </button>
                                    </div>
                                    {Object.keys(expData).length > 0 ?
                                        <div className='experience__button'>
                                            <button disabled={max} onClick={handleDelete} style={{ background: "red" }}>
                                                Delete
                                        </button>
                                        </div>
                                        :
                                        null
                                    }
                                </form>
                            )}
                    </Formik>
                </div>
            </Dialog>
        </div>
    )
}

export default EventModal;
