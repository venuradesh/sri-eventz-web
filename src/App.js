import React from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Background from "./Components/Background";
import "./styles/app.css";

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
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
