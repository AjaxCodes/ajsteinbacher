import React from "react";
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import Projects from "./Projects";

import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/about" component={About} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Main;
