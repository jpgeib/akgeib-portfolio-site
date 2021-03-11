import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import Art from "../../pages/Art";
import Music from "../../pages/Music";
import Writing from "../../pages/Writing";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/art" component={Art} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/writing" component={Writing} />
      </>
    );
  }
}

export default App;
