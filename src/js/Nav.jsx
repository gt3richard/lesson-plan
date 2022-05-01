import React, { Component } from "react";
import "../assets/style/App.scss";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="media">
          <div className="media-body">
            <h2 hidden className="media-heading navbar-header">
              Lesson Plan
            </h2>
          </div>
        </div>
      </nav>
    );
  }
}
