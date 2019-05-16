import React, { Component } from 'react';
import '../assets/App.scss';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="media">
          <div className="media-body">
            <h2 hidden={true} className="media-heading navbar-header">415lens</h2>
            <h6 hidden={true} className="media-heading navbar-text">An SF Studio</h6>
            <img className="media-heading navbar-img"
                    alt='logo'
                    src={`./415lens-logo-gray.png`}
                />
          </div>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/415lens/" >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </nav>
      );
  }
}


