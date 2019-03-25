import React, { Component } from 'react';
import './assets/App.scss';
import './assets/Gallery.scss';

import Tile from './Tile'

export default class Gallery extends Component {
  render() {
    return (
      <div className="container">
          <div className="tiles row">
                {data.map((data) => {
                    return (
                    <div class="col-6 col-sm-3">    
                        <Tile data={data} key={data.id} />
                    </div>
                    )
                })}
            </div>
      </div>
      );
  }
}

const data = [{
    id: 1,
    name: "1",
    image: "https://s3-us-west-2.amazonaws.com/415lens.com/photos/IMG_0053.jpg"
}, {
    id: 2,
    name: "2",
    image: "https://s3-us-west-2.amazonaws.com/415lens.com/photos/IMG_0112.jpg"
}, {
    id: 3,
    name: "3",
    image: "https://s3-us-west-2.amazonaws.com/415lens.com/photos/IMG_0320.jpg"
}, {
    id: 4,
    name: "4",
    image: "https://s3-us-west-2.amazonaws.com/415lens.com/photos/IMG_0573.jpg"
}, {
    id: 5,
    name: "5",
    image: "https://s3-us-west-2.amazonaws.com/415lens.com/photos/IMG_2118.jpg"
}, {
    id: 6,
    name: "6",
    image: "https://s3-us-west-2.amazonaws.com/415lens.com/photos/IMG_2156.jpg"
}, {
    id: 7,
    name: "7",
    image: "https://s3-us-west-2.amazonaws.com/415lens.com/photos/IMG_2324.jpg"
}, {
    id: 8,
    name: "8",
    image: "https://s3-us-west-2.amazonaws.com/415lens.com/photos/IMG_3280.jpg"
}];
