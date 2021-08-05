import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// import context
import { AppContext } from "../contexts/GlobalContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [state] = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
