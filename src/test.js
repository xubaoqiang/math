/** 
 * @moudel 测试模块
 * @author MR.X
 */
import MathExtends from './math.js';

(() => {
    let math = new MathExtends();
    // *************************************************************
    console.log("加法测试：")
    let create = new Date().getTime();
    for (let index = 0; index < 10; index++) {
        let random = Math.floor(Math.random() * 10);
        let list = new Array();
        for (let x = 0; x < random; x++) {
            list.push((random + '.' + Math.floor(Math.random() * 1000)));
        }
        console.log('计算参数：', ...list, '\n', '\t', '计算结果:', math.add(...list));
    }
    console.log("执行时间：" + (new Date().getTime() - create));
    // *************************************************************
    console.log("减法测试：")
    for (let index = 0; index < 10; index++) {
        let random = Math.floor(Math.random() * 10);
        let list = new Array();
        for (let x = 0; x < random; x++) {
            list.push((random + '.' + Math.floor(Math.random() * 1000)));
        }
        console.log('计算参数：', ...list, '\n', '\t', '计算结果:', math.sub(...list));
    }
    console.log("执行结果：" + (new Date().getTime() - create));

    // *************************************************************
    console.log("乘法测试：")
    for (let index = 0; index < 10; index++) {
        let random = Math.floor(Math.random() * 10);
        let list = new Array();
        for (let x = 0; x < random; x++) {
            list.push((random + '.' + Math.floor(Math.random() * 1000)));
        }
        console.log('计算参数：', ...list, '\n', '\t', '计算结果:', math.mult(...list));
    }
    console.log("执行结果：" + (new Date().getTime() - create));
})();