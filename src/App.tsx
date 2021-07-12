import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

import "./App.css";
import Product from "./Product";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/product" component={Product} />
  </Switch>
);

export default App;
