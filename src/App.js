import React, { Component } from "react";
import NavigationTop from "./components/NavigationTop";
import { BrowserRouter } from 'react-router-dom';
import Routes from "./components/Routes";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <NavigationTop />
        <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
