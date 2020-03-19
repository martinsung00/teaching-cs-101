/*
  This course content was produced by Galvanize, from their Software Engineering Basic Prep Course.

  Start a timer that will last for two hours, then begin moving through the challenges below. When the time is up, stop working on the challenges. At the bottom of this page is a description of where you should start the course, based upon how many problems you have completed in each section (Basics, Intermediate, and Advanced).
*/

// BASIC

/*
  1. Declare a variable, call it myString, and assign it to any string of your choosing.
*/
const myString = "Hello!";

/*
  2. Declare a variable, call it myArray, and assign it to any array containing three elements. The elements can be of any type.
*/
const myArray = [1, 2, 3];

/*
  3. Declare a variable, call it myObject, and assign it to an object literal with 3 properties.
*/
const myObject = { a: null, b: null, c: null };

/*
  4. Complete the function concatenateTwoStrings. This function will take in two string parameters, and should return a string which is the result of concatenating the two input strings together.

  var output = concatenateTwoStrings("stair", "case");
  console.log(output); // "staircase"
*/
function concatenateTwoStrings(str1, str2) {
  return str1 + str2;
}

/*
  5. Complete the function 'interpolate'. This function will take in a string parameter, and return a string as follows:

  var message1 = interpolate("turkey");
  console.log(message1); // "My favorite food is turkey!"

  var message2 = interpolate("tofurkey");
  console.log(message2); // "My favorite food is tofurkey!"

  Pay close attention to the punctuation in the resulting string.
*/
function interpolate(str) {
  return "My favorite food is " + str + "!";
}

/*
  6. Complete the function indexOfString. This function will take in two string parameters, and return the index, inside of the first string, where the second string is located. You will want to use the indexOf method for Strings. If string2 is not present within string1, your function should return -1.

  var output = indexOfString("environment", "iron");
  console.log(output); // 3
*/
function indexOfString(str, query) {
  return str.indexOfString(query);
}

/*
  7. Complete the function splitString. This function will take in one parameter, a string to be split, and should return an array that is the result of calling the split method on the input string. You should call split with an argument of an empty string. You will want to use the split method for Strings.

  var output = splitAString("queue");
  console.log(output); // ["q", "u", "e", "u", "e"]
*/
function splitAString(str) {
  return str.split("");
}

/*
  8. Complete a function called removeFromBack. Given an array, removeFromBack returns the input array with its last element removed. You should be familiar with the Array method pop.

  var output = removeFromBack([1, 2, 3]);
  console.log(output); // --> [1, 2]
*/
function removeFromBack(arr) {
  arr.pop();
  return arr;
}

/*
  9. Complete a function called addToBack. Given an array and an element of any type, addToBack adds the input element to the back of the input array, and returns the input array. Your function should return the INPUT array, rather than create a new one. You should be familiar with the Array method push.

  var output = addToBack([1, 2], 3);
  console.log(output); // -> [1, 2, 3]
*/
function addToBack(arr, query) {
  return arr.push(query);
}

/*
  10. Complete a function called removeFromFront. Given an array, removeFromFront returns the input array with its first element removed. You should be familiar with the Array method shift.

  var output = removeFromFront([1, 2, 3]);
  console.log(output); // --> [2, 3]
*/
function removeFromFront(arr) {
  arr.shift();
  return arr;
}

/*
  11. Complete a function called addToFront. Given an array and an element of any type, addToFront adds the input element to the front of the input array, and returns the input array. Your function should return the INPUT array, rather than create a new one. You should be familiar with the unshift method.

  var output = addToFront([1, 2], 3);
  console.log(output); // -> [3, 1, 2]
*/
function addToFront(arr, query) {
  arr.unshift(query);
  return arr;
}

/*
  12. We are going to complete a function that takes in three parameters, an array and two integer indexes. Your function should apply the slice method to the input array, from the first integer index to the last integer index, and return the result of this operation.
*/
function slice(arr, first, last) {
  return arr.slice(first, last);
}

/*
  13. Complete a function that demonstrates how to use the splice method on an array. usingSplice will take 4 parameters, an array, an integer start, an integer deleteCount, and a String item. Your function should splice the input array: starting at the input start, deleting deleteCount items, and inserting item into the array at start. Your function need not return anything.
*/
function splice(arr, start, deleteCount, items) {
  arr.splice(start, deleteCount, items);
}

/*
  14. Complete the function indexOfArray. This function will take in two parameters, an array and an element, and returns the index, inside of the array, where the element is located. You will want to use the indexOf method for Arrays. If the element is not present within array, your function should return -1.
*/
function indexOfArray(arr, elem) {
  return arr.indexOf(elem);
}

/*
  15. Complete a function that takes in two parameters, an array and a string. Your function should call join on the input array with an argument of the input string, and return the results.
*/
function join(arr, str) {
  return arr.join(str);
}

/*
  16. Complete a function that takes in three parameters, an object, and a string (which will represent a key), and a value. Your function should add a property to the inputted object. The key of this property should be the inputted string parameter, and the value of this property should be the inputted value. Your function should then return the inputted object.
*/
function addToObject(obj, key, val) {
  obj[key] = val;
  return obj;
}

/*
  17. Complete a function that takes in two parameters, an object, and a string (which will represent a key). Your function should remove (delete) the property located at the inputted key. Your function should then return the inputted object.
*/
function removeFromObject(obj, key) {
  delete obj.key;
  return obj;
}

/*
  18. Complete a function that takes in one parameter, an object. Your function should iterate over the object, and log the values to the console. Your function need not return anything.

  NOTE: DO NOT USE Object.keys, or Object.values in your solution.
*/
function logObjectValues(obj) {
  for (let key of obj) {
    let value = obj[key];
    console.log(value);
  }
}

// INTERMEDIATE

/*
  19. Complete a function called countAllCharacters. Given a string, your function returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

  Notes:
  If given an empty string, countAllCharacters should return an empty object.

  var output = countAllCharacters('banana');
  console.log(output); // --> {b: 1, a: 3, n: 2}
*/
function countAllCharacters(str) {
  let frequencies = {};

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    // If we haven't seen it before, add it to the object with a seen count of 1.
    if (frequencies[currentChar] === undefined) {
      frequencies[currentChar] = 1;
    }
    // Else, we have seen it before, so increment the value by 1.
    else {
      let seenCount = frequencies[currentChar];
      frequencies[currentChar] = seenCount + 1;
    }
  }
  return frequencies;
}

/*
  20. Write a function called transformEmployeeData that transforms some employee data from one format to another.

  The argument will look like this:

  var input = [
      [
          ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
      ],
      [
          ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
      ]
  ];

  Given that input, the return value should look like this:

  var result = [
      {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
      {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
  ]

  Note that the input may have a different number of rows (more employees) or different keys than the given sample.
*/

/*
  21. Complete a function called convertObjectToArray which converts an object literal into an array of arrays, like this:

  Argument:

  var input = {
    name: 'Holly',
    age: 35,
    role: 'producer'
  }

  Return value:

  var output = [['name', 'Holly'], ['age', 35], ['role', 'producer']]

  Note that the input may have a different number of properties than the given sample.
*/

/*
  22. Complete a function called greetCustomers.
  
  Given a name, greetCustomers returns a greeting based on how many times that customer has visited the restaurant. Please refer to the customerData object.

  The greeting should be different, depending on the name on their reservation.

  Case 1 - Unknown customer ( Name is not present in customerData ):

  var output = greetCustomer('Terrance');
  console.log(output); // --> 'Welcome! Is this your first time?'

  Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

  var output = greetCustomer('Joe');
  console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

  Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

  var output = greetCustomer('Carol');
  console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

  Notes:

  Your function should not alter the customerData object to update the number of visits.

  Do not hardcode to the exact sample data. This is a BAD IDEA:

  if (firstName === 'Joe') {
    // do something
  }
*/

// ADVANCED

/*
  23. The problem will require you to write two functions. One function will accomplish a task of some kind, and the other function will be an assertion function which can be used to compare your answer with an expected answer.

  The first function you will write will be called generateSampleView. The input for this function will always be an array of objects, theoretically the result of a call to an API, or database. generateSampleView will take this array as its parameter, and return an array of strings based upon conditions that we will describe in a moment. The format of this input array of objects is described below:

  var users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
  ];

  Note: your function will be tested with a longer input, but the format will remain consistent for each user in the input array.

  Your function should examine each user object, and add to the array return value for this function one of the following:

  A. If the value of the id property is odd, add the user's email to the return array

  B. If the value of the id property is even, your function should create a new string for the given user, add the street, suite, city, and zipcode, each separated by a space and a comma, as one string, to the return array

  Thus, if our input was the users array listed above, our output would be:

  var output = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];

  The second function you will write will be called assertArraysEqual. It will be a function that takes three parameters: actual will be an array of scalar values, and should ideally be the result of calling a function that you are testing. (presumably the function being tested should return an array of scalar values); expected, also an array of scalar values, should be the theoretical result of calling your function (or, what you "expect" the function to return). Finally, testName will be a string, and should describe what a call to assertArraysEqual is verifying about the function being tested.

  Please DO NOT USE JSON.stringify(), Array.join(), or any other "convert both arrays to strings so I can compare two strings" type of technique to implement this.

  There are typically two things that we must check in order to determine that two arrays of scalar values are indeed equal to one another.

  A. Do they have the same length
  B. Do they contain the same values

  Thus, your function must make a determination about these issues, then either log 'passed' to the console or else 'failed', as well as the testName to the console. The tests for this function will check to see if your console.log message for a passing case contains 'passed', and 'failed' for a failing case (both in lower case).
*/


