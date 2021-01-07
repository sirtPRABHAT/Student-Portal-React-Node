import React, { useState, useEffect } from 'react';
import './ExperienceModal.css';
import TextEditor from '../TextEditor/TextEditor';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AddExperience, UpdateExperience, RemoveExperience, parseJwt } from '../../../backend/apiconnector';

import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import { months } from '../NewProfileData';
import InputSearch from './InputSearch';

function ExperienceModal({ open, setOpen, years, addExperience, setAddExperience, expData, setExpData, expIndex }) {
    const [checked, setChecked] = useState(false);
    const [checkedTo, setCheckedTo] = useState(false);
    const [loading, setLoading] = useState(false);
    const [max, setMax] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [companyImg, setCompanyImg] = useState('');
    const [desc, setDesc] = useState({})
    const [responsibilities, setResponsibilities] = useState({})

    useEffect(() => {
        if (Object.keys(expData).length > 0) {
            console.log(expData)
            setDesc(expData.description)
            setResponsibilities(expData.responsibilities)
        }
    }, [expData])

    const requiredSchema = Yup.object().shape({
        title: Yup.string().required('Required')
    })

    const handleDelete = () => {
        var arr = addExperience.filter((e, ind) => ind !== expIndex)
        setAddExperience(arr)
        setOpen(false)
        setDesc({})
        setResponsibilities({})
        if(Object.keys(expData).length > 0){
            setExpData({})
        }
    }

    const save = (data) => {
        console.log(expData);
        data.description = desc;
        data.responsibilities = responsibilities;
        console.log(data);
        
        if (Object.keys(expData).length > 0) {
            var arr = addExperience;
            arr[expIndex] = data;
            setAddExperience(arr);
            setOpen(false)
            
            setDesc({})
            setResponsibilities({})
            setExpData({})
        } else {
            setAddExperience([...addExperience, data])
            setOpen(false)
            
            setDesc({})
            setResponsibilities({})
        }
    }

    return (
        <div>
            <Dialog className='experience__modal' fullScreen open={open} onClose={() => setOpen(false)}>
                <div className='experience__modal__header'>
                    <h3>Add Job</h3>
                    <CloseIcon onClick={() => {
                        setOpen(false)
                        setDesc({})
                        setResponsibilities({})
                        if(Object.keys(expData).length > 0){
                            setExpData({})
                        }
                    }} />
                </div>
                <div className='experience__modal__form'>
                    <Formik
                        initialValues={{
                            title: expData.title || "",
                            description: expData.description || "",
                            responsibilities: expData.responsibilities || ""
                        }}
                        validationSchema={requiredSchema}
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
                                    <input type="text" name="title" placeholder="Example: Engineer, Analyst..." value={values.title} onChange={handleChange} />
                                    {errors.title ? <label style={{color: "red"}}>title is required</label> : null}
                                    <label>Description</label>
                                    <div>
                                        <TextEditor name='description' setMax={setMax} value={values.description} raw={expData.description} setDesc={setDesc} onChange={handleChange}/>
                                    </div>
                                    <label>Responsibilities</label>
                                    <div>
                                        <TextEditor name='responsibilities' setMax={setMax} value={values.responsibilities} raw={expData.responsibilities} setDesc={setResponsibilities} onChange={handleChange}/>
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

export default ExperienceModal
