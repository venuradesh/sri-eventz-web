import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Background from "./Components/Background";
import Feed from "./Components/Feed";

import ProfileContainer from "./Components/Profile/ProfileContainer";
import AboutSection from "./Components/Profile/AboutSection";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div className="landing-page">
              <Background />
              <Header />
              <SearchBar />
            </div>
            <Feed />
          </Route>
          <Route exact path="/profile">
            <div className="profile">
             
              <ProfileContainer/>
              <AboutSection/>
              
            </div>
           
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
