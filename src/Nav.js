import React, { Component } from 'react';
import './assets/App.scss';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="media">
          <div className="media-left">
            <a href="#">
              <img className="media-object" src="lens.png" width="64" height="64" alt="" />
            </a>
          </div>
          <div className="media-body">
            <h2 className="media-heading navbar-header">415lens</h2>
            <h6 className="media-heading navbar-text">SF based photography</h6>
          </div>
        </div>
      </nav>
      );
  }
}


