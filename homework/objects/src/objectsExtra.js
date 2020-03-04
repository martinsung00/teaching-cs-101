'use strict';

/*
  @author Gordon Zhang (GitHub: zwilhelmm)

  This assignment is designed to help a beginner practice their objects. Please don't change the function definitions!

  You can also Ctrl+F (Cmd+F) the difficulty keys:
  EASY MEDIUM HARD EXTREME
  to better search for problems.

  Here's some helpful reminders:
  1. Keep your code clean and readable.

  Good luck!
*/

/*
  (EASY)

  Write a program to get the number of keys of any JavaScript object.
*/

const getKeyCount = function(myObj) {
  //
}

/*
  (MEDIUM)

  Write a program to get the volume of a cylinder. Remember to create the cylinder first. Remember that volume is pi * r ^ 2 * h.
*/

const cylinder = {};

const getCylinderVolume = function (cylinder) {
  //
}

/*
  (UNFINISHED)

  Constructors in JavaScript, like in most other object-oriented programming languages, provides a template for creation of objects. In other words, it defines a set of properties and methods that would be common to all objects initialized using the constructor.

  Here's an example :
  function Vehicle(name, maker) { 
    this.name = name; 
    this.maker = maker; 
  } 
  
  let car1 = new Vehicle('Fiesta', 'Ford'); 
  let car2 = new Vehicle('Santa Fe', 'Hyundai');
  
  console.log(car1.name);    // Output: Fiesta 
  console.log(car2.name);    // Output: Santa Fe

  Notice the usage of the “new” keyword before the function Vehicle. Using the “new” keyword in this manner before any function turns it into a constructor. What the “new Vehicle()” actually does is:

  1. It creates a new object.
  2. Then, it sets up the object to work with the Vehicle function’s prototype object. (The object starts out empty, but immediately inherits all the properties of the prototype.)
  3. Then calls Vehicle() in the context of the new object, which means that when the “this” keyword is encountered in the constructor(vehicle()), it refers to the new object that was created in the first step.
  4. Once this is finished, the newly created object is returned to car1 and car2(in the above example).
*/