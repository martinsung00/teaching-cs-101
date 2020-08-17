"use strict";

/*
  1. What is the runtime of each of the following functions?
  2. Summarize what each function is doing in common English.
*/

/*
  1.

  Time: O(n)
  Space: O(1)

  Function sequentially calculates the sum of its elements, and then the product of its elements.
*/
function ex1(arr) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    sum += array[i];
  }

  for (let i = 0; i < arr.length; i++) {
    product *= array[i];
  }

  console.log(sum + ", " + product);
}

/*
  2.
   
  Time: O(m * n)
  Space: O(1)

  Function prints an m x n matrix.
*/
function ex2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

/*
  3.
   
  Time: O(n^2)
  Space: O(1)

  Function calculates a decreasing sum of n permutations, which forms a triangular number, whose sum is n(n - 1) / 2.
*/
function ex3(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

/*
  4.
   
  Time: O(m * n)
  Space: O(1)

  Function prints an m x n matrix. Constant work at the middle is negligible.
*/
function ex4(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
      if (arr1[i] < arr2[j]) {
        console.log(arr[i] + ", " + arr[j]);
      }
    }
  }
}

/*
  5.
   
  Time: O(m * n)
  Space: O(1)

  Function prints an m x n matrix. The 100,000 iterations does not scale with either m or n, making it O(1), which is then deemed negligible.
*/
function ex5(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
      for (let k = 0; k < 100000; k++) {
        console.log(arr[i] + ", " + arr[j]);
      }
    }
  }
}

/*
  6.
   
  Time: O(n)
  Space: O(n)

  Function computes a factorial number with a decreasing number of iteraitons from n.

  Space complexity is determined by number of function calls stored on the program stack, which is O(n).
*/
function ex6(n) {
  if (n < 0) return -1;
  else if (n === 0) return 1;
  else return n * ex6(n - 1);
}

/*
  7.
   
  Time: O(2^n)
  Space: O(n)

  Function computes the nth Fibonacci number, which creates two (2) child function calls, each having a depth runtime of O(n).
*/
function ex7(n) {
  if (n <= 0) return 0;
  else if (n === 1) return 1;
  return ex7(n - 1) + ex7(n - 2);
}
