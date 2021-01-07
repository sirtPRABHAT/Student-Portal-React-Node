import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./JobOpenings.css";
import { getOpenings, getCompany } from '../backend/apiconnector'; 
import JobOpeningsSkeleton from "./JobOpeningsSkeleton.js";
import InfiniteScroll from "react-infinite-scroll-component";

function JobOpenings() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [data, setData] = useState([])
  const [skeletonArray, setSkeletonArray] = useState([1,1,1,1,1,1,1,1,1])
  const [page, setPage] = useState(1)
  const [finish, setFinish] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  let endCounter = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    async function openings () {
      var list = await getOpenings("all", page);
      console.log(list)
      var arr = list.map(async val => {
        var a = await getCompany(val.companyId)
        return {...val, Company: [a.company]}
      })
      Promise.all(arr).then(res => {
        console.log(res)
        setData(res);
        setDisplayData(res);
        setLoading(false);
      })
    }
    openings()
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleClick = (item) => {
    // history.push(`/openings/:${id}`);
    localStorage.setItem("opening.id", item._id)
    var name = item.title.replace(/\s+/g, '-') + '-' + item.Company[0].name.replace(/\s+/g, '-');
    history.push({
      pathname: "/dashboard/openings/" + name,
      body: item
    });
  };

  const handleViewMore = () => {
    setLoading2(true)
    async function openings () {
      // if(!finish)
      var list = await getOpenings("all", page);
      var arr = list.filter((v) => {
        let unique = true;
        data.forEach(d => {
          if(d._id == v._id){unique=false}
        })
        return unique;
      }).map(async val => {
        var a = await getCompany(val.companyId)
        return {...val, Company: [a.company]}
      })
      Promise.all(arr).then(async res => {
        while(res.length < 9){
          if(endCounter < 5){
            var templist = await getOpenings("all", 1);
            var temparr = templist.filter((v) => {
              let unique = true;
              data.forEach(d => {
                if(d._id === v._id){unique=false}
              })
              res.forEach(d => {
                if(d._id === v._id){unique=false}
              })
              return unique;
            }).map(async val => {
              var a = await getCompany(val.companyId)
              return {...val, Company: [a.company]}
            })
            Promise.all(temparr).then(temparr1 => {
              res = res.concat(temparr1)
              endCounter++;
            })
          } else {
            setLoading2(false)
            setFinish(true)
            setDisplayData([...data, ...res])
            break;
          }
        }
        if(endCounter < 5){
          setPage(page+1);
          setDisplayData([...data, ...res].slice(0,(page+1)*9))
          console.log(res)
          setData([...data, ...res]);
          setLoading2(false);
        }
        // setFinish(true)
      })
    }
    openings()
  }

  return (
    <div className="jobOpenings">
      <div className="jobOpenings__header"></div>
      <div className="jobOpenings__container">
        <h4>OPENINGS OF THE DAY</h4>

        <div className="card__section">
          {data.length > 0 ? displayData.map((item, ind) =>
            loading ? (
              <div
                className="jobOpenings__card">
                <div className="jobOpenings__info">
                  <JobOpeningsSkeleton key={item._id} />
                </div>
              </div>
            ) : (
              <div
                className="jobOpenings__card"
                onClick={() => handleClick(item)}
                key={ind}
              >
                <div className="jobOpenings__info">
                  <div
                    className="jobOpenings__image"
                    style={{
                      backgroundImage: `url(${item?.Company ? item.Company[0]?.logo : ''})`,
                    }}
                  ></div>

                  <div className="jobOpenings__infoTitle">{item?.title}</div>
                  <div className="type">
                  {item?.Company ? item.Company[0]?.name?.length > 15 ? item.Company[0]?.name.slice(0,15) + '...' : item.Company[0]?.name : 'Company'} <span style={{marginLeft: '3px'}}>• {item.type}</span>
                  </div>

                  <div className="jobOpenings__location"></div>
                </div>
              </div>
            )
            )
            :
            skeletonArray.map((val, ind) => <div className="jobOpenings__card" style={{padding: "10px 20px"}}><JobOpeningsSkeleton key={ind} /></div>)}
          {loading2 ? skeletonArray.map((val, ind) => <div className="jobOpenings__card" style={{padding: "10px 20px"}}><JobOpeningsSkeleton key={ind} /></div>) : null}
        </div>
          {finish ? <div className="loadmore">That's all for the day!</div> : <div className="loadmore" onClick={handleViewMore}>View More</div>}        
      </div>
    </div>
  );
}

export default JobOpenings;
