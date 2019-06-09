import React, { Component } from 'react';
import '../assets/App.scss';

import Gallery from './component/Gallery'
import Nav from './Nav'

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
