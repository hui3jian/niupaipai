import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

class AuthRouter extends Component {
    render() {
        const { component: Component, ...rest } = this.props;
        const isLogin = sessionStorage.getItem("isLogin") === '1' ? true : false;

        return (
            <Route {...rest} render={props => {
                return isLogin
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            }} />
        )
    }
}

export default withRouter(AuthRouter);