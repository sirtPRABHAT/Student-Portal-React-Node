import React from "react";
import { SignUpStudent } from "./components/signup/SignUpStudent";
import { LoginStudent } from "./components/signup/loginStudent";
import { Dashboard } from "./components/dashboard/Dashboard";
import Verification from "./components/signup/verification";
import HomeComponent from "./components/dashboard/homeComponent-new/HomeComponent-new";

import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      auth: true,
    };
  }
  componentWillMount(){
    if(localStorage.getItem("student-nation.com-tokens")){
      this.setState({auth: true})
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return this.state.auth ? (
                // return true ? (
                  <Redirect to="/dashboard/newProfile" />
                ) : (
                  <Redirect to="/signup" />
                );
              }}
            />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={HomeComponent} />
            <Route path="/login" component={LoginStudent} />
            <Route path="/verify/:token" children={<Verification/>} />
          </Switch>
          {/* <SignUpStudent /> */}
          {/* <Dashboard /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
