"use strict";

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
  },

  favoriteFoods: ["fish", "ice cream", "hot chocolate", "pineapples"],

  outfit: {
    hat: "top hat",
    shirt: "Hawaiian shirt",
    shoes: "flip-flops",
    accessory: "pocket watch"
  }
};

/*
  Reinforcements have arrived!
*/

let gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function() {
    console.log("QUACK!!!");
  }
};

let ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function() {
    console.log("Estoy encantado de conocerle.");
  }
};

let fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function() {
    console.log("Hi there!");
  }
};

/*
  (EASY)

  Create a new variable named penguins and set it equal to an array that lists these three penguins.
*/

// Your code here.

/*
  (EASY)

  Access the first penguin in the list and print it to the console using console.log() -- notice that you can see all the properties and methods of that object listed in the console!
*/

console.log();

/*
  (EASY)

  Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.
*/

const secondPenguin;

/*
  (EASY)

  Print to the console the name of the last penguin in the list.
*/

console.log();

/*
  (EASY)

  Remember the penguin you created earlier, with the variable name of myPenguin? Add that penguin to the end of the penguins array!
*/

// Your code here.

/*
  (EASY)

  Print the length of the penguins array to the console.
*/

console.log();

/*
  (EASY)

  Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).
*/

// Your code here.

/*
  (EASY)

  Call the sayHello method of the first penguin in your penguins array!
*/

// Your code here.

/*
  (MEDIUM)
  
  Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.
*/

// Your code here.

/*
  (MEDIUM)

  Write a for loop to call the sayHello method of every penguin in the array!
*/

// Your code here.

/*
  (MEDIUM)

  Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2.
*/

// Your code here.

/*
  (HARD)

  Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!" -- for example, "Gunter can fly!" or "Ramón can fly!" (Don't do anything for the penguins that cannot fly.)
*/

// Your code here.