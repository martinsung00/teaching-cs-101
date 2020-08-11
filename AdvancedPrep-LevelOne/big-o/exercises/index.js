"use strict";

/*
  1. What is the runtime of each of the following functions?
  2. Summarize what each function is doing in common English.
*/

// Ex. 1.
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

// Ex. 2.
function ex2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

// Ex. 3.
function ex3(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

// Ex. 4.
function ex4(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
      if (arr1[i] < arr2[j]) {
        console.log(arr[i] + ", " + arr[j]);
      }
    }
  }
}

// Ex. 5.
function ex5(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
      for (let k = 0; k < 100000; k++) {
        console.log(arr[i] + ", " + arr[j]);
      }
    }
  }
}

// Ex. 6.
function ex6(n) {
  if (n < 0) return -1;
  else if (n === 0) return 1;
  else return n * ex6(n - 1);
}

// Ex. 7.
function ex7(n) {
  if (n <= 0) return 0;
  else if (n === 1) return 1;
  return ex7(n - 1) + ex7(n - 2);
}
