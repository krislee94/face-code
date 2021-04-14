/**
 * 去重,不使用set
 */
function ab() {
  const arr = [1, 2, 3, 4, 4, 1, 2, 5];
  const newArr = [];
  for (let item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }

  console.log(newArr);
}
ab();
