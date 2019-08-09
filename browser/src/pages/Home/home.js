import React, { Component } from 'react';
import { connect } from 'react-redux'
import $request from '@/utils/request'

import NppCarousel from './components/carousel/npp-carousel';
import NppList from './components/list/npp-list';
import NppFooter from '@/components/Footer/footer.js';
import NppHeader from '@/components/Header/header.js';
import './home.less';

class Home extends Component {

    state = {
        listData: []
    }

    componentWillMount() {
        this.GET_LIST_DATA();
    }

    componentWillUnmount() {
        this.setState = (state, cb) => {
            return;
        }
    }

    // 获取列表数据
    GET_LIST_DATA() {
        $request.post('/creativity/findCreativityByType.jhtml?type=0&pageSize=16&pageNumber=1', {}).then(res => {
            if (res.success) {
                const data = res.returnValue.data || []
                this.setState({
                    listData: data
                })
            }
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="home">

                {/* 头部搜索栏 */}
                <NppHeader className="typevb"></NppHeader>

                {/* 轮播 */}
                <NppCarousel></NppCarousel>

                {/* 产品入口 */}
                <div className="home__product">
                    <span>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#iconjiqiren"></use>
                        </svg>
                        <font>评估</font>
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
                        <font>收藏</font>
                    </span>
                    <span>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#iconguanlibaogao"></use>
                        </svg>
                        <font>趋势</font>
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
                                style={{ backgroundImage: `url(${require("../../assets/images/linshi/zhibojian.jpg")})` }}
                            >

                            </span>
                            <font>直播间 一 物品拍卖中</font>
                        </a>
                    </div>
                    <div className="home__func__right">
                        <a href="/">
                            <span
                                className="adaptive-img"
                                style={{ backgroundImage: `url(${require("../../assets/images/linshi/jingping.jpg")})` }}
                            >
                            </span>
                            <font>精选哦！</font>
                        </a>
                        <a href="/">
                            <span
                                className="adaptive-img"
                                style={{ backgroundImage: `url(${require("../../assets/images/linshi/jianlouwang.jpg")})` }}
                            >
                            </span>
                            <font>捡漏吧！</font>
                        </a>
                    </div>
                </div>

                {/* 即将拍卖 */}
                <div className="home__vendue">
                    <h4>即将拍卖</h4>
                    <div className="home__vendue__cont">
                        <ul>
                            <li>
                                <span
                                    className="adaptive-img"
                                    style={{ backgroundImage: `url(${require("../../assets/images/linshi/tuijian01.jpg")})` }}
                                >
                                </span>
                                <font>热销</font>
                            </li>
                            <li>
                                <span
                                    className="adaptive-img"
                                    style={{ backgroundImage: `url(${require("../../assets/images/linshi/tuijian02.jpg")})` }}
                                >
                                </span>
                                <font>热销</font>
                            </li>
                            <li>
                                <span
                                    className="adaptive-img"
                                    style={{ backgroundImage: `url(${require("../../assets/images/linshi/tuijian03.jpg")})` }}
                                >
                                </span>
                                <font>热销</font>
                            </li>
                            <li>
                                <span
                                    className="adaptive-img"
                                    style={{ backgroundImage: `url(${require("../../assets/images/linshi/tuijian01.jpg")})` }}
                                >
                                </span>
                                <font>热销</font>
                            </li>
                            <li>
                                <span
                                    className="adaptive-img"
                                    style={{ backgroundImage: `url(${require("../../assets/images/linshi/tuijian02.jpg")})` }}
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
                    <NppList options={this.state.listData} />
                </div>

                <NppFooter></NppFooter>
            </div>
        )
    }
}


export default connect()(Home)