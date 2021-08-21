import React, { useContext, useEffect } from "react";

// import react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import NavbarPublic from "./components/NavbarPublic";
import PrivateRoute from "./components/PrivateRoute";

// import config
import { API, setAuthToken } from "./config/Api";

// import context
import { AppContext } from "./contexts/GlobalContext";

// import pages
import BerandaPublic from "./pages/BerandaPublic";
import BerandaAdmin from "./pages/BerandaAdmin";
// import BerandaUser from "./pages/BerandaUser";
import AddArtist from "./pages/AddArtist";
import AddMusic from "./pages/AddMusic";
import Transaction from "./pages/Transaction";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import DetailProduct from "./pages/DetailProduct";
import NotFound from "./pages/NotFound";
import LoadingTest1 from "./pages/LoadingTest1";

// CheckTokenInLocalStorageIsExist
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
// EndCheckTokenInLocalStorageIsExist

export default function AppProject() {
  const [state, dispatch] = useContext(AppContext);

  console.log("DatStateAppProject: ", state);
  // const loadUser = async () => {
  //   try {
  //     const response = await API.get("/check-auth");

  //     console.log("ResponLoadUser", response);

  //     if (response.status === 401) {
  //       return dispatch({
  //         type: "AUTH_ERROR",
  //       });
  //     }

  //     dispatch({
  //       type: "USER_LOADED",
  //       payload: response.data,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: "AUTH_ERROR",
  //     });
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   loadUser();
  // }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BerandaPublic} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/loading1" component={LoadingTest1} />
        <Route
          exact
          path="/detail-product/:idParam"
          component={DetailProduct}
        />
        <Route exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/beranda-admin" component={BerandaAdmin} />
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
