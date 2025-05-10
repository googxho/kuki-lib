// 手写一个闭包
function outerSum(a) {
  return function inner(b) {
    console.log('[ku]log >> :4 >> inner >> a + b:', a + b);
    return a + b;
  };
}
outerSum(1)(2);
// 函数节流与抖动
function thorttle(func, wait) {
  let timer = null;
}
// 手写一个 count 函数 -> 调用一次就加一
const count = (function () {
  let count = 0;
  return function () {
    count++;
    console.log('[ku]log >> :25 >> count:', count);
    return count;
  };
})();
count();
count();
count();
// 手写一个 sleep 睡眠函数
function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
      console.log('[ku]log >> :33 >> sleep >> time:', time);
    }, time);
  });
}
async function init() {
  let temp = await sleep(2000);
  console.log('[ku]log >> :43 >> init >> temp:', temp);
}
init();
// 实现一下继承 call apply bind
const costomCall = function (context, ...args) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

// 实现 call
const foo = { value: 1 };
function bar(name) {
  console.log('[ku]log >> :60 >> bar >> this.value:', this.value, name);
  return this.value;
}
bar.call(foo, 'call'); // 1
// 实现 apply
// eslint-disable-next-line no-extend-native
Function.prototype.myCall = function (context) {
  // 没传入 context 则默认为 window
  const fn = Symbol('fn');
  context = context || window;
  // 改变 this 指向
  context[fn] = this;
  // 执行函数
  const res = context[fn](...[...arguments].slice(1));
  // 删除 fn
  delete context[fn];
  return res;
};
bar.myCall(foo, 'maCall');
console.log("[ku]log >> :76 >> bar.myCall(foo, 'maCall'):", bar.myCall(foo, 'maCall'));
// 实现 apply
// 实现 bind
// eslint-disable-next-line no-extend-native
Function.prototype.myBind = function (context, ...args) {
  return () => {
    this.call(context, ...args);
  };
};
// 实现一个 forEach 方法
function myForEach(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('[ku]log >> :90 >> muForEach >> arr[i]:', arr[i]);
  }
}
myForEach([1, 2, 3]);
// 用 reduce 实现 map
// ['1', '2', '3'].map(parseInt)返回值
// 手写一个 instanceof
// 手写一个 new
// Promise 系列
// 手写一个 promise
// 实现 Promise.resolve(), Promise.reject()
// 实现 Promise.all()
// 实现 Promise.race()
// 实现 Promise.any()
// 实现 Promise.allSettled()
// 实现 Promise.prototype.finally
// 如何串行执行多个 Promise
// 手写一个 Ajax
// 实现一个红绿灯（3s 打印 red，2s 打印 green，1s 打印 yellow）
// 斐波那契数列（递归，DP，循环）
// 数组去重
// 实现一个 add 函数 满足 add(1,2,3)与 add(1)(2)(3)结果相同
// 函数柯里化
// 手写一个 flatten 函数（数组降维）
// 深拷贝 浅拷贝
// 手写一个单例模式
// 手写一个观察者模式
// 手写一个发布订阅模式
// 对一个页面打印所有的结点类型和结点名称
// 获取一个页面所有标签的个数
// 异步输出结果
// 水平垂直居中
// 三角形 扇形
// 实现圆形可点击区域
// 如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』
