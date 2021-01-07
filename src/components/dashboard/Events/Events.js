import React, { useEffect, useState } from "react";
import "./Events.css";
import { getUpcomingEvents, getEvents } from '../../backend/apiconnector'; 

import EventIcon from "@material-ui/icons/Event";
import { eventData } from "./eventData";
import EventSkeleton from "./EventSkeleton/EventSkeleton";

function Events() {
  const [loading, setLoading] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])

  useEffect(() => {
    // setLoading(true);
    window.scrollTo(0, 0);
    async function openings () {
      var list = await getUpcomingEvents("India",1);
      console.log(list);
      setData(list);
      setLoading(false);
    }
    openings()

    async function events() {
      var events = await getEvents();
      console.log(events)
    }
    events();
  }, []);

  return (
    <div className="events">
      <div className="events__header"></div>
      <div className="events__container">
        <h4>EVENTS</h4>

        <div className="card__section">
          {eventData?.map((item) =>
            loading ? (
              <EventSkeleton key={item.companyName}/>
            ) : (
              <div className="events__card" key={item.companyName}>
                <div className="events__info">
                  <img src={item.banner} alt="banner" />
                  <div className="events__infoContainer">
                    <div
                      className="events__image"
                      style={{ backgroundImage: `url(${item.logoImg})` }}
                    ></div>

                    <div className="events__infoTitle">
                      {item.info}
                      <p>{item.companyName}</p>
                    </div>
                    <div className="type">
                      <EventIcon />
                      {item.date}
                    </div>

                    <div className="events__location"></div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="loadmore" style={{marginTop: "50px"}}>View more</div>
      </div>
      <div className="events__container">
        <h4>UPCOMING EVENTS</h4>

        <div className="card__section">
          {data.length > 0 ? data?.map((item) =>
            loading ? (
              <EventSkeleton key={item.companyName}/>
            ) : (
              <div className="events__card" key={item.companyName}>
                <div className="events__info">
                  <img src={item.Company[0].webBanner} alt="banner" />
                  <div className="events__infoContainer">
                    <div
                      className="events__image"
                      style={{ backgroundImage: `url(${item.Company[0].logo})` }}
                    ></div>

                    <div className="events__infoTitle">
                      {item.title}
                    <p>{"Are You Intersted in anevent with Facebook   ? Let Me Know!"}</p>
                    </div>
                    <div className="events_interested">
                      <button>{true ? "Upvote":"Upvoted"}</button>
                      <span>{`${item.interested} Interested`}</span>
                      
                      </div>
                      <div className="events_interested">
                        {item.tags.map((tag,index)=>(
                                                <div className="events_tag" id={index}>{tag}</div>

                        ))}
                      </div>
                    

                    <div className="events__location"></div>
                  </div>
                </div>
              </div>
            ))
            :
            null
          }
        </div>
        <div className="loadmore">View more</div>
      </div>
    </div>
  );
}

export default Events;
