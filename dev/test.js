'use strict';

var _math = require('./math.js');

var _math2 = _interopRequireDefault(_math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var math = new _math2.default();
    // *************************************************************
    console.log("加法测试：");
    var create = new Date().getTime();
    for (var index = 0; index < 10; index++) {
        var _console;

        var random = Math.floor(Math.random() * 10);
        var list = new Array();
        for (var x = 0; x < random; x++) {
            list.push(random + '.' + Math.floor(Math.random() * 1000));
        }
        (_console = console).log.apply(_console, ['计算参数：'].concat(list, ['\n', '\t', '计算结果:', math.add.apply(math, list)]));
    }
    console.log("执行时间：" + (new Date().getTime() - create));
    // *************************************************************
    console.log("减法测试：");
    for (var _index = 0; _index < 10; _index++) {
        var _console2;

        var _random = Math.floor(Math.random() * 10);
        var _list = new Array();
        for (var _x = 0; _x < _random; _x++) {
            _list.push(_random + '.' + Math.floor(Math.random() * 1000));
        }
        (_console2 = console).log.apply(_console2, ['计算参数：'].concat(_list, ['\n', '\t', '计算结果:', math.sub.apply(math, _list)]));
    }
    console.log("执行结果：" + (new Date().getTime() - create));

    // *************************************************************
    console.log("乘法测试：");
    for (var _index2 = 0; _index2 < 10; _index2++) {
        var _console3;

        var _random2 = Math.floor(Math.random() * 10);
        var _list2 = new Array();
        for (var _x2 = 0; _x2 < _random2; _x2++) {
            _list2.push(_random2 + '.' + Math.floor(Math.random() * 1000));
        }
        (_console3 = console).log.apply(_console3, ['计算参数：'].concat(_list2, ['\n', '\t', '计算结果:', math.mult.apply(math, _list2)]));
    }
    console.log("执行结果：" + (new Date().getTime() - create));
})(); /** 
       * @moudel 测试模块
       * @author MR.X
       */