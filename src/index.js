import React from 'react';
import ReactDOM from 'react-dom';

// 配合applyMiddleware解决redux异步问题
import thunk from 'redux-thunk'
// createStore接受reducer生成stote compose合并生成store其他数据 applyMiddleware接受thunk解决redux异步问题
import { createStore, compose, applyMiddleware } from 'redux'
// Provider负责传递store
import { Provider } from 'react-redux'
// 生成store
import reducer from './redux/reducer';
// 路由模块
import Route from './router'
// 离线数据缓存
import * as serviceWorker from './serviceWorker';

// 基础样式
import '@/assets/less/base.less';
import '@/assets/less/public.less';
import 'antd-mobile/dist/antd-mobile.less'

const store = createStore(reducer, compose(
    applyMiddleware(thunk), //解决redux异步问题
    window.devToolsExtension ? window.devToolsExtension() : f => f // chrome控制台redux工具
))

// 主体入口
const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root')
    );
}

// 注册路由
render(Route)
// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router/', () => {
        render(Route);
    })
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
