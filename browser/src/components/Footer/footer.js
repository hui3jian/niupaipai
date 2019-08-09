import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './footer.less';

class NppFooter extends Component {

    render() {

        return (
            <footer className="footer">
                <ul>
                    <li>
                        <NavLink to="/home">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-dianpu"></use>
                            </svg>
                            <p>
                                首页
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sort">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-guanli"></use>
                            </svg>
                            <p>
                                分类
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/push">
                            <span className="footer__circle__box">
                                <span className="footer__circle">
                                    <svg className="icon" aria-hidden="true">
                                        <use xlinkHref="#icon-daohang"></use>
                                    </svg>
                                </span>
                            </span>
                            <p>推送</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/find">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-fenceng"></use>
                            </svg>
                            <p>
                                发现
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-saolianshibie"></use>
                            </svg>
                            <p>
                                我的
                            </p>
                        </NavLink>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default NppFooter;