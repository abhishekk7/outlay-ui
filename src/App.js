import React, { Component } from "react";
import NavigationTop from "./components/NavigationTop";
import Routes from "./components/Routes";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationTop />
        <Routes />
      </div>
    );
  }
}

export default App;
