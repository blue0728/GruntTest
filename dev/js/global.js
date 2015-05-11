/*
 ** 全局通用JS文件
 */

// require模块请求配置
require.config({
    urlArgs: 'v=' + (new Date()).getTime(),
    /*模块路径*/
    baseUrl: 'js/modules',
    paths: {
        'copy': 'copy/copy',
        'tpl': '../../tpl'
    },
    /*非amd规范*/
    shim: {                       
        'copy': {
            'exports': 'copy'
        },
    },
    map: {
        '*': {
            'css': 'css'
        }
    }
});