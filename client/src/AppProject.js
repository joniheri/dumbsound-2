import React, { useContext, useEffect } from "react";

// import react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

// import components
import PrivateRoute from "./components/PrivateRoute";

// import config
import { API, setAuthToken } from "./config/Api";

// import context
import { AppContext } from "./contexts/GlobalContext";

// import pages
import Beranda from "./pages/Beranda";
import BerandaPublic from "./pages/BerandaPublic";
import AddArtist from "./pages/AddArtist";
import AddMusic from "./pages/AddMusic";
import Transaction from "./pages/Transaction";
import Pay from "./pages/Pay";
import NotFound from "./pages/NotFound";
import NavbarPublic from "./components/NavbarPublic";
import Profile from "./pages/Profile";

// console.log("DataToken: ", localStorage.token);

// CheckTokenInLocalStorageIsExist
if (localStorage.token) {
  setAuthToken(localStorage.token);
  // console.log("DataToken: ", localStorage.token);
}
// EndCheckTokenInLocalStorageIsExist

export default function AppProject() {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

  // console.log("DatStateAppProject: ", state);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      // console.log("ResponLoadUser", response.data.status);
      // console.log("DataResponseAppPjoject: ", response.data);
      if (response.data.status == "Response Failed") {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
      dispatch({
        type: "USER_LOADED",
        payload: response.data.dataUser,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: "AUTH_ERROR",
      });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Router>
      <NavbarPublic />
      <Switch>
        <Route exact path="/" component={BerandaPublic} />
        <PrivateRoute exact path="/beranda" component={Beranda} />
        <PrivateRoute exact path="/pay" component={Pay} />
        <PrivateRoute exact path="/add-artist" component={AddArtist} />
        <PrivateRoute exact path="/add-music" component={AddMusic} />
        <PrivateRoute exact path="/transaction" component={Transaction} />
        <PrivateRoute exact path="/profile" component={Profile} />

        {/* PageNotFound */}
        <Route component={NotFound} />
        {/* PageNotFound */}
      </Switch>
    </Router>
  );
}
