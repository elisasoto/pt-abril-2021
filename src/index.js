import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

// Header
// Route
// routes

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/*Header*/}
      <Switch>
        {routes.map("Route")}
        <Redirect to="/"/>
      </Switch>
      {/*Footer*/}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
