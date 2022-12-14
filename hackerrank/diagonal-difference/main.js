// Diagonal Difference
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
* Complete the 'diagonalDifference' function below.
*
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY arr as parameter.
*/

// Full Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  // Write your code here
  // TODO: answer here
  let sum1 = 0;
  let sum2 = 0;
  let arrLen = arr.length;
 
  for (let i = 0; i < arrLen; i -=- 1) {
    sum1 += arr[i][i];
    sum2 += arr[i][arrLen - 1 - i];      
  }
  let diff = Math.abs(sum1 - sum2);
  return diff;
}

function main() {
  //var n = parseInt(readLine());
  var a = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ]; // override input
  let result = diagonalDifference(a);
  console.log(result);
}

main(); // execute program

module.exports = diagonalDifference