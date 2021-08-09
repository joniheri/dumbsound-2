import React from "react";

// import react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import NavbarPublic from "./components/NavbarPublic";
import PrivateRoute from "./components/PrivateRoute";

// import pages
import BerandaPublic from "./pages/BerandaPublic";
import AddArtist from "./pages/AddArtist";
import AddMusic from "./pages/AddMusic";
import Transaction from "./pages/Transaction";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import DetailProduct from "./pages/DetailProduct";
import NotFound from "./pages/NotFound";

export default function AppProject() {
  return (
    <Router>
      <NavbarPublic />
      {/* <BerandaPublic /> */}
      <Switch>
        <Route exact path="/" component={BerandaPublic} />
        <Route exact path="/product" component={Product} />
        <Route
          exact
          path="/detail-product/:idParam"
          component={DetailProduct}
        />
        <Route exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/add-artist" component={AddArtist} />
        <PrivateRoute exact path="/add-music" component={AddMusic} />
        <PrivateRoute exact path="/transaction" component={Transaction} />

        {/* PageNotFound */}
        <Route component={NotFound} />
        {/* PageNotFound */}
      </Switch>
    </Router>
  );
}
