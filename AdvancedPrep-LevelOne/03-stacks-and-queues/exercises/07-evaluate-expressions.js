'use strict'

const Stack = require('./00-stacks-and-queues');
/*
  Implement an algorithm that evaluates fully parenthesized arithmetic expressions that conform to the following grammatical rules:

  1. Operators, operands, and parentheses are separated by whitespace.
  2. Each operation must be enclosed in parentheses.
  3. Valid operators include: "+", "-", "*", "/", and "sqrt".
  4. Valid operands include all non-negative integers.

  For example, you will need to write:
  "( 1 + ( 2 + 3 ) )", instead of:
  "( 1 + 2 + 3 )"

  You can assume that the input will follow the above format.

  Input: "( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )"
  Output: 101.0

  Input: "( ( 1 + sqrt ( 5 ) ) / 2.0 )"
  Output: 1.618033988749895

  α.
*/

export function evaluate(str) {
  const stack = new Stack;
  let solution = 0;

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let converted = current.replace(/"/g, "");
    if (current === '*' || current === '+' || current === '-' || current === '/' || current === '%' || typeof converted === number) {
      stack.push(converted)
    }
  }

  while(!stack.isEmpty()) {

  }

}
