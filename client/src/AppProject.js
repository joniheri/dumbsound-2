import React from "react";

// import react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import NavbarPublic from "./components/NavbarPublic";

export default function AppProject() {
  return (
    <Router>
      <NavbarPublic />
      <Switch>
        <Route />
      </Switch>
    </Router>
  );
}
