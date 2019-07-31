import React from 'react';
import ReactDOM from 'react-dom';

// 配合applyMiddleware解决redux异步问题
import thunk from 'redux-thunk'
// createStore接受reducer生成stote compose合并生成store其他数据 applyMiddleware接受thunk解决redux异步问题
import { createStore, compose, applyMiddleware } from 'redux'
// Provider负责传递store
import { Provider } from 'react-redux'
// 引入react-router-dom各种路由元素
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 生成store
import reducer from './redux/reducer';
// 离线数据缓存
import * as serviceWorker from './serviceWorker';

// 基础样式
import '@/assets/less/base.less';
import '@/assets/less/public.less';

// 模板组件
import DefaultLayout from '@/layout/default-layout';
import LoginLayout from '@/layout/login-layout';

const store = createStore(reducer, compose(
    applyMiddleware(thunk), //解决redux异步问题
    window.devToolsExtension ? window.devToolsExtension() : f => f // chrome控制台redux工具
))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="app">
                <Route path="/main" component={DefaultLayout}></Route>
                <Route path="/login" component={LoginLayout}></Route>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
