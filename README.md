# @class 解决 js 计算精度丢失轻量级函数库

## @author MR.X

## @versions v1.0.1

## @use

## cnd src=\"https\:\/\/github.com\/xubaoqiang\/math\/dev\/math.es5.js\"

## npm \$ npm install math-extends

## > 导入 import MathExtends from 'math-extends'

## > 创建

## > let math = new MathExtends(1.02, 20.06, '12.36', '36.21');

## > 或者

## > let math = new MathExten();

## > 在构造时可以传入实例参数也可以不传

## @API

### 加法函数 params 参数可选不限数量

### 如果构造时传入则可以不传，否则参数必传

### math.add([...parmas{number | string}]) return resolve {number}

### 举个栗子 new MathExtends(6.912 6.164 6.639 6.603 6.72 6.436).add() // 39.474

### 或者 new MathExtends().add(6.912 6.164 6.639 6.603 6.72 6.436) //39.474

### 减法 参数同加法一致 如果传入 1 个参数，你将得到它对应的负数

### math.sub([...params{number | string}]) return resolve {number}

### 乘法 参数同加法一致 如果你传入 1 个参数，你将得到该数字

### math.mult([...params{number | string}]) return resolve {number}

### 除法 参数{num1, num2, decimals} 如果你传入 1 个参数，你将得到一个异常， 兄 dei, 不要这酱子啥

# ！！！ 注意，注意，前方高能！！！ 除法函数不涉及构造函数去构造

##### @explain 不能支持依次相除，可能自己太 low 了，我太难了

### /\*\*

### \* @method 计算除法

### \* @author MR.X

### \* @param {number | string} num1

### \* @param {number | string} num2

### \* @param {number | string} decimals 保留位数

### \* @brief 除法函数支持两个参数运算 第三个参数为保留位数

### \* @return {number} 两数相除结果

### \*/

### math.div(num1, num2, decimals) return resolve {number}

### 上个版本由于本人第一次推 npm,造成阻断性 bug，望各位见谅 请使用 v1.0.1 版本
