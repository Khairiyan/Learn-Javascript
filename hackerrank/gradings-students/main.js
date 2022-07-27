// Grading Students
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  // Write your code here
  // TODO: answer here
  let output = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            let diff = grades[i] % 5;
            if (diff === 3) {
                output.push(grades[i] + 2)
            } else if (diff === 4) {
                output.push(grades[i] + 1)
            } else {
                output.push(grades[i]);
            }
 
        } else {
            output.push(grades[i]);
        }
    }
 
    return output;
}

function main() {
  //     var n = parseInt(readLine());
  //     var grades = [];
  //     for(var grades_i = 0; grades_i < n; grades_i++){
  //        grades[grades_i] = parseInt(readLine());
  //     }
  var grades = [73, 67, 38, 33]; // override input
  var result = gradingStudents(grades);
  console.log(result.join("\n"));
}

main(); // execute program

module.exports = gradingStudents