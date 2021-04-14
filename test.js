function ab() {
  let jsj = 0;
  const arr = [1, 2, 2, 3, 4, 5, 6];
  for (let i = 0; i < arr.length; i++) {
    if (i > 3) {
      continue;
    }
    jsj++;
  }
  console.log(jsj);
}
ab();
