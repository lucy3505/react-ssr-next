import React, { useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import NotFount from "./NotFount";
import User from "./User";
import routes from "../core/routes";
export default function App() {
  useEffect(() => {
    console.log("app mounted");
  }, []);
  return (
    <h2 onClick={() => alert("clicked")}>
      <ul>
        <li>
          <NavLink to="/">to Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">to User</NavLink>
        </li>
      </ul>
      <Switch>
        {/* <Route path="/" component={Home} exact />
        <Route path="/user" component={User} />
        <Route component={NotFount} /> */}
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </h2>
  );
}
