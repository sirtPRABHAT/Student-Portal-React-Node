import React, { useState, useEffect } from "react";
import "./company-detail.css";
import logo from "../../assets/orig-1.svg";
import error from "../../assets/error.svg";
import SkeletonLoader from "tiny-skeleton-loader-react";

import { getCompany } from "../backend/apiconnector";

import { Link } from "react-router-dom";
const Landing =({match, loc})=> {

  // states
  const [values, setValues] = useState({
    error:"",
    loading:true,
    name:"",
    logo:"",
    number_of_assignments:"",
    openings:"",
    description:"",
    tags:[],
    locations:[],
    company_location:""
  })
  
  const {
    name,
    logo,
    number_of_assignments,
    openings,
    description,
    tags,
    locations,
    company_location
  } = values;

  const {loading} = values;

  const preload = (companyId)=>{
    // const id = '5f4b9501214fb46fbcebb015';
    // console.log(match.params.companyId)
    getCompany(companyId).then((data)=>{
      console.log(data)
      setValues({
        ...values, 
        loading:false,
        name:data.company.name,
        logo:data.company.logo,
        number_of_assignments:data.company.number_of_assignments,
        openings:data.company.openings,
        description:data.company.description,
        tags:data.company.tags,
        locations:data.company.locations,
        company_location: data.company.company_location  
      })
      

    })
    .catch(err=>console.log(err))
  }
    // useEffect hook
    useEffect(()=>{
      preload(match.params.companyId);
    },[])

  const removePopup = ()=> {
    let elem = document.querySelector(".popup");
    elem.classList.add("is-hidden");
    let nav = document.querySelector(".left-sidebar-container");
    nav.style.backgroundColor = "";
  }
  const addPopup = ()=> {
    let elem = document.querySelector(".popup");
    elem.classList.remove("is-hidden");
    let nav = document.querySelector(".left-sidebar-container");
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.459)";
  }

  const loadContent = () => {
    if(values.loading) {
      return(
        <div className="container2">
        <section className="section__header">
          <Link className="section__header--link" to="/company">
            Back
          </Link>
        </section>
        <section className="section__main">
          <div className="section__content">
            <div className="section__description">
              <div className="heading__wrapper">
                <h3 className="content__heading">&nbsp;</h3>
              </div>
              {/* <div className="content__company" style={{ marginLeft: '120px', marginTop: '80px', padding: '20px'}}> */}
              <div className="content__company">
                <SkeletonLoader width="75px" height="75px" />
                <div className="company__desc">
                <div className="company__title">
                  <SkeletonLoader height="25px" width="250px"/>
                </div>
                <div className="company__loc">
                  <SkeletonLoader height="20px" width="250px"/>
                </div>
                <div className="company__para">
                  <SkeletonLoader height="18px" width="200px" />
                </div>
                <div className="company__para-1">
                  <SkeletonLoader height="18px" width="200px"/>
                </div>
                </div>
              </div>
              <br />
              <div className="company__para-1">
                <SkeletonLoader height="400px" width="700px"/>
              </div>
            </div>
        </div>
      </section>
      </div>
      )
  }
  else {
    return (
      <div className="container2">
        <div className="popup is-hidden">
          <div className="popup__wrap">
            <div className="popup__warn">
              <img className="popup__img" src={error} alt="img" />
            </div>
            <div className="popup__content">
              <p className="popup__para">
                This email id is not registered with Internshala. To register,
                please click here if you are a student or here if you an
                employer. If you are a T&P head, register here.
              </p>
              <button className="popup__button" onClick={removePopup}>
                Close
              </button>
            </div>
          </div>
        </div>

        <section className="section__header">
          <Link className="section__header--link" to="/company">
            Back
          </Link>
        </section>

        



        <section className="section__main">
          <div className="section__content">
            <div className="section__description">
              <div className="heading__wrapper">
                <h3 className="content__heading">&nbsp;</h3>
                  {
                    loading && 
                    tags.length>0 && 
                    tags.indexOf("remote") !== -1 || tags.indexOf("Remote") !== -1 ? 
                      (<span className="content__remote"> Remote</span>)
                    :
                      ""
                  }
              </div>
              <div className="content__company content__container">
                <img className="content__img" src={logo} alt="logo" />
                <div className="company__desc">
                  <h2 className="company__title">{name}</h2>
                  <div className="company__loc">{JSON.parse(match.params.location)}</div>
                  <p className="company__para">
                    {`${number_of_assignments} Assignment${number_of_assignments>1?'s':''}`}
                  </p>
                  <p className="company__para-1">
                    {openings === 0 ? 
                      "Openings yet to be updated" : 
                      openings===1?`${openings} opening` : `${openings} openings`}</p>
                </div>
              </div>
              
              <br />

              <div className="section__tags">
                <h3 className="company__loc">Tags:</h3>
                <div className="section__tags--wrapper">
                  {tags && tags.map((index,tag) => {
                    if(index !== 'remote' && index !== 'Remote'){
                      return(
                      <button style={{ padding: '5px' }}className="section__tags--button" key={tag}>{index}</button>
                      )
                    }
                  })}
                </div>

            </div>
              {description.split('\n\n').map((data,index)=>(
                
                  <p className="content__para" key={index}>
                  {data}
                  </p>
                
              ))}
              
            </div>
            
          </div>
          <div className="content__para design__change">
            <button className="profile__button" onClick={addPopup}>
              Apply
            </button>
          </div>
        </section>
      </div>
    )
  }
}
    return <div>{loadContent()}</div>
}

export default Landing;