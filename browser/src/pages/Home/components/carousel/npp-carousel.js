import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Carousel } from 'antd-mobile';
import './npp-carousel.less';

export default class NppCarousel extends Component {

    static propTypes = {
        title: PropTypes.string
    }

    state = {
        carouselData: ['1', '2', '3'],
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                carouselData: ['1', '2', '3'],
            });
        }, 100);
    }

    render() {
        return (
            <div className="npp-carousel">
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.carouselData.map((val, index) => (
                        <a
                            key={val}
                            href="/"
                            className={[`npp-carousel__link ${this.state.slideIndex === index ? 'on' : ''}`]}
                        >
                            <span
                                className="adaptive-img"
                                style={{ backgroundImage: `url(${require("../../../../assets/images/linshi/home_carousel_0" + val + ".jpg")})` }}
                            >
                            </span>
                        </a>
                    ))}
                </Carousel>
            </div>
        )
    }
}