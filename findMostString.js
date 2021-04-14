/**
 * 找到字符串中 出现最多的
 */

function abc() {
  const str = "dfdfdfdfdddniwlkwo";
  const arr = Array.from(str);
  const littleMap = arr.reduce((pre, next) => {
    if (pre[next]) {
      if (pre[`${next}_number`]) {
        pre[`${next}_number`] += 1;
      } else {
        pre[`${next}_number`] = 1;
      }
    } else {
      pre[next] = next;
    }
    return pre;
  }, {});
  let arr1 = [];
  for (let i in littleMap) {
    if (typeof littleMap[i] == "number") {
      arr1.push(littleMap[i]);
    }
  }
  const result = Math.max(...arr1);
  console.log(result);
}
abc();
