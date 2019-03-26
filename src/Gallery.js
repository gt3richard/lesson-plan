import React, { Component } from 'react';
import './assets/App.scss';
import './assets/Gallery.scss';

import Tile from './Tile'
import { images } from './Images.js'

export default class Gallery extends Component {
  render() {
    return (
      <div className="container">
          <div className="tiles row">
                {images.map((data) => {
                    return (
                    <div className="col-4 col-sm-3 col-lg-4" key={data.id}>    
                        <Tile data={data} />
                    </div>
                    )
                })}
            </div>
      </div>
      );
  }
}

