import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const isLogin = false;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
