import React from "react";
import "./profile.css";
import PhoneInput from "react-phone-input-2";

import { getProfile, updateProfile } from "../backend/apiconnector";

// import axios from 'axios';

import "react-phone-input-2/lib/style.css";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      // lastName: "",
      email: "",
      alterEmail: "",
      mobile: "",
      alterMobile: "",
      city: "",
      country: "",
      college: "",
      graduationDate: "",
      degree: "",
      major: "",
      linkedIn: "",
      github: "",
      line: "",
      weChat: "",
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }
  componentWillMount() {
    if(localStorage.getItem("student-nation.com-user")&&localStorage.getItem("student-nation.com-tokens")){
      var email = JSON.parse(localStorage.getItem("student-nation.com-user")).email
      getProfile(email).then (res => {
        if(res.status==='success'){
          this.setState({
            fullName: res.user.fullName,
            email: res.user.email,
            alterEmail: res.user.alterEmail || "",
            mobile: res.user.mobile,
            alterMobile: res.user.alterMobile || "",
            city: res.user.city || "",
            country: res.user.country || "",
            college: res.user.college || "",
            graduationDate: res.user.graduationDate || "",
            degree: res.user.degree || "",
            major: res.user.major || "",
            linkedIn: res.user.linkedIn || "",
            github: res.user.github || "",
            line: res.user.line || "",
            weChat: res.user.weChat || ""
          })
        }
      }).catch(err => console.log(err))
    }
    // if(localStorage.getItem("student-nation.com-user")&&localStorage.getItem("student-nation.com-tokens")){
    //   var email = JSON.parse(localStorage.getItem("student-nation.com-user")).email
    //   var tokens = JSON.parse(localStorage.getItem("student-nation.com-tokens"))
    //   axios.post(`${appconfig.apiurl}/auth/getprofile`,{ email: email },{
    //     headers: {
    //       "Authorization" : `Bearer ${tokens.accessToken}` //read token from localstorage here
    //     }
    //   }).then(res => {
    //     if(res.data.status==='success'){
    //       console.log(res.data.user)
    //       this.setState({
    //         fullName: res.data.user.fullName,
    //         email: res.data.user.email,
    //         alterEmail: res.data.user.alterEmail || "",
    //         mobile: res.data.user.mobile,
    //         alterMobile: res.data.user.alterMobile || "",
    //         city: res.data.user.city || "",
    //         country: res.data.user.country || "",
    //         college: res.data.user.college || "",
    //         graduationDate: res.data.user.graduationDate || "",
    //         degree: res.data.user.degree || "",
    //         major: res.data.user.major || "",
    //         linkedIn: res.data.user.linkedIn || "",
    //         github: res.data.user.github || "",
    //         line: res.data.user.line || "",
    //         weChat: res.data.user.weChat || ""
    //       })
    //     }
    //   }).catch(err => console.log(err))
    // }
  }
  onFormSubmit(e) {
    e.preventDefault();

    if(localStorage.getItem("student-nation.com-user")&&localStorage.getItem("student-nation.com-tokens")){
      updateProfile(this.state).then(res => {
        if(res.status==='success'){
            let element = document.querySelector('.success');
            element.classList.remove('hidden');
        }
      }).catch(err => console.log(err))
    }
    // axios.post(`${appconfig.apiurl}/auth/updateprofile`,{
    // 	profile: this.state
    // }).then(res => {
    // 	if(res.data.status==='success'){
    // 		let element = document.querySelector('.success');
    // 		element.classList.remove('hidden');
    // 	}
    // }).catch(err => console.log(err))
    // console.log(this.state)
  }
  render() {
    return (
      <>
        <main className="content">
          <nav className="navbar">
            <h1 className="profile__heading">Profile</h1>
          </nav>
          <div className="main-content-container">
            <section className="profile">
              <form className="profile__form" onSubmit={this.onFormSubmit}>
                <div className="profile__row">
                  <div className="profile__wrap">
                    <label htmlFor="first" className="profile__label">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="profile__input"
                      id="first"
                      value={this.state.fullName}
                      onChange={(e) =>
                        this.setState({ fullName: e.target.value })
                      }
                    />
                  </div>
                  {/* <div className="profile__wrap">
                    <label htmlFor="last" className="profile__label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="profile__input"
                      id="last"
                      value={this.state.lastName}
                      onChange={(e) =>
                        this.setState({ lastName: e.target.value })
                      }
                    />
                  </div> */}
                </div>
                <div className="profile__row">
                  <div className="profile__wrap">
                    <label htmlFor="city" className="profile__label">
                      Email Id
                    </label>

                    <input
                      // disabled={true}
                      type="text"
                      className="profile__input"
                      id="city"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div className="profile__wrap">
                    <label htmlFor="alterEmail" className="profile__label">
                      Alternate Email Id
                    </label>
                    <input
                      type="text"
                      className="profile__input"
                      id="alterEmail"
                      value={this.state.alterEmail}
                      onChange={(e) =>
                        this.setState({ alterEmail: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="profile__row">
                  <div className="profile__wrap">
                    <label htmlFor="aliter" className="profile__label">
                      Mobile Number
                    </label>
                    <div className="profile__input__phone">
                      <PhoneInput
                        country={"in"}
                        // inputStyle={{ width: "100%" }}
                        inputClass='phoneinput'
                        value={this.state.mobile}
                        onChange={(mobile) => this.setState({ mobile })}
                      />
                    </div>
                  </div>
                  <div className="profile__wrap">
                    <label htmlFor="email" className="profile__label">
                      Alternate Mobile Number
                    </label>
                    <div className="profile__input__phone">
                      <PhoneInput
                        country={"in"}
                        // inputStyle={{ width: "100%" }}
                        inputClass='phoneinput'
                        value={this.state.alterMobile}
                        onChange={(alterMobile) =>
                          this.setState({ alterMobile })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="profile__row">
                  <div className="profile__wrap">
                    <label htmlFor="aliter" className="profile__label">
                      City
                    </label>
                    <input
                      type="text"
                      className="profile__input"
                      id="aliter"
                      value={this.state.city}
                      onChange={(e) => this.setState({ city: e.target.value })}
                    />
                  </div>
                  <div className="profile__wrap">
                    <label htmlFor="email" className="profile__label">
                      Country
                    </label>
                    <input
                      type="text"
                      className="profile__input"
                      id="aliter"
                      value={this.state.country}
                      onChange={(e) =>
                        this.setState({ country: e.target.value })
                      }
                    />
                  </div>
                </div>
                <br />
                <h1 className="profile__heading">Education</h1>
                <div className="profile__row">
                  <div className="profile__wrap profile__wrap--full">
                    <label htmlFor="college" className="profile__label">
                      College/University Name
                    </label>
                    <input
                      type="text"
                      className="profile__input"
                      id="college"
                      value={this.state.college}
                      onChange={(e) =>
                        this.setState({ college: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="profile__row">
                  <div className="profile__wrap">
                    <label htmlFor="degree" className="profile__label">
                      Degree
                    </label>
                    <input
                      type="text"
                      className="profile__input"
                      id="degree"
                      value={this.state.degree}
                      onChange={(e) =>
                        this.setState({ degree: e.target.value })
                      }
                    />
                  </div>
                  <div className="profile__wrap">
                    <label htmlFor="grad__date" className="profile__label">
                      Graduation Date
                    </label>
                    <select
                      className="profile__input"
                      id="grad__date"
                      value={this.state.graduationDate}
                      onChange={(e) =>
                        this.setState({ graduationDate: e.target.value })
                      }
                    >
                      <option className="option__heading" value="">
                        Select Graduation Date...
                      </option>
                      <option value="Fall 2023">Fall 2023</option>
                      <option value="Spring 2023">Spring 2023</option>
                      <option value="Spring 2023">Spring 2022</option>
                      <option value="Fall 2022">Fall 2022</option>
                      <option value="Spring 2021">Spring 2021</option>
                      <option value="Fall 2021">Fall 2021</option>
                      <option value="Spring 2020">Spring 2020</option>
                      <option value="Fall 2020">Fall 2020</option>
                      <option value="Spring 2019">Spring 2019</option>
                      <option value="Fall 2019">Fall 2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                    </select>
                  </div>
                </div>
                <div className="profile__row">
                  <div className="profile__wrap profile__wrap--full">
                    <label htmlFor="major" className="profile__label">
                      Major
                    </label>
                    <select
                      className="profile__input"
                      id="major"
                      value={this.state.major}
                      onChange={(e) => this.setState({ major: e.target.value })}
                    >
                      <option value="">Select Major...</option>
                      <option value="Fall 2023">Accounting</option>
                      <option value="Spring 2023">Aerospace Engineering</option>
                      <option value="Spring 2023">Anthropology</option>
                      <option value="Fall 2022">Art History</option>
                      <option value="Spring 2021">Biochemistry</option>
                      <option value="Fall 2021">Bio Informatics</option>
                      <option value="Spring 2020">Biology</option>
                      <option value="Fall 2020">Biomedical Engineering</option>
                      <option value="Spring 2019">Business</option>
                      <option value="Fall 2019">Business Analytics</option>
                      <option value="2018">Chemical Engineering</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="Civil Engineering">
                        Civil Engineering
                      </option>
                      <option value="Coding School">Coding School</option>
                      <option value="Cognitive Science">
                        Cognitive Science
                      </option>
                      <option value="Communication">Communication</option>
                      <option value="Computer Engineering">
                        Computer Engineering
                      </option>
                      <option value="Data Science">Data Science</option>
                      <option value="Earth Science">Earth Science</option>
                      <option value="Economics">Economics</option>
                      <option value="Electrical Engineering">
                        Electrical Engineering
                      </option>
                      <option value="English">English</option>
                      <option value="Environmental Engineering">
                        Environmental Engineering
                      </option>
                      <option value="Environmental Science">
                        Environmental Science
                      </option>
                      <option value="Finanace">Finanace</option>
                      <option value="Fine Art">Fine Art</option>
                      <option value="Gender Studies">Gender Studies</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Health and Human Sciences">
                        Health and Human Sciences
                      </option>
                      <option value="History">History</option>
                      <option value="Human Computer Interaction">
                        Human Computer Interaction
                      </option>
                      <option value="Industrial Engineering">
                        Industrial Engineering
                      </option>
                      <option value="Informatics">Informatics</option>
                      <option value="Information Science">
                        Information Science
                      </option>
                      <option value="International Relations">
                        International Relations
                      </option>
                      <option value="Latin American Studies">
                        Latin American Studies
                      </option>
                      <option value="Linguistics">Linguistics</option>
                      <option value="Management Engineering">
                        Management Engineering
                      </option>
                      <option value="Mechanical Engineering">
                        Mechanical Engineering
                      </option>
                      <option value="Music">Music</option>
                      <option value="Non-Technical Major">
                        Non-Technical Major
                      </option>
                      <option value="Political Science">
                        Political Science
                      </option>
                      <option value="Product Science">Product Science</option>
                      <option value="Psychology">Psychology</option>
                      <option value="Robotics">Robotics</option>
                      <option value="Sociology">Sociology</option>
                      <option value="Software Engineering">
                        Software Engineering
                      </option>
                      <option value="Statistics">Statistics</option>
                      <option value="Theatre">Theatre</option>
                      <option value="Undeclared">Undeclared</option>
                      <option value="Writing">Writing</option>
                      <option value="Animation">Animation</option>
                      <option value="Illustration">Illustration</option>
                      <option value="Visual Effects">Visual Effects</option>
                      <option value="Digital Art">Digital Art</option>
                      <option value="Visual Design">Visual Design</option>
                      <option value="Film/TV">Film/TV</option>
                    </select>
                  </div>
                </div>
                <br />
                <h1 className="profile__heading">On the Web</h1>
                <div className="profile__row">
                  <div className="profile__wrap profile__wrap--full">
                    <label htmlFor="major" className="profile__label">
                      LinkedIn URL
                    </label>
                    <input
                      type="text"
                      className="profile__input"
                      id="major"
                      value={this.state.linkedIn}
                      onChange={(e) =>
                        this.setState({ linkedIn: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="profile__row">
                  <div className="profile__wrap profile__wrap--full">
                    <label htmlFor="major" className="profile__label">
                      Github URL
                    </label>
                    <input
                      type="text"
                      className="profile__input"
                      id="major"
                      value={this.state.github}
                      onChange={(e) =>
                        this.setState({ github: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="profile__row">
                  <div className="profile__wrap profile__wrap--full">
                    <label htmlFor="major" className="profile__label">
                      WeChat ID
                    </label>
                    <input
                      type="text"
                      className="profile__input"
                      id="major"
                      value={this.state.weChat}
                      onChange={(e) =>
                        this.setState({ weChat: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="profile__row">
                  <div className="profile__wrap profile__wrap--full">
                    <label htmlFor="major" className="profile__label">
                      LINE ID
                    </label>
                    <input
                      type="text"
                      className="profile__input"
                      id="major"
                      value={this.state.line}
                      onChange={(e) => this.setState({ line: e.target.value })}
                    />
                  </div>
                </div>
                <br />
                <div className="profile__row">
                  <p className="success hidden">
                    Your profile has been updated!
                  </p>
                  <input
                    type="submit"
                    className="profile__button"
                    value="Update Profile"
                  />
                </div>
              </form>
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default ProfilePage;
