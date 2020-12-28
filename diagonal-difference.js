/*
Diagonal Difference
*/

function diagonalDifference(arr) {
  let n = arr.length
  let sumA = 0;
  let sumB = 0;
  for (let i = 0; i < n; i++) {
    sumA += arr[i][i];
    sumB += arr[i][n - i - 1];
  }
  return Math.abs(sumA - sumB);
}
