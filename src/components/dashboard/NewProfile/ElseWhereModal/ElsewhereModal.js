import React, { useState, useEffect } from 'react';
// Experience and Elsewhere has all the classes same
import '../ExperienceModal/ExperienceModal.css';
import { AddElsewhere } from '../../../backend/apiconnector'
import ErrorIcon from "@material-ui/icons/Error";
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import { Formik,Field } from 'formik';
import * as yup from "yup";




function ElsewhereModal({ 
    openElsewhewe, setOpenElsewhewe, setPersonalWebsite, setLinkedinURL, 
    setPassionProject, setGithubURL, setLine, setWeChat,
    personalWebsite, linkedinURL, passionProject, githubURL, line, weChat, user
}) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(user.links){
            Object.keys(user.links).forEach((l, ind) => {
                if(user.links[l] !== ""){
                    switch(l){
                        case "linkedin":
                            setLinkedinURL(user.links[l])
                            break;
                        case "github":
                            setGithubURL(user.links[l])
                            break;
                        case "lineid":
                            setLine(user.links[l])
                            break;
                        case "wechatid":
                            setWeChat(user.links[l])
                            break;
                        case "personal":
                            setPersonalWebsite(user.links[l])
                            break;
                        case "passion":
                            setPassionProject(user.links[l])
                            break;
                    }
                }
            })
        }
    }, [])

    // function validateLinkedin(value) {
    //     console.log('value', value)
    //     let error;
    //     if(value){
    //         if (!value.includes("github")){
    //         error = 'Reqmkmkuired';
    //         }
    //     }
    //     return error;
    //   }

      function validateGithub(value) {
        let error;
        if(value){
            if (!value.includes("github")) {
              error = 'Enter the Correct URL';
            }
        }
        return error;
      }

      const formSchema = yup.object().shape({
        linkedin: yup
          .string()
          .required("Required")
          .matches(/linkedin/, "Invalid URL"),
      });
    
    const save = (data) => {
       
        setLoading(true);
        console.log(data);
        data.userid = user._id;
        
        setPersonalWebsite(data.personal);
        setLinkedinURL(data.linkedin);
        setPassionProject(data.project);
        setGithubURL(data.github);
        setLine(data.lineid);
        setWeChat(data.wechatid);
        
        AddElsewhere(data).then(res => {
            if(res.message == "UPDATED"){
                console.log("UPDATED")
                localStorage.setItem("student-nation.com-tokens", res.token);
                setOpenElsewhewe(false);
                setLoading(false);
            }
        }).catch((err)=>{
            setLoading(false);
        })
       
    }

    return (
        <Dialog className='elsewhere__modal' fullScreen open={openElsewhewe} onClose={() => setOpenElsewhewe(false)}>
            <div className='elsewhere__modal__header'>
                <h3>Edit Links</h3>
                <CloseIcon onClick={() => setOpenElsewhewe(false)} />
            </div>
            <div className='elsewhere__modal__form'>
            <Formik
                initialValues={{
                    github: githubURL,
                    linkedin: linkedinURL, 
                    wechatid: weChat,
                    personal: personalWebsite,
                    project: passionProject,
                    lineid: line,
                }}
                validationSchema={formSchema}
                onSubmit={(data) => save(data)}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched,
                    isValidating
                }) => (
                    <form onSubmit={handleSubmit}>
                        <label>Linkedin URL <span>(optional)</span></label>
                        <Field required type='text' name='linkedin' onChange={handleChange}  value={values.linkedin} placeholder='https://www.scholarly-science.com' />
                        {console.log(touched, errors)}
                        {errors.linkedin && touched.linkedin && 
                        <p className="modal__errors">
                            <ErrorIcon /> {errors.linkedin}
                        </p>
                        }
                        <label>Github URL <span>(optional)</span></label>
                        <Field type='text' name='github' onChange={handleChange} validate={validateGithub} value={values.github} placeholder='https://www.scholarly-science.git' />
                        {errors.github && touched.github && 
                        <p className="modal__errors">
                            <ErrorIcon /> {errors.github}
                        </p>
                        }
                        <label>Line ID <span>(optional)</span></label>
                        <input type='text' name='lineid' onChange={handleChange} value={values.line} placeholder='Worked on something you loved add a link'/>
                        <label>WeChat ID <span>(optional)</span></label>
                        <input type='text' name='wechatid' onChange={handleChange} value={values.weChat} placeholder='https://www.scholarly-science.com' />
                        <label>Personal Website <span>(optional)</span></label>
                        <input type='text' name='personal' onChange={handleChange} value={values.personal} placeholder='https://www.scholarly-science.com'/>
                        <label>Passion Projects <span>(optional)</span></label>
                        <input type='text' name='project' onChange={handleChange} value={values.passion} placeholder='Worked on something you loved add a link'/>
                        <div className='elsewhere__button'>
                          
                            {/* <button disabled={loading} type='submit'>
                                {loading ? 'Saving...' : 'Save'}
                            </button> */}
                            <button  type='submit' disabled={
                                errors.linkedin ||
                                values.linkedin.length <= 0
                            }>
                            
                                {loading ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
            </div>
        </Dialog>
    )
}

export default ElsewhereModal
