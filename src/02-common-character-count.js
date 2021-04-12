/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const ss1 = s1.split('');
  const ss2 = s2.split('');
  let count = 0;
  ss1.forEach((element) => {
    const index = ss2.indexOf(element);
    if (index !== -1) {
      delete ss2[index];
      count++;
    }
  });

  return count;
}

module.exports = getCommonCharacterCount;
