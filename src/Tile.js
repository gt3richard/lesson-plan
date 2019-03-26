import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import './assets/App.scss';
import 'react-image-lightbox/style.css';

export default class Tile extends Component {
    constructor(props) {
            super(props);
            this.state = {
                open: false,
                mouseOver: false
            };
            // Bind properties to class instance
            this._clickHandler = this._clickHandler.bind(this);
            this._mouseEnter = this._mouseEnter.bind(this);
            this._mouseLeave = this._mouseLeave.bind(this);
        }
        // Event handlers to modify state values
    _mouseEnter(e) {
        e.preventDefault();
        if (this.state.mouseOver === false) {
            this.setState({
                mouseOver: true
            })
        }
    }
    _mouseLeave(e) {
        e.preventDefault();
        if (this.state.mouseOver === true) {
            this.setState({
                mouseOver: false
            })
        }
    }
    _clickHandler(e) {
        e.preventDefault();
        if (this.state.open === false) {
            this.setState({
                open: true
            });
        } else {
            this.setState({
                open: false
            });
        }
    }

    render() {
        // Modify styles based on state values
        let tileStyle = {};
        tileStyle = {
            width: '18vw',
            height: '18vw'
        };

        const size = window.innerWidth <= 760 ? '200x200' : '500x500'
        console.log(window.innerWidth)
        return (
            <div className="tile">
                <img className="rounded mx-auto d-block"
                    onMouseEnter={this._mouseEnter}
                    onMouseLeave={this._mouseLeave}
                    onClick={this._clickHandler}
                    src={`./photos/${size}/${this.props.data.image}`}
                    alt={this.props.data.name}
                    style={tileStyle}
                />
                {this.state.open && (
                    <Lightbox
                        mainSrc={`./photos/original/${this.props.data.image}`}
                        onCloseRequest={() => this.setState({ open: false })}
                    />
                )}
            </div>
        );
    }
}