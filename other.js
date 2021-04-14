/**
 * 算法12345678.01 =>123,456,78.01
 */
function ab() {
  const str = "12345678.01";
  const arr = str.split(".");
  //   console.log(arr);
  const str1 = arr[0];
  let str2 = null;
  for (let i = 0; i < str1.length; i = i + 3) {
    let str3 = str1.slice(i, i + 3);
    console.log(str3);
    if (str2 !== null) {
      str2 = str2 + "," + str3;
    } else {
      str2 = str3;
    }
  }
  const result = str2 + "." + arr[1];
  console.log(result);
}
ab();

/**
 * 算法，12345678.01=>12,345,678.01
 */
function test1() {
  const str = "12345678.01";
  const str1 = "0" + str;

  const arr = str1.split(".");
  console.log("------");
  //   const str3 = arr[0];
  let str3 = null;
  for (let i = 0; i < arr[0].length; i = i + 3) {
    let str2 = arr[0].slice(i, i + 3);
    // console.log(str2);
    if (str3 !== null) {
      str3 = str3 + "," + str2;
    } else {
      str3 = str2;
    }
  }

  let str4 = str3 + "." + arr[1];
  str4 = str4.slice(1);
  console.log(str4);
}
test1();
