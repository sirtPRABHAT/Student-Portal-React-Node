import React from "react";
import { Card } from "./Card";
import Select from "react-select";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllCompanies } from "../backend/apiconnector";
import SkeletonLoader from "tiny-skeleton-loader-react";

import countrydata from "../../assets/countries.json";

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      companies: [],
      filter: localStorage.getItem("scholarly-filter")
        ? localStorage.getItem("scholarly-filter")
        : "all",
      page: 1,
      hasMore: true,
      loading: true,
      countries: countrydata,
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.nextscroll = this.nextscroll.bind(this);
    this.companycheck = this.companycheck.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // if(localStorage.getItem("scholarly-filter")){
    //   this.setState({filter: localStorage.getItem("scholarly-filter")})
    // }
    this.nextscroll();
  }

  handleFilterChange = (filter) => {
    localStorage.setItem("scholarly-filter", filter.value);
    console.log(filter.value);
    this.setState(
      {
        filter: filter.value,
        companies: [],
        page: 1,
        loading: true,
        countries:[...this.state.countries,filter.value]
      },
      () => {
        this.nextscroll();
      }
    );
    console.log(filter);
  };

  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  companycheck(comp) {
    var complist = this.state.companies;
    for (let i = 0; i < complist.length; i++) {
      if (complist[i]._id === comp._id) return true;
    }
    return false;
  }

  nextscroll() {
    getAllCompanies(this.state.page, this.state.filter)
      .then((data) => {
        console.log(data)
        var nextPageNumber =
          data.companies.length < 8 ? this.state.page : this.state.page + 1;
        var companylist = this.state.companies;
        // console.log(data.companies.length)
        this.shuffleArray(data.companies).forEach((comp) => {
          var duplicate = false;
          if (!this.companycheck(comp)) companylist.push(comp);
        });
        let compLocFilter = [];
        companylist.forEach(company => {
          let duplicate = false;
          let locationss = [];
          company.locations.forEach((locc,i) => {
            company.locations.slice(0,i).forEach(val => {
              if((locc.city === val.city && locc.state === val.state)){
                duplicate=true;
              }
            })
            if(!duplicate){
              locationss.push(locc)
            }
          })
          compLocFilter.push({...company, locations: locationss});
        })
        this.setState({
          status: data.status,
          companies: compLocFilter,
          hasMore: data.companies.length < this.state.page*8 ? false : true,
          page: nextPageNumber,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <h1>Companies</h1>
          <div className="location-dropdown">
            <Select
              options={this.state.countries}
              className="loc-drop"
              value={this.state.filter}
              onChange={(e)=>this.handleFilterChange(e)}
              placeholder={
                this.state.filter === "all"
                  ? "Select the location.."
                  : this.state.filter
              }
            />
          </div>
        </nav>
        <div className="main-content-container">
          <div className="cards">
            <InfiniteScroll
              dataLength={this.state.companies.length}
              next={this.nextscroll}
              hasMore={this.state.hasMore}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <div className="all-cards"> 
                {this.state.companies.length > 0 ?
                this.state.companies.map((comp) => {
                  return (
                    <Card key={comp._id} comp={comp} loc={this.state.filter} />
                  );
                })
                :
                [1,1,1,1,1,1,1,1,1].map(() => (
                  <div className="card-container"> 
                    <div className="details">
                      <SkeletonLoader width="75px" height="75px" />
                      <div className="main-detail">
                        <div className="comp-name">
                          <SkeletonLoader height="30px" />
                        </div>
                        <div className="location">
                          <SkeletonLoader height="1.5625rem" />
                        </div>
                        <div className="people">
                          <SkeletonLoader height="1.4375rem" />
                        </div>
                        <div className="no-of-jobs">
                          <SkeletonLoader height="1.4375rem" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* {this.state.hasMore && this.state.companies.length > 0 && (
                <p style={{ textAlign: "center" }}>
                  <b>Loading ...</b>
                </p>
              )} */}
            </InfiniteScroll>
          </div>
        </div>
      </>
    );
  }
}
export { Company };
