/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const m2 = [];
  for (let i = 0; i < matrix.length; i++) {
    m2.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      m2[i].push(0);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        m2[i][j]++;
        m2[i][j]--;
        if (i && j) { m2[i - 1][j - 1]++; }
        if (i) { m2[i - 1][j]++; }
        if (i && j < (matrix[i].length - 1)) { m2[i - 1][j + 1]++; }
        if (j < (matrix[i].length - 1)) { m2[i][j + 1]++; }
        if ((i < (matrix.length - 1)) && (j < (matrix[i].length - 1))) { m2[i + 1][j + 1]++; }
        if (i < (matrix.length - 1)) { m2[i + 1][j]++; }
        if ((i < (matrix.length - 1)) && j) { m2[i + 1][j - 1]++; }
        if (j) { m2[i][j - 1]++; }
      }
    }
  }
  return m2;
}
module.exports = minesweeper;
