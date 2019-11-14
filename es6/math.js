/**
 * @class MathExtends
 * @brief 解决js floot类型精度丢失的一款轻量级应用库
 * @author MR.X
 * @version 1.2.0
 * @param {number | string} args...
 */

let _calcList = new Array();

class MathExtends {

    constructor() {
        arguments.length ? this.calcList = arguments : 0;
    }

    get calcList() {
        return _calcList;
    }

    set calcList(params) {
        _calcList = Array.from(params).filter(_v => {
            return !isNaN(Number(_v));
        })
    }

    /**
     * @method 计算源次幂
     * @author MR.X
     * @return {number} max 最大次幂
     */
    basicPow() {
        let errorText = new Error(`
        请参考API文档传入参数，请查看：
            https://github.com/xubaoqiang/math
        refer to the API documentation for incoming parameters，see:
            https: //github.com/xubaoqiang/math
        `);
        if (this.calcList.length) {
            let len = new Array();
            this.calcList.forEach(value => {
                value.toString().split('.').length > 1 ? len.push(value.toString().split('.')[1].length) : 0
            })
            return len.length ? Math.pow(10, Math.max.apply(null, len)) : 1;
        } else console.error(errorText)
    }

    /**
     * @method 计算加法
     * @author MR.X
     * @param {number | string}
     * @brief 依次相加
     * @return {number} 计算结果
     */
    add() {
        arguments.length ? this.calcList = arguments : null;
        let max = this.basicPow(),
            resolve = 0;
        this.calcList.forEach(value => resolve += value * max);
        return resolve / max;
    }

    /** 
     * @method 计算减法
     * @author MR.X
     * @param { number | string}
     * @brief 依次相减
     * @return {number} 计算结果 
     */
    sub() {
        arguments.length ? this.calcList = arguments : null;
        let max = this.basicPow(),
            resolve = this.calcList[0] * max || 0;
        this.calcList.forEach(value => resolve -= value * max);
        return resolve / max;
    }

    /**
     * @method 计算乘法
     * @author MR.X
     * @param {number | string}
     * @brief 依次相乘
     * @return {number} 计算结果
     */
    mult() {
        arguments.length ? this.calcList = arguments : null;
        let max = this.basicPow(),
            resolve = 1;
        this.calcList.forEach(value => resolve *= value * max);
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
    div(num1 = 0, num2 = 0, decimals) {
        let errorText = new Error(`
        请参考API文档传入参数，请查看：
            https://github.com/xubaoqiang/math
        refer to the API documentation for incoming parameters，see:
            https: //github.com/xubaoqiang/math
        `);
        if (num1 !== null && num2 !== null) {
            this.calcList = [num1, num2];
            let max = this.basicPow(),
                resolve = 0,
                reg = new RegExp("^\\d+(?:\\.\\d{0," + decimals + "})?");
            return decimals != null ? Number((num1 / num2).toString().match(reg)) : num1 / num2;
        } else console.error(errorText);
    }
}

export default MathExtends;