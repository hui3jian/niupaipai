import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { InputItem } from 'antd-mobile';
import './login.less';

class Login extends Component {
    render() {
        return(
            <div className="login">

                <div className="login__panel">
                    <ul className="login__tab">
                        <li className="on">账号登录</li>
                        <li>/</li>
                        <li>验证码登录</li>
                    </ul>
                    <p className="login__tips">注册送当月VIP会员哦！</p>

                    <ol className="login__main typeva">
                        <li><InputItem clear placeholder="请输入您的账号"></InputItem></li>
                        <li><InputItem clear placeholder="请输入您的密码"></InputItem></li>
                    </ol>

                    <div className="login__main typevb">
                    </div>

                    <div className="login__submit">
                        <span className="on">立即登录</span>
                    </div>

                    <div className="login__other">
                        <NavLink to="/forget">忘记密码</NavLink>
                        <NavLink to="/register">立即注册</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect()(Login)