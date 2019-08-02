import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/async-component';   

const Login = asyncComponent(() => import("@/pages/Login/login"));
const Home = asyncComponent(() => import("@/pages/Home/home"));

export default class RouteConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>   
                    <Redirect exact from="/" to="/home" ></Redirect>
                </Switch>    
            </BrowserRouter>
        )
    }
}

