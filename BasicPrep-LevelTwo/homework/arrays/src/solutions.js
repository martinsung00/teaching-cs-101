/*
  @author Gordon Zhang (GitHub: zwilhelmm)

  This is the solution key! Please note that the implementation is intentionally left somewhat rudimentary, as it is testing the knowledge of a programmer who only current knows of arrays and objects.

  Original prompt:

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
  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }

  return sum;
};

/*
  (EASY)
  
  Write a program to find the index of an array element. You may assume that the array does not have duplicates. If the array element does not exist in the array, return null.

  Try it once with Array.indexOf() in a separate function, and once without. For extra credit, try again using a while loop.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], 2
  Output: 4
*/
export const indexOf = function(inputArray, numberToLookFor) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === numberToLookFor) return i;
  }
  return null;
};

export const indexOfBuiltIn = function(inputArray, numberToLookFor) {
  return inputArray.indexOf(numberToLookFor);
};

/*
  (EASY)
  
  Write a program to test if an array contains a specific value. If it does, return true. If it doesn't, return false.

  Try it once with Array.includes() in a separate function, and once without. For extra credit, try again using a while loop.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], 5
  Output: false
*/
export const includes = function(inputArray, numberToLookFor) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === numberToLookFor) return true;
  }
  return false;
};

export const includesBuiltIn = function(inputArray, numberToLookFor) {
  return inputArray.includes(numberToLookFor);
};

/*
  (EASY)
  
  Write a program to calculate the average value of array elements.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: 20.5
*/
export const getAverage = function(inputArray) {
  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }

  return sum / inputArray.length;
};

/*
  (EASY / HARD)
  
  Write a program to insert an element into a specific position into an array.

  Try it once with Array.splice() in a separate function, and once without.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], 5, 3
  Output: [1, 3, 3, 5, 7, 2, 8, 12, 0, 8, -3]
*/
export const splice = function(inputArray, elementToInsert, indexToInsertAt) {
  let firstHalf = [];
  let secondHalf = [];

  // Split the array in half.
  for (let i = 0; i < inputArray.length; i++) {
    // Write to the first half until we find the insertion point.
    // If we're at the end of the first half, start writing to the second half.
    if (i < indexToInsertAt) {
      firstHalf.push(inputArray[i]);
    } else {
      secondHalf.push(inputArray[i]);
    }
  }

  // Now add our element to the end of the first half, and then combine the two.
  firstHalf.push(elementToInsert);

  return firstHalf.concat(secondHalf);
};

export const spliceBuiltIn = function(
  inputArray,
  elementToInsert,
  indexToInsertAt
) {
  return inputArray.splice(indexToInsertAt, 1, elementToInsert);
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
  let firstHalf = [];
  let secondHalf = [];

  // Split the array in half.
  for (let i = 0; i < inputArray.length; i++) {
    // Write to the first half until we find the deletion point.
    // If we're at the end of the first half, start writing to the second half.
    if (i < indexToRemoveFrom) {
      firstHalf.push(inputArray[i]);
    } else {
      secondHalf.push(inputArray[i]);
    }
  }

  // Now remove the first element of the first half, and then combine the two.
  firstHalf.shift();

  // Technically, we never needed the actual element. In fact, we only need the index, or the element itself, not necessarily both! Now try doing it without Array.shift()!
  return firstHalf.concat(secondHalf);
};

export const spliceRemoveBuiltIn = function(
  inputArray,
  elementToRemove,
  indexToRemoveFrom
) {
  // Also works: return inputArray.splice(indexToRemoveFrom, 1);
  return inputArray.splice(inputArray.indexOf(elementToRemove), 1);
};

/*
  (MEDIUM)
  
  Write a program to return an array appended on itself.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3, 1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
*/
export const clone = function(inputArray) {
  let clonedArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    clonedArray.push(inputArray[i]);
  }

  return clonedArray;
};

/*
  (MEDIUM)
  
  Write a program to find the maximum and minimum value of an array.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: { minimum: -3, maximum: 12 }
*/
export const getArrayMinAndMax = function(inputArray) {
  let minimum = inputArray[0];
  let maximum = inputArray[0];
  let currentNumber;

  for (let i = 0; i < inputArray.length; i++) {
    currentNumber = inputArray[i];
    // Check the minimum and see if we found anything new.
    if (currentNumber < minimum) {
      minimum = currentNumber;
    }
    // Now check the maximum.
    if (currentNumber > maximum) {
      maximum = currentNumber;
    }
  }

  return {
    minimum: minimum,
    maximum: maximum
  };
};

/*
  (MEDIUM)
  
  Write a program to find the duplicate value of an array of integer values. You may assume that there is only duplicate. If there are no duplicates, return null.

  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: 3
*/
export const getArrayDuplicate = function(inputArray) {
  // Set up an object, where keys are the number, and values are the number of occurences.
  let duplicates = {};
  let currentNumber;

  for (let i = 0; i < inputArray.length; i++) {
    // If it's the first time we've seen a number, add it in.
    // If we've already seen it, we've found the duplicate.
    currentNumber = inputArray[i];
    if (!duplicates[currentNumber]) {
      duplicates[currentNumber] = 1;
    } else {
      return currentNumber;
    }
  }

  return null;
};

/*
  (MEDIUM)
  
  Write a program to find the common elements between two arrays. Assume the arrays are the same size. The duplicates themselves may be returned in any order.


  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], [2, 5, 7, 2, 5, 8, -1, 12, 3, 15]
  Output: [3, 7, 2, 8, 12]
*/
export const getArrayDuplicate = function(inputArray, otherArray) {
  let duplicates = [];
  let currentNumber;

  // Arrays are same length, so we can just use one of their lengths.
  for (let i = 0; i < inputArray.length; i++) {
    currentNumber = inputArray[i];
    if (
      inputArray.includes(currentNumber) &&
      otherArray.includes(currentNumber)
    )
      duplicates.push(currentNumber);
  }

  return duplicates;
};

/*
  (HARD)
  
  Write a Java program to check if the sum of all the 10's in the array is exactly 30. Return false if the condition does not satisfy, otherwise true.

  Input: [1, 3, 10, 3, 7, 20, 10, 2, 8, 12, 40, 0, 8, -3]
  Output: false
*/
export const checkArraySumOfTens = function(inputArray) {
  let tens = [];
  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 10 === 0) {
      tens.push(inputArray[i]);
    }
  }

  for (let element of tens) {
    sum += element;
  }

  if (sum === 30) {
    return true;
  } else {
    return false;
  }
};

/*
  (EXTREME)
  
  Write a program to sort the array without using Array.sort(), or any other imported sorting function.


  Input: [1, 3, 10, 3, 7, 20, 10, 2, 8, 12, 40, 0, 8, -3]
  Output: [-3, 0, 1, 2, 3, 3, 7, 8, 8, 10, 10, 12, 20, 40]
*/
export const crudeSort = function(inputArray) {
  // See how hard it is to tell what a function is doing without comments and with single letter variable names?
  let j;
  let key;

  for (let i = 1; i < inputArray.length; i++) {
    key = inputArray[i];
    j = i - 1;

    while (j >= 0 && inputArray[j] > key) {
      inputArray[j + 1] = inputArray[j];
      j--;
    }

    inputArray[j + 1] = key;
  }

  return inputArray;
};

/*
  (EXTREME)
  
  Write a program to find the second largest element in an array.


  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: 8
*/
export const getArraySecondLargest = function(inputArray) {
  return crudeSort(inputArray)[inputArray.length - 2];
};
