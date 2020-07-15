import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Stack } from "@ableco/baseline";
import Home from "components/Home";
import Dashboard from "components/Dashboard";

function App() {
  return (
    <Router>
      <Stack as="nav">
        <Stack as="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </Stack>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Stack>
    </Router>
  );
}

export default App;
