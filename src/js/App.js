import React, { Component } from 'react';
import '../assets/App.scss';

import Gallery from './Gallery'
import Nav from './Nav'
import Carousel from './Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Carousel />
        <Gallery />
      </div>
    );
  }
}

export default App;
