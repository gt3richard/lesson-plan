import React, { Component } from 'react';
import '../assets/App.scss';

export default class Hero extends Component {
    constructor(props) {
        super(props);
    }
     

    render() {
        // Modify styles based on state values
        let tileStyle = {};
        let size = '';

        if(window.innerWidth <= 760) {
            tileStyle = {
                width: '500px',
                height: '500px'
            };
            size = '500x500'
        }
        else {
            tileStyle = {
                width: '1000px',
                height: '1000px'
            };
            size = '1000xnull'
        }
        
        return (
            <div className="hero">
                <img src={`./photos/${size}/${this.props.image}`}
                    style={tileStyle}
                />
            </div>
        );
    }
}