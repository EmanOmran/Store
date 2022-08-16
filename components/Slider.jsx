import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../image/6-slider.webp';
import img2 from '../image/1-slider.jpg';
import img3 from '../image/3-slider.jpg';





function Slider(){
    return (
        <div>
            <Carousel   autoplayInterval={10000}>
                <Carousel.Item>
                    <img  className="d-block w-100 " src={img1} height="600" alt="Img1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img2}  height="600" alt="Img2"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img3} height="600" alt="Img3"/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;