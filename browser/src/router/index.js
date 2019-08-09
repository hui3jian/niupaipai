import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/async-component';

const AuthRouter = asyncComponent(() => import("@/router/authRouter"));
const Login = asyncComponent(() => import("@/pages/Login/login"));
const Home = asyncComponent(() => import("@/pages/Home/home"));
const Sort = asyncComponent(() => import("@/pages/Sort/sort"));
const User = asyncComponent(() => import("@/pages/User/user"));


export default class RouteConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* 自由路由 */}
                    <Route path="/home" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/sort" component={Sort}></Route>
                    <Route path="/find" component={Login}></Route>

                    {/* 需要权限的路由 */}
                    <AuthRouter path="/user" component={User}></AuthRouter>

                    {/* 错误页面的重定向 */}
                    <Redirect exact from="/" to="/home" ></Redirect>
                </Switch>
            </BrowserRouter>
        )
    }
}

