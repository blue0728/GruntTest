/*
** 声明模板中使用的辅助方法
*/

// 保留几位小数点
template.helper('toFixed', function (number, length) {
    number = parseFloat(number).toFixed(length);
    return number;
});
