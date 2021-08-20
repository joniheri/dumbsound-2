import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// import context
import { AppContext } from "../contexts/GlobalContext";

// import page
import LoadingTest1 from "../pages/LoadingTest1";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [state] = useContext(AppContext);
  const { isLoading, isLogin } = state;

  return (
    <Route
      // {...rest}
      // render={(props) =>
      //   isLogin ? <Component {...props} /> : <Redirect to="/" />
      // }

      {...rest}
      render={(props) =>
        isLoading ? (
          <LoadingTest1 />
        ) : isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
