import React, { Component } from 'react';
import { connect } from 'react-redux'

import NppCarousel from './components/carousel/npp-carousel';
import './home.less';

class Home extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="home">

                {/* 轮播 */}
                <NppCarousel></NppCarousel>

                {/* 产品入口 */}
                <div className="home__product">
                    <span>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#iconjiqiren"></use>
                        </svg>
                        <font>维修</font>
                    </span>
                    <span>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#iconjingzhunyingxiao"></use>
                        </svg>
                        <font>回收</font>
                    </span>
                    <span>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#iconxingbiao"></use>
                        </svg>
                        <font>换新</font>
                    </span>
                    <span>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#iconguanlibaogao"></use>
                        </svg>
                        <font>刻字</font>
                    </span>
                    <span>
                        <svg className="icon" >
                            <use xlinkHref="#iconzuixinchanpin"></use>
                        </svg>
                        <font>新品</font>
                    </span>
                </div>

                {/* 功能入口 */}
                <div className="home__func">
                    <div className="home__func__left">
                        <a href="/">
                            <span
                                className="adaptive-img"
                                style={{ backgroundImage: `url(${require("../../assets/images/linshi/home_carousel_01.jpg")})` }}
                            >

                            </span>
                            <font>热销</font>
                        </a>
                    </div>
                    <div className="home__func__right">
                        <a href="/">
                            <span
                                className="adaptive-img"
                                style={{ backgroundImage: `url(${require("../../assets/images/linshi/home_carousel_01.jpg")})` }}
                            >
                            </span>
                            <font>热销</font>
                        </a>
                        <a href="/">
                            <span
                                className="adaptive-img"
                                style={{ backgroundImage: `url(${require("../../assets/images/linshi/home_carousel_01.jpg")})` }}
                            >
                            </span>
                            <font>热销</font>
                        </a>
                    </div>
                </div>

                {/* 即将拍卖 */}
                <div className="home__vendue">
                    <h4>即将拍卖</h4>
                    <div class="home__vendue__cont">
                        <ul>
                            <li>
                                <span
                                    className="adaptive-img"
                                    style={{ backgroundImage: `url(${require("../../assets/images/linshi/home_carousel_01.jpg")})` }}
                                >
                                </span>
                                <font>热销</font>
                            </li>
                            <li>
                                <span
                                    className="adaptive-img"
                                    style={{ backgroundImage: `url(${require("../../assets/images/linshi/home_carousel_01.jpg")})` }}
                                >
                                </span>
                                <font>热销</font>
                            </li>
                            <li>
                                <span
                                    className="adaptive-img"
                                    style={{ backgroundImage: `url(${require("../../assets/images/linshi/home_carousel_01.jpg")})` }}
                                >
                                </span>
                                <font>热销</font>
                            </li>
                            <li>
                                <span
                                    className="adaptive-img"
                                    style={{ backgroundImage: `url(${require("../../assets/images/linshi/home_carousel_01.jpg")})` }}
                                >
                                </span>
                                <font>热销</font>
                            </li>
                            <li>
                                <span
                                    className="adaptive-img"
                                    style={{ backgroundImage: `url(${require("../../assets/images/linshi/home_carousel_01.jpg")})` }}
                                >
                                </span>
                                <font>热销</font>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 全部商品 */}
                <div className="home__all">
                    <h4>全部商品</h4>

                </div>
            </div>
        )
    }
}


export default connect()(Home)