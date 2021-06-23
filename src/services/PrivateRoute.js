import React from "react";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({loginStatus, component: Component, ...rest}) => {

  return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route
          {...rest}
          component={(props) =>
              loginStatus ? <Component {...props} /> : <Redirect to="/" {...props} />
          }
      />
  );
};

export default PrivateRoute;
