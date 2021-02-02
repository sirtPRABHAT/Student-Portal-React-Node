import React, { useState, useEffect } from "react";
import "./company-detail.css";
import logo from "../../assets/orig-1.svg";
import error from "../../assets/error.svg";
import SkeletonLoader from "tiny-skeleton-loader-react";
import disableScroll from "disable-scroll";

import { getCompany } from "../backend/apiconnector";

import { Link, useHistory } from "react-router-dom";
const Landing = ({ match, loc }) => {
  // states
  const history = useHistory();
  const [values, setValues] = useState({
    error: "",
    loading: true,
    name: "",
    logo: "",
    number_of_assignments: "",
    openings: "",
    description: "",
    tags: [],
    locations: [],
    company_location: "",
  });

  const {
    name,
    logo,
    number_of_assignments,
    openings,
    description,
    tags,
    locations,
    company_location,
  } = values;

  const { loading } = values; 

  const preload = (companyId) => {
    // const id = '5f4b9501214fb46fbcebb015';
    // console.log(match.params.companyId)
    getCompany(companyId)
      .then((data) => {
        if(data.company.name === match.params.company_name){
          setValues({
            ...values,
            loading: false,
            name: data.company.name,
            logo: data.company.logo,
            number_of_assignments: data.company.number_of_assignments,
            openings: data.company.openings,
            description: data.company.description,
            tags: data.company.tags,
            locations: data.company.locations,
            company_location: data.company.company_location,
          });
        } else {
          history.push("/dashboard/companies")
        }
      })
      .catch((err) => console.log(err));
  };
  // useEffect hook
  useEffect(() => {
    preload(localStorage.getItem("comp.id"));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const removePopup = () => {
    let elem = document.querySelector(".popup");
    elem.classList.add("is-hidden");
    let nav = document.querySelector(".left-sidebar-container");
    nav.style.backgroundColor = "";
    disableScroll.off();
  };
  const addPopup = () => {
    let elem = document.querySelector(".popup");
    elem.classList.add("fadeInclass");
    elem.classList.remove("is-hidden");
    window.scrollTo(0, 0);
    disableScroll.on();

    // let nav = document.querySelector(".left-sidebar-container");
    // nav.style.backgroundColor = "rgba(0, 0, 0, 0.459)";
  };

  const loadContent = () => {
    if (values.loading) {
      return (
        <div className="container2">
          <section className="section__header">
            <Link className="section__header--link" to="/dashboard/companies">
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
                      <SkeletonLoader height="25px" width="250px" />
                    </div>
                    <div className="company__loc">
                      <SkeletonLoader height="20px" width="250px" />
                    </div>
                    <div className="company__para">
                      <SkeletonLoader height="18px" width="200px" />
                    </div>
                    <div className="company__para-1">
                      <SkeletonLoader height="18px" width="200px" />
                    </div>
                  </div>
                </div>
                <br />
                <div className="company__para-1">
                  <SkeletonLoader height="400px" width="100%" />
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    } else {
      return (
        <div className="container2">
          <div className="popup is-hidden ">
            <div className="popup__wrap">
              <div className="popup__warn">
                <img className="popup__img" src={error} alt="img" />
              </div>
              <div className="popup__content">
                <p className="popup__para">
                  In order to know more about the assignments, projects and
                  upcoming placements ensure to complete your profile
                  verification.
                </p>
                <button className="popup__button" onClick={removePopup}>
                  Close
                </button>
              </div>
            </div>
          </div>

          <section className="section__header">
            <Link className="section__header--link" to="/dashboard/companies">
              &#8592; Back
            </Link>
          </section>

          <section className="section__main">
            <div className="section__content">
              <div className="section__description">
                <div className="content__company__wrapper">
                  <div className="heading__wrapper">
                    <h3 className="content__heading">&nbsp;</h3>
                    {(loading &&
                      tags.length > 0 &&
                      tags.indexOf("remote") !== -1) ||
                    tags.indexOf("Remote") !== -1 ? (
                      <span className="content__remote"> Remote</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="content__company">
                    <img className="content__img" src={logo} alt="logo" />
                    <div className="company__desc">
                      <h2 className="company__title">{name}</h2>
                      <div className="company__loc">
                        {JSON.parse(localStorage.getItem("comp.location"))}
                      </div>
                      <p className="company__para">
                        {`${number_of_assignments} Assignment${
                          number_of_assignments > 1 ? "s" : ""
                        }`}
                      </p>
                      <p className="company__para-1">
                        {openings == 0
                          ? "Openings yet to be updated"
                          : openings == 1
                          ? `${openings} opening`
                          : `${openings} openings`}
                      </p>
                    </div>
                  </div>

                  <div>
                    {description.split("\n\n").map((data, index) => (
                      <p className="content__para" key={index}>
                        {data}
                      </p>
                    ))}

                    {/* <div class="box">
                      <div class="text">
                        <p className='heading' style={{marginTop: '0px', marginBottom: '0px', fontSize: '1rem'}}>
                        API Integration
                        </p>

                        <p className='sub' style={{marginTop: '5px', fontWeight: 400, fontSize: '0.9rem'}}>
                        Engineering
                        </p>               
              
                      </div>
                                         
                    </div> */}

                    {/* <div class="box">
                      <div class="text">
                        <p className='heading' style={{marginTop: '0px', marginBottom: '0px', fontSize: '1rem'}}>
                        Full Stack Developer
                        </p>

                        <p className='sub' style={{marginTop: '5px', fontWeight: 400, fontSize: '0.9rem'}}>
                        Web Development
                        </p>               
              
                      </div>
                                         
                    </div>
                */}
                  </div>

                  <div className="btn-view-more">
                        <button className="profile__button" onClick={addPopup}>
                          View more
                        </button>
                      </div>

                </div>
                <br />

                <div className="section__tags">
                  <h3 className="section__tagtitle">Tags:</h3>
                  <div className="section__tags--wrapper">
                    {tags &&
                      tags.map((index, tag) => {
                        if (index !== "remote" && index !== "Remote") {
                          return (
                            <button className="section__tags--button" key={tag}>
                              {index}
                            </button>
                          );
                        }
                      })}
                  </div>
                </div> 

                

                <div className="hallo-container">

                          <div className="apply-container">

                              <div className= "apply-container-header">
                                <div className="apply-container-header-image"></div>
                              </div>

                              <label>
                                <div>Interested in a </div>

                                <div>Career at</div>

                                <div>Awesomely </div>

                                <div>authentic ?</div>                             
                              </label>
                          
                              <p>Click here to let the team know.</p>

                              <button className="uk-button false">View More</button>
                      
                          </div> 

                      </div>

                     
              
              
        
              </div>
            </div>
            
          </section>
        </div>
      );
    }
  };
  return <div>{loadContent()}</div>;
};

export default Landing;
