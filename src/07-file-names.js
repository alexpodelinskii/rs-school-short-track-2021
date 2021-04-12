/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const list = [];
  const res = [];
  names.forEach((el) => {
    res.push(el);
  });
  names.forEach((el) => {
    if (el.indexOf('(1)') === -1) {
      list.push(el);
    }
  });
  const set = new Set(list);
  set.forEach((elem) => {
    let cop = 0;
    let copcop = 1;
    for (let i = 0; i < res.length; i++) {
      const s = '(1)';
      const temp = elem + s;
      if (elem === res[i] && cop === 0) {
        cop++;
      } else if (elem === res[i]) {
        res[i] += `(${cop})`;
        cop++;
      } else if (temp === res[i]) {
        res[i] += `(${copcop})`;
        copcop++;
      }
    }
  });
  return res;
}

module.exports = renameFiles;
