import React from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Background from "./Components/Background";
import Feed from "./Components/Feed";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
