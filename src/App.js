import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage.js";
import Home from "./Pages/Home.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

