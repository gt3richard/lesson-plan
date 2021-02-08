import React, { Component } from "react";
import "../assets/style/App.scss";

import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* <Gallery /> */}
      </div>
    );
  }
}

export default App;
