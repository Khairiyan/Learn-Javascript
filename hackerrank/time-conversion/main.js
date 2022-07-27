// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  // TODO: answer here
  let hour = 0;
  let arrTime = s.split(":");
  if (s.substring(s.length - 2, s.length) === "AM") {
    if (arrTime[0] === "12") {
      arrTime[0] = "00";
      return `${arrTime[0]}:${arrTime[1]}:${arrTime[2].substring(0, 2)}`;
    }
    return `${arrTime[0]}:${arrTime[1]}:${arrTime[2].substring(0, 2)}`;
  } else {
    hour = parseInt(arrTime[0]) + 12;
    if (hour > 23) {
      arrTime[0] = "00";
      return `${arrTime[0]}:${arrTime[1]}:${arrTime[2].substring(0, 2)}`;
    }
    return `${hour}:${arrTime[1]}:${arrTime[2].substring(0, 2)}`;
  }
}

function main() {
  //var s = readLine();
  var s = "12:20:50AM"; // override input
  var result = timeConversion(s);
  console.log(result);
}

main(); // execute program

module.exports = timeConversion;
