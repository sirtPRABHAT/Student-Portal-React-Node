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
    const [loading, setLoading] = useState(false);
    const [max, setMax] = useState(false);
    const [desc, setDesc] = useState({})

    const handleDelete = () => {
        var arr = addExperience.filter((e, ind) => ind !== expIndex)
        setAddExperience(arr)
        setOpen(false)
        setDesc({})
        setExpData({})
    }

    const save = (data) => {
        console.log(data);
        data.description = desc;

        if (Object.keys(expData).length > 0) {
            var arr = addExperience;
            arr[expIndex] = data;
            setAddExperience(arr);
            setOpen(false)
            setDesc({})
            setExpData({})
        } else {
            setAddExperience([...addExperience, data])
            setOpen(false)
            setDesc({})
        }
    }

    return (
        <div>
            <Dialog className='experience__modal' fullScreen open={open} onClose={() => setOpen(false)}>
                <div className='experience__modal__header'>
                    <h3>Add Event</h3>
                    <CloseIcon onClick={() => {
                        setOpen(false)
                        setDesc({})
                        setExpData({})
                    }} />
                </div>
                <div className='experience__modal__form'>
                    <Formik
                        initialValues={{
                            title: expData.title || "",
                            description: expData.description || ""
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
                                    <label>Title</label>
                                    <input type="text" placeholder="Project title" name="title" value={values.title} onChange={handleChange} />
                                    <div>
                                        <TextEditor name='description' value={values.description} raw={expData.description} setDesc={setDesc} onChange={handleChange}/>
                                    </div>
                                    <div className='experience__button'>
                                        <button disabled={max} type='submit'>
                                            {loading ? 'Saving...' : 'Save'}
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
