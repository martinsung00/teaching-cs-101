/*
  @author Gordon Zhang (GitHub: zwilhelmm)

  This assignment is designed to help a beginner practice their arrays. Please don't change the function definitions!

  You can also Ctrl+F (Cmd+F) the difficulty keys:
  EASY MEDIUM HARD EXTREME
  to better search for problems.

  Here's some helpful reminders:
  1. Don't forget about negative numbers.
  2. Don't assume anything about array size.
  3. Keep your code clean and readable.

  Good luck!
*/

/*
  (EASY)
  
  Write a program to sum values of an array.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: 41
*/
export const getArraySum = function(inputArray) {
  //
};

/*
  (EASY)
  
  Write a program to find the index of an array element. You may assume that the array does not have duplicates.

  Try it once with Array.indexOf() in a separate function, and once without.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], 2
  Output: 4
*/
export const indexOf = function(inputArray, numberToLookFor) {
  //
};

export const indexOfBuiltIn = function(inputArray, numberToLookFor) {
  //
};

/*
  (EASY)
  
  Write a program to test if an array contains a specific value. If it does, return true. If it doesn't, return false.

  Try it once with Array.includes() in a separate function, and once without.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], 5
  Output: false
*/
export const includes = function(inputArray, numberToLookFor) {
  //
};

export const includesBuiltIn = function(inputArray, numberToLookFor) {
  //
};

/*
  (EASY)
  
  Write a program to calculate the average value of array elements.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: 20.5
*/
export const getAverage = function(inputArray) {
  //
};

/*
  (EASY)
  
  Write a program to insert an element into a specific position into an array.

  Try it once with Array.splice() in a separate function, and once without.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], 5, 3
  Output: [1, 3, 3, 5, 7, 2, 8, 12, 0, 8, -3]
*/
export const splice = function(inputArray, elementToInsert, indexToInsertAt) {
  //
};

export const spliceBuiltIn = function(
  inputArray,
  elementToInsert,
  indexToInsertAt
) {
  //
};

/*
  (EASY)
  
  Write a program to remove an element into a specific position into an array.

  Try it once with Array.splice() in a separate function, and once without.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], 12, 6
  Output: [1, 3, 3, 7, 2, 8, 0, 8, -3]
*/
export const spliceRemove = function(
  inputArray,
  elementToRemove,
  indexToRemoveFrom
) {
  //
};

export const spliceRemoveBuiltIn = function(
  inputArray,
  elementToRemove,
  indexToRemoveFrom
) {
  //
};

/*
  (MEDIUM)
  
  Write a program to copy an array by iterating the array. Make sure you don't copy by reference!

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
*/
export const clone = function(inputArray) {
  //
};

/*
  (MEDIUM)
  
  Write a program to find the maximum and minimum value of an array.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: { minimum: -3, maximum: 12 }
*/
export const getArrayMinAndMax = function(inputArray) {
  //
};

/*
  (MEDIUM)
  
  Write a program to find the duplicate value of an array of integer values. You may assume that there is only duplicate. If there are no duplicates, return null.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: 3
*/
export const getArrayDuplicate = function(inputArray) {
  //
};

/*
  (MEDIUM)
  
  Write a program to find the common elements between two arrays. Note that the arrays may not be the same size. The duplicates themselves may be returned in any order.


  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], [2, 5, 7, 2, 5, 8, -1, 12, 3, 15]
  Output: [3, 7, 2, 8, 12]
*/
export const getArrayDuplicate = function(inputArray, otherArray) {
  //
};

/*
  (HARD)
  
  Write a Java program to check if the sum of all the 10's in the array is exactly 30. Return false if the condition does not satisfy, otherwise true.

  Input: [1, 3, 10, 3, 7, 20, 10, 2, 8, 12, 40, 0, 8, -3]
  Output: false
*/
export const checkArraySumOfTens = function(inputArray) {
  //
};

/*
  (EXTREME)
  
  Write a program to sort the array without using Array.sort(), or any other imported sorting function.


  Input: [1, 3, 10, 3, 7, 20, 10, 2, 8, 12, 40, 0, 8, -3]
  Output: [-3, 0, 1, 2, 3, 3, 7, 8, 8, 10, 10, 12, 20, 40]
*/
export const sort = function(inputArray) {
  //
};

/*
  (EXTREME)
  
  Write a program to find the second largest element in an array.


  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: 8
*/
export const getArraySecondLargest = function(inputArray) {
  //
};