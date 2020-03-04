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

  Good luck!
*/

/*
  (EASY)
  Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page, e.g. character's name, origin, author, and notes –– all of them strings.

  Extra credit question: what is difference here between let myPenguin = ... and const myPenguin = ... ?
  Hint: It's not that one cannot be mutated! Try it out!
*/

let myPenguin = {};

/*
  (EASY)
  Print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
*/

console.log();

/*
  (EASY)

  Write another line of code that adds a new property to your penguin called canFly and set it to false.
  
  Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.
*/

// Your code here.

/*
  (MEDIUM)

  Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"
  
  Note: Again, don't modify your previous code! Do this step by writing a new line of code.

  This line of code should invoke your function: myPenguin.chirp();
*/

// Your code here.

myPenguin.chirp();

/*
  (MEDIUM)

  Add another method to your penguin called sayHello that prints to the console the same message from the problem above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way if you change its name later, your method will still work!
*/

// Your code here.

/*
  (EASY)

  Next, call your penguin's sayHello() method and make sure that it works.
*/

// Your code here.

/*
  (EASY)

  Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
*/

// Your code here.

/*
  (MEDIUM)

  Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
*/

// Your code here.

/*
  (EASY)

  Call your penguin's fly() method and make sure it works!
*/

myPenguin.fly();

/*
  Change the canFly property to true -- again, without modifying any of your previous code!
*/

// Your code here.

/*
  Now call your penguin's fly() method again and make sure it works as expected!
*/

myPenguin.fly();

/*
  Write a for ... in loop to print each key to the console.
*/

const getKeys = function(myPenguin) {
  //
};

/*
  Write another for ... in loop to print the value of each key to the console.
*/

const getValues = function(myPenguin) {
  //
};
