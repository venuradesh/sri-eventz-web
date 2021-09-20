import React from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Background from "./Components/Background";
import Feed from "./Components/Feed";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Footer from "./Components/Footer";

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
            <Footer />
          </Route>
          <Route exact path="/profile">
            <ProfileContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
