import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "components/Home";
import Dashboard from "components/Dashboard";
import { Stack, Flex, Text } from "@ableco/baseline";

function App() {
  return (
    <Router>
      <Flex>
        <Stack as="ul" className="w-48">
          <Text>
            <Link to="/">Home</Link>
          </Text>
          <Text>
            <Link to="/dashboard">Dashboard</Link>
          </Text>
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
      </Flex>
    </Router>
  );
}

export default App;
