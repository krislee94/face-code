/**
 * 实现 斐波那契数列
 */

/**
 * 1. 递归
 * @param {*} n
 * @returns
 */
function fb1(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fb1(n - 1) + fb1(n - 2);
  }
}

/**
 * 迭代
 * @param {*} n
 */
function fb2(n) {
  let res1 = 1;
  let res2 = 2;
  let sum = res2;
  for (let i = 2; i < n; i++) {
    sum = res1 + res2;
    res1 = res2;
    res2 = sum;
    console.log(sum);
  }
  return sum;
}
// fb2(50);

/**
 * 闭包
 */
function fb3(n) {
  var mem = [0, 1];
  const f = function (n) {
    var res = mem[n];
    if (typeof res !== "number") {
      mem[n] = f(n - 1) + f(n - 2);
      res = mem[n];
    }
    return res;
  };
  return f;
}
// fb3(50);
