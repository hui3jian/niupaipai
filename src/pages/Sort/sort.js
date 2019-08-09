import React, { Component } from 'react';

import NppHeader from '@/components/Header/header'
import NppFooter from '@/components/Footer/footer.js';
import NppDropdown from '@/components/Dropdown/dropdown'
import './sort.less';

export default class Sort extends Component {

    state = {
        sortData: [
            { label: '价格低', value: 1 },
            { label: '价格高', value: 2 },
        ]
    }

    render() {
        return (
            <div className="sort">
                <NppHeader></NppHeader>
                <div className="sort__main">
                    <ul className="sort__filter">
                        <li>
                            <NppDropdown options={this.state.sortData}>
                                <span>
                                    价格
                                        <svg className="icon" aria-hidden="true">
                                        <use xlinkHref="#icon-xia"></use>
                                    </svg>
                                </span>
                            </NppDropdown>
                        </li>
                        <li>
                            <NppDropdown options={this.state.sortData}>
                                <span>
                                    销量
                                        <svg className="icon" aria-hidden="true">
                                        <use xlinkHref="#icon-xia"></use>
                                    </svg>
                                </span>
                            </NppDropdown>
                        </li>
                        <li>
                            <NppDropdown options={this.state.sortData}>
                                <span>
                                    排序
                                        <svg className="icon" aria-hidden="true">
                                        <use xlinkHref="#icon-xia"></use>
                                    </svg>
                                </span>
                            </NppDropdown>
                        </li>
                        <li>
                            <NppDropdown options={this.state.sortData}>
                                <span>
                                    品牌
                                        <svg className="icon" aria-hidden="true">
                                        <use xlinkHref="#icon-xia"></use>
                                    </svg>
                                </span>
                            </NppDropdown>
                        </li>
                    </ul>
                    <div className="sort__card__box">
                        <div>
                            <div className="sort__card">
                                <span className="img"></span>
                                <h4>
                                    挚爱系列
                                </h4>
                                <p>
                                    挚爱系列挚爱系列
                                </p>
                            </div>
                            <div className="sort__card">
                                <span className="img"></span>
                                <h4>
                                    挚爱系列
                                </h4>
                                <p>
                                    挚爱系列挚爱系
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="sort__card">
                                <span className="img"></span>
                                <h4>
                                    挚爱系列
                                </h4>
                                <p>
                                    挚爱系列挚爱系列挚爱系列挚爱系列
                                </p>
                            </div>
                            <div className="sort__card">
                                <span className="img"></span>
                                <h4>
                                    挚爱系列
                                </h4>
                                <p>
                                    挚爱系列挚爱系列挚爱系列挚爱系列
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <NppFooter></NppFooter>
            </div>
        )
    }
}