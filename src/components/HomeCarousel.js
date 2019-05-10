import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class HomeCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay
              height={"400px"}
              width={"800px"}>
                <div className="banners">
                    <img src="" alt="patreon"/>
                </div>
                <div>
                    <img src="" alt="art"/>
                </div>
                <div>
                    <img src="" alt="photo"/>
                </div>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <img src="" alt=""/>
                </div>
            </Carousel>
        );
    }
};

export default HomeCarousel
