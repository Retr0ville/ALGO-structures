
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

// Example

// For n = 2, the output should be
// solution(n) = 5;
// For n = 3, the output should be
// solution(n) = 13.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 1 ≤ n < 104.

// [output] integer

// The area of the n-interesting polygon.


function solution(n) {
  // 1 4 8 12
  // Xn = Xn-1  + 4n-1

  const recurr = (iter) => {
    if (iter === 1) {
      return 1;
    } else return recurr(iter - 1) + 4 * (iter - 1);
  };
  return recurr(n);
}
var test = 11416
console.log(test, solution(test));
