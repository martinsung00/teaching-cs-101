'use strict';

/*
  @author Gordon Zhang (GitHub: zwilhelmm)

  This assignment is designed to help a beginner practice their objects. Please don't change the function definitions!

  You can also Ctrl+F (Cmd+F) the difficulty keys:
  EASY MEDIUM HARD EXTREME
  to better search for problems.

  Parts of this lesson has been brought to you by LearnTeachCode, a computer science club and meetup group based in sunny Los Angeles, California.

  Here's some helpful reminders:
  1. Keep your code clean and readable.

  In case you have not completed the objects.js assignment, the code for myPenguin has been reproduced below.

  Good luck!
*/

let myPenguin = {
  character: "Penguin McPenguinFace",
  origin: "Donald Duck",
  notes: 'A baby penguin in the classic 1939 cartoon "Donald\'s Penguin".',
  canFly: true,

  chirp: function() {
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
  },

  sayHello: function() {
    console.log("Hello, I'm a penguin and my name is " + this.character + "!");
  },

  fly: function() {
    if (this.canFly) {
      console.log("I can fly!");
    } else {
      console.log("No flying for me!");
    }
  }
};

/*
  (EASY)

  Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
*/

// Your code here.

/*
  (EASY)
  Access your penguin's second favorite food and print it to the console using console.log().
*/

console.log();

/*
  (EASY)

  Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.
*/

const firstFavoriteFood;

/*
  (EASY)

  Add another food to the end of the list.
*/

/*
  (EASY)

  Print the length of your penguin's favoriteFoods array to the console with console.log()
*/

console.log();

/*
  (EASY)

  Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).
*/

// Your code here.

/*
  (EASY)

  Create a new variable named lastFavoriteFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list.
*/

const lastFavoriteFood;

/*
  (EASY)

  Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console.
*/

// Your code here.
