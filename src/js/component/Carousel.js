import React, { Component } from 'react';
import '../../assets/App.scss';
import '../../assets/Carousel.scss';

export default class Carousel extends Component {
    
    render() {
        const size = window.innerWidth <= 760 ? '500x500' : '1000xnull'

        return (
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={`./photos/${size}/gt3_1.jpg`} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                <img src={`./photos/${size}/lagunaseca_1.jpg`} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                <img src={`./photos/${size}/porsche_1.jpg`} className="d-block" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        );
    }
}