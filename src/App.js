import React from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Background from "./Components/Background";
import Feed from "./Components/Feed";
import Footer from "./Components/Footer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import AboutSection from "./Components/Profile/AboutSection";
import PackageSection from "./Components/Profile/PackageSection";
import Login from "./Components/Login/Login";
import GallerySection from "./Components/Profile/GallerySection";
import TestimonialsSection from "./Components/Profile/TestimonialsSection";
import ContactSection from "./Components/Profile/ContactSection";
import Foot from "./Components/Profile/Foot";

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
            <div className="profile">
              <ProfileContainer />
              <AboutSection />
              <PackageSection />
              <GallerySection />
              <TestimonialsSection />
              <ContactSection />
              <Foot />
            </div>
          </Route>
          <Router exact path="/login">
            <Login />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
