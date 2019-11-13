'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * @class MathExtends
 * @brief 解决js floot类型精度丢失的一款轻量级应用库
 * @author MR.X
 * @version 1.0.0
 * @param {number | string} args...
 */

var _calcList = new Array();

var MathExtends = function () {
    function MathExtends() {
        _classCallCheck(this, MathExtends);

        arguments.length ? this.calcList = arguments : 0;
    }

    _createClass(MathExtends, [{
        key: 'basicPow',


        /**
         * @method 计算源次幂
         * @author MR.X
         * @return {number} max 最大次幂
         */
        value: function basicPow() {
            var errorText = new Error('\n        \u8BF7\u53C2\u8003API\u6587\u6863\u4F20\u5165\u53C2\u6570\uFF0C\u8BF7\u67E5\u770B\uFF1A\n            https://github.com/xubaoqiang/math\n        refer to the API documentation for incoming parameters\uFF0Csee:\n            https: //github.com/xubaoqiang/math\n        ');
            if (this.calcList.length) {
                var len = new Array();
                this.calcList.forEach(function (value) {
                    value.toString().split('.').length > 1 ? len.push(value.toString().split('.')[1].length) : 0;
                });
                return len.length ? Math.pow(10, Math.max.apply(null, len)) : 1;
            } else console.error(errorText);
        }

        /**
         * @method 计算加法
         * @author MR.X
         * @param {number | string}
         * @brief 依次相加
         * @return {number} 计算结果
         */

    }, {
        key: 'add',
        value: function add() {
            arguments.length ? this.calcList = arguments : null;
            var max = this.basicPow(),
                resolve = 0;
            this.calcList.forEach(function (value) {
                return resolve += value * max;
            });
            return resolve / max;
        }

        /** 
         * @method 计算减法
         * @author MR.X
         * @param { number | string}
         * @brief 依次相减
         * @return {number} 计算结果 
         */

    }, {
        key: 'sub',
        value: function sub() {
            arguments.length ? this.calcList = arguments : null;
            var max = this.basicPow(),
                resolve = this.calcList[0] || 0;
            this.calcList.forEach(function (value) {
                return resolve -= value * max;
            });
            return resolve / max;
        }

        /**
         * @method 计算乘法
         * @author MR.X
         * @param {number | string}
         * @brief 依次相乘
         * @return {number} 计算结果
         */

    }, {
        key: 'mult',
        value: function mult() {
            arguments.length ? this.calcList = arguments : null;
            var max = this.basicPow(),
                resolve = 1;
            this.calcList.forEach(function (value) {
                return resolve *= value * max;
            });
            return resolve / max;
        }

        /**
         * @method 计算除法
         * @author MR.X
         * @param {number | string} num1
         * @param {number | string} num2 
         * @param {number | string} decimals 保留位数
         * @brief 除法函数支持两个参数运算 第三个参数为保留位数
         * @return {number} 两数相除结果
         */

    }, {
        key: 'div',
        value: function div() {
            var num1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var num2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var decimals = arguments[2];

            var errorText = new Error('\n        \u8BF7\u53C2\u8003API\u6587\u6863\u4F20\u5165\u53C2\u6570\uFF0C\u8BF7\u67E5\u770B\uFF1A\n            https://github.com/xubaoqiang/math\n        refer to the API documentation for incoming parameters\uFF0Csee:\n            https: //github.com/xubaoqiang/math\n        ');
            if (num1 !== null && num2 !== null) {
                this.calcList = [num1, num2];
                var max = this.basicPow(),
                    resolve = 0,
                    reg = new RegExp("^\\d+(?:\\.\\d{0," + decimals + "})?");
                return decimals != null ? Number((num1 / num2).toString().match(reg)) : num1 / num2;
            } else console.error(errorText);
        }
    }, {
        key: 'calcList',
        get: function get() {
            return _calcList;
        },
        set: function set(params) {
            _calcList = Array.from(params).filter(function (_v) {
                return !isNaN(Number(_v));
            });
        }
    }]);

    return MathExtends;
}();

exports.default = MathExtends;