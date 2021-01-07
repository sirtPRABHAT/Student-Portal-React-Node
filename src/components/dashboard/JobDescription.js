import React, { useEffect, useState } from "react";
import "./JobDescription.css";
import { data } from "./jobData";
import { Link, useHistory } from "react-router-dom";
import { useScrollTrigger } from "@material-ui/core";
import { getJobOpening, getCompany } from '../backend/apiconnector';
import {Editor, EditorState, convertFromRaw} from 'draft-js'

function JobDescription(props) {
  const jobid = localStorage.getItem("opening.id");
  const [item, setItem] = useState({})
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    if(history.location.body){
      setItem(history.location.body)
    } else {
      async function opening() {
        var a = await getJobOpening(jobid);
        setItem(a);
        var b = await getCompany(a.companyId);
        var name = a.title.replace(/\s+/g, '-') + "-" + b.company.name.replace(/\s+/g, '-')
        if(jobid && props.match.params.opening_name === name){
          setItem({...a, Company: [b.company]})
        } else {
          history.push("/dashboard/openings")
        }
      }
      opening()
    }
  }, []);

  useEffect(() => {
    console.log(item)
  }, [item])

  return (
    <div className="jobDescription">
        <section
          className="section__header  jobDescription__backbutton "
          style={{
            backgroundImage: `url(${item?.Company ? item.Company[0]?.mobileBanner ? item.Company[0].mobileBanner : '/images/jobopening_banners/Desktop/rtr-banner-2.png' : '/images/jobopening_banners/Desktop/rtr-banner-2.png'})`,
          }}
        >
          <Link
            className="section__header--link  jobDescription__backbtn"
            to="/dashboard/openings"
          >
            &#8592; Back
          </Link>
          <div className="banner-overlay"></div>
        </section>

      <center>
        <div className="jobDescription__header"></div>
      </center>

        <div className="jobDescription__container">
          <img className="mobilebanner__image" src={item.Company ? item.Company[0].logo : ''} alt="" />
          <div
            className="jobDescription__banner"
            style={{ backgroundImage: `url(${item.Company ? item.Company[0].webBanner : ''})` }}
          >
            <div className="color-overlay"></div>
            <img className="banner__image" src={item.Company ? item.Company[0].logo : ''} alt="" />
          </div>
          <div className="jobDescription__title">
            <h1>{item.title}</h1>
            <div className="jobDescription__name">{item.Company ? item.Company[0].name : null}</div>
          </div>

          <div className="jobDescription__desc">
            {item.description ?
              <Editor editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(item.description)))} readOnly={true} />
              :
              null
            }
          </div>

          <div className="jobDescription__work">
            <h2>What You’ll Do :</h2>
            {item.responsibility ?
              <Editor editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(item.responsibility)))} readOnly={true} />
              :
              null
            }
            <div className="jobDescription__error">
              {/* <div className="warning__emoji"> */}
              <img className="warning" src="/images/logos/alert.svg" alt="" />
              <p>
                You have not submitted any assignments and didn't complete the
                registration.
                {/* Ensure the completion to discover your dream
                  opportunities. */}
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
    </div>
  );
}

export default JobDescription;
