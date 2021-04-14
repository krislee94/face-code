/**
 * 手写Promise
 * @param {*} promises
 * @returns
 */
function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      // throw new Error('agruments must be Array'); //
      return reject(new TypeError("agruments must be Array"));
    }

    let count = 0,
      newValues = new Array();
    for (let item of promises) {
      Promise.resolve(item).then(
        (res) => {
          count++;
          newValues.push(res);
          if (count == promises.length) {
            return resolve(newValues);
          }
        },
        (rej) => reject(rej)
      );
    }
  });
}
