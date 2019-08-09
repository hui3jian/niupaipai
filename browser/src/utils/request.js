import axios from 'axios';
import qs from 'qs'
import helper from './helper';

// 配置axios默认参数
axios.defaults.baseURL = 'http://192.168.1.30:8080/';
axios.defaults.timeout = 600000;
axios.defaults.withCredentials = true; // 表示跨域请求时是否需要使用凭证
axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

//http request 拦截器
axios.interceptors.request.use(
    config => {
        // if(token){
        //   config.params = {'token':token}
        // }
        // console.log(config)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // 接口失败统一错误
        statusCode();

        // 对权限过期的，跳转登录页，重新登录获取权限。
        if (error.response.status && error.response.status === 401) {
       
        }
        if (error.message.includes('timeout')) {
            // 判断请求异常信息中是否含有超时timeout字符串
            console.log("错误回调", error);
            alert("网络超时");
            // reject这个错误信息
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
)

/** 
 * 函数处理
 */
// 真状态码
function statusCode(response) {
    switch (response.status) {
        case 401:
           
            break
        case 403:
           
            break
        case 404:
         
            break
        case 408:
          
            break
        case 500:
          
            break
        default:
            return response
    }
}

// 地址格式化
function formatUrl(url, params) {
    let newUrl = url
    if (Object.keys(params).length) {
        if (url.indexOf('?') !== -1) {
            newUrl = url + '&' + helper.queryParams(params)
        } else {
            newUrl = url + '?' + helper.queryParams(params)
        }
    }
    return newUrl
}


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

const get = function get(url, params = {}) {
    const newUrl = formatUrl(url, params)
    return new Promise((resolve, reject) => {
        axios.get(newUrl)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
const post = function post(url, params = {}, headers = {}) {
    // get方法加一个时间参数,解决ie下可能缓存问题
    params.t = new Date().getTime(); 

    // 根据header处理参数
    let _headers = axios.defaults.headers
    let _params = params
    if (Object.keys(headers).length) {
        _headers = headers
    } else {
        _params = qs.stringify(params)
    }
    
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: _params,
            headers: _headers
        })
        .then(response => {
            resolve(response.data);
        }, err => {
            reject(err)
        })
    })
}


const request = { get: get, post: post }
export default request