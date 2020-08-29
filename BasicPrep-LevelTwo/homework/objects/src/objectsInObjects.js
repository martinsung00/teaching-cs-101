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

  favoriteFoods: ["fish", "ice cream", "hot chocolate", "pineapples"]
};

/*
  (EASY)

  Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value! (I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and flip-flops, because wouldn't that be ridiculous?)
*/

// Your code here.

/*
  (MEDIUM)

  Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.
*/

// Your code here.

console.log();

/*
  (EASY)

  Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch" -- because penguins are classy like that!
*/

// Your code here.

/*
  (EASY)

  Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value. (Again, because penguins are classy!)
*/

// Your code here.

/*
  (EASY)

  This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property.
*/

// Your code here.

/*
  (HARD)

  Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console. 
*/

// Your code here.
