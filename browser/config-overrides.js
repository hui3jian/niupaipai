const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const GlobalStyle = require('./src/assets/global.style')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '.', dir);
}

module.exports = override(
    // 配置路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
    }),
    // ant-design按需加载
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    // 组件自定义主题
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: GlobalStyle,
    }),
);