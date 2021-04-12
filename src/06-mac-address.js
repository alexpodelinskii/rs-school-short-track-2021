/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let res = true;
  const arr = n.split('-');
  if (arr.length !== 6) {
    res = false;
  }
  const s = arr.join('').split('');
  s.forEach((element) => {
    if (element > 'F') { res = false; }
  });
  return res;
}

module.exports = isMAC48Address;
