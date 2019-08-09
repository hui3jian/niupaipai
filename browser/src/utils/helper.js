/**  
 * 使用类工具包 
 */


/** 
 * 去除前后多余空格
 * @params { str: [Number, String] }
 * @return { str: [Number, String] 去除后的值  } 
 */

const trim = (str) => {
    str = str.replace(/^(\s|\u00A0)+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
        if (/\S/.test(str.charAt(i))) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return str;
}

/**
 * 对象转url参数
 * @param {*} data
 * @param {*} isPrefix
 */
const queryParams = (data, isPrefix = false) => {
    let prefix = isPrefix ? '?' : ''
    let _result = []
    for (let key in data) {
        let value = data[key]
        // 去掉为空的参数
        if (['', undefined, null].includes(value)) {
            continue
        }
        if (value.constructor === Array) {
            value.forEach(_value => {
                _result.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(_value))
            })
        } else {
            _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
        }
    }

    return _result.length ? prefix + _result.join('&') : ''
}

/** 
 * 获取文件后缀名
 * @param { name: [string] } 后缀名
 * @returns { [string] } 后缀名
 *  
 */
const getFileSuffix = (filename) => {
    const val = filename.substring(filename.lastIndexOf(".") + 1).toLowerCase();
    return val
}

export default {
    trim, queryParams, getFileSuffix
}
