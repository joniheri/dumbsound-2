import React from "react";

// import react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import NavbarPublic from "./components/NavbarPublic";

// import pages
import BerandaPublic from "./pages/BerandaPublic";

export default function AppProject() {
  return (
    <Router>
      <NavbarPublic />
      <BerandaPublic />
      <Switch>
        <Route />
      </Switch>
    </Router>
  );
}
