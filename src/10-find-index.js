/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, value) {
  let finish = false;
  let start = 0;
  let end = arr.length - 1;
  let ans = 0;
  if (arr[0] === value) return 0;
  if (arr.length === 0) return 0;
  while (finish === false) {
    const middle = Math.ceil((start + end) / 2);
    if (arr[middle] === value) {
      ans = middle;
      finish = true;
    } else if (arr[middle] < value) {
      start = middle;
    } else {
      end = middle;
    }
  }
  return ans;
}

module.exports = findIndex;
