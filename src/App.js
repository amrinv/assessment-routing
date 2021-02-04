import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Error from "./components/404error/Error";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="Amrin" />}
          />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route path="/welcome/:name" component={Welcome} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
