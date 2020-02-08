"use strict";

/*
  Fill in the blanks in the following function for adding a to the absolute value of b, without calling the absolute value function.
*/

export const addWithoutAbs = (a, b) => {
  //
};

/*
  Write a function that takes an integer x that is greater than 1 and returns the largest integer that is smaller than x and evenly divides x.

  For example:
  largest_factor(15) # factors are 1, 3, 5 => returns 5
  largest_factor(80) # factors are 1, 2, 4, 5, 8, 10, 16, 20, 40 => returns 40
  largest_factor(13) # factor is 1 since 13 is prime => returns 1
*/

export const largestFactor = x => {
  //
};

/*
  Douglas Hofstadter's Pulitzer-prize-winning book, Gödel, Escher, Bach, poses the following mathematical puzzle.

  1. Pick a positive integer x as the start.
  2. If x is even, divide it by 2.
  3. If x is odd, multiply it by 3 and add 1.
  4. Continue this process until x is 1.

  The number x will travel up and down but eventually end at 1 (at least for all numbers that have ever been tried -- nobody has ever proved that the sequence will terminate). Analogously, a hailstone travels up and down in the atmosphere before eventually landing on earth.

  This sequence of values of x is often called a Hailstone sequence. Write a function that takes a single argument with formal parameter name x, prints out the hailstone sequence starting at x, and returns the number of steps in the sequence:

  For example:
  hailstone(10) 10 5 16 8 4 2 1 => returns 7
*/
