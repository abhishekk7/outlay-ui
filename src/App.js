import React, { Component } from "react";
import NavigationTop from "./components/NavigationTop";
import Routes from "./components/Routes";
import Loader from "react-loader-spinner";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationTop />
        <Routes />
        <Loader 
         type="Puff"
         color="#00BFFF"
         height="100"	
         width="100"
      /> 
      </div>
    );
  }
}

export default App;
