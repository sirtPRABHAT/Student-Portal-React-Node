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

function ExperienceModal({ open, setOpen, years, addExperience, setAddExperience, expData, setExpData, expIndex }) {
    const [checked, setChecked] = useState(false);
    const [checkedTo, setCheckedTo] = useState(false);
    const [loading, setLoading] = useState(false);
    const [max, setMax] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [companyImg, setCompanyImg] = useState('');
    const [desc, setDesc] = useState({})

    useEffect(() => {
        if(Object.keys(expData).length > 0){
            console.log(expData);
            setCompanyName(expData.company.company_title)
            setChecked(expData.working_remotly)
            setCheckedTo(expData.current_working)
            setDesc(expData.description);
            setLoading(false);
        }
    }, [expData])

    const handleDelete = () => {
        RemoveExperience(expData._id)
        .then(res => {
            if(res.success == true){
                var arr = addExperience.filter((e, ind) => ind !== expIndex)
                setAddExperience(arr)
                setOpen(false)
                setCompanyName('')
                setCompanyImg('')
                setDesc({})
                setChecked(false)
                setCheckedTo(false)
                setLoading(false);
                setExpData({})
            }
        })
    }

    const save = (data) => {
        setLoading(true);
        console.log(data);
        console.log(expData);
        data.userid = parseJwt(localStorage.getItem("student-nation.com-tokens"))._id;
        data.expid = expData._id;
        data.companyName = companyName;
        data.companyImg = companyImg;
        data.textarea = desc;
        data.remotely = checked;
        data.current_working = checkedTo;
        data.start_date = data.fromMonth + " " + data.fromYear
        data.end_date = data.toMonth + " " + data.toYear
        if(Object.keys(expData).length > 0){
            UpdateExperience(data).then(resp => {
                console.log(resp);
                if(resp.message == "UPDATED"){
                    var arr = addExperience;
                    arr[expIndex] = resp.exp;
                    setAddExperience(arr);
                    setOpen(false)
                    setLoading(false);
                    setCompanyName('')
                    setCompanyImg('')
                    setChecked(false)
                    setCheckedTo(false)
                    setDesc({})
                    setExpData({})
                }
            })
        } else {
            AddExperience(data).then(resp => {
                if(resp.success == true){
                    setAddExperience([...addExperience, resp.exp])
                    setOpen(false)
                    setLoading(false);
                    setCompanyName('')
                    setCompanyImg('')
                    setDesc({})
                    setChecked(false)
                    setCheckedTo(false)
                    setExpData({})
                    localStorage.setItem("student-nation.com-tokens", resp.token)
                }
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            })
        }
    }

    return (
        <div>
            <Dialog className='experience__modal' fullScreen open={open} onClose={() => {setOpen(false)}}>
                <div className='experience__modal__header'>
                    <h3>Add Experience</h3>
                    <CloseIcon onClick={() => {
                        setOpen(false)
                        setLoading(false);
                        setCompanyName('')
                        setCompanyImg('')
                        setDesc({})
                        setChecked(false)
                        setCheckedTo(false)
                        setExpData({})
                    }} />
                </div>
                <div className='experience__modal__form'>
                    <Formik
                        initialValues={{
                            website: expData.company?.website || '',
                            title: expData.job_title || '',
                            location: expData.company?.location || '',
                            fromMonth: expData.start_date?.split(" ")[0] || '',
                            fromYear: expData.start_date?.split(" ")[1] || '',
                            toMonth: expData.end_date?.split(" ")[0] || '',
                            toYear: expData.end_date?.split(" ")[1] || '',
                            textarea: expData.description || ''
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
                                <label>Company / Organization Name</label>
                                <InputSearch initValue={companyName} setCompanyName={setCompanyName} setCompanyImg={setCompanyImg} />
                                <label>Website</label>
                                <input type='text' name='website' onChange={handleChange} value={values.website} placeholder='https://www.scholarly-science.com' />
                                <label>Title</label>
                                <input type='text' name='title' onChange={handleChange} value={values.title} placeholder='Example: Software Engineer' />
                                <label>Location {checked && <span>(optional)</span>} </label>
                                <input type='text' name='location' onChange={handleChange} value={values.location} placeholder='Add a location' disabled={checked}/>
                                <div className='experience__modal__form__checkbox'>
                                    <Checkbox 
                                        color='primary'
                                        checked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    <p>Worked Remotely</p>
                                </div>
                                <label>From</label>
                                <div>
                                    <select className='select__month mr' value={values.fromMonth} name='fromMonth' onChange={handleChange}>
                                        <option value={values.fromMonth}>{values.fromMonth}</option>
                                        {months?.map(month => <option key={month} value={month}>{month}</option>)}
                                    </select>
                                    <select className='select__month' value={values.fromYear} name='fromYear' onChange={handleChange}>
                                        <option value={values.fromYear}>{values.fromYear}</option>
                                        {years?.map(year => <option key={year} value={year} >{year}</option>)}
                                    </select>
                                </div>
                                {!checkedTo && <label>To</label>}
                                <div>
                                    <select className='select__month mr' name='toMonth' onChange={handleChange} disabled={checkedTo}>
                                        <option value={values.toMonth}>{values.toMonth}</option>
                                        {months?.map(month => <option key={month} value={month}>{month}</option>)}
                                    </select>
                                    <select className='select__month' name='toYear' onChange={handleChange}  disabled={checkedTo}>
                                        <option value={values.toYear}>{values.toYear}</option>
                                        {years?.map(year => <option key={year} value={year} >{year}</option>)}
                                    </select>
                                </div>
                                <div className='experience__modal__form__checkbox'>
                                    <Checkbox 
                                        color='primary'
                                        checked={checkedTo}
                                        onChange={() => setCheckedTo(!checkedTo)}
                                    />
                                    <p>I currently work here</p>
                                </div>
                                <label>Description <span>(optional)</span></label>
                                <div>
                                    <TextEditor name='textarea' setMax={setMax} value={values.textarea} raw={expData.description} setDesc={setDesc} onChange={handleChange} />
                                </div>
                                <div className='experience__button'>
                                    <button disabled={max ||
                                     companyName.length <=0 ||
                                     values.title.length <=0 ||
                                     (checked? false : values.location.length <=0) ||
                                     values.fromMonth.length <=0 || values.fromYear.length <=0 ||
                                     (checkedTo? false : (values.toMonth.length <=0  || values.toYear.length <=0 ))
                                     } type='submit'>
                                        {max ? 'Cannot Save' : loading ? 'Saving...' : 'Save'}
                                    </button>
                                </div>
                                {Object.keys(expData).length > 0 ?
                                    <div className='experience__button'>
                                        <button disabled={max } onClick={handleDelete} style={{background: "red"}}>
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
