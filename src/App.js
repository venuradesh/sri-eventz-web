import React from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Background from "./Components/Background";
import Feed from "./Components/Feed";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import ChatSection from "./Components/Chat/ChatSection";
import UserProfile from "./Components/Profile/UserProfile";

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
          <Route exact path="/profile/:id">
            <div className="profile">
              <UserProfile />
            </div>
          </Route>
          <Router exact path="/login">
            <Login />
          </Router>
          <Router exact path="/chat">
            <ChatSection />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
