const assert = require('chai').assert;
const Stack = require('../01-implement-stack');

describe('Stack', function() {
  it('New stack should have null for head', function(){
    let newStack = new Stack();
    assert.equal(newStack.head, null);
  });

  it('Pushing a node to an empty stack should attach the newly created node to the head', function(){
    let newStack = new Stack();
    newStack.push(1);
    assert.equal(newStack.head.data, 1)
  });

  it('Should handle multiple push and pops', function(){
    let newStack = new Stack();
    newStack.push(1);
    newStack.pop();
    newStack.push(2);
    newStack.push(3)
    newStack.pop();
    newStack.pop;
    newStack.push(4);
    assert.equal(newStack.head.data, 4);
  })

  it('Pop on an empty stack should return null', function(){
    let newStack = new Stack();
    let value = newStack.pop();
    assert.equal(value, null)
  });

  it('Pop should remove from top of stack', function(){
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    let value = newStack.pop();
    assert.equal(value, 3);
  });

  it('Peek should return item at the top of the stack', function(){
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.push(4)
    let value = newStack.peek();
    assert.equal(value, 4);
  });

  it('isEmpty on an empty stack should return true', function(){
    let newStack = new Stack();
    assert.equal(newStack.isEmpty(), true);
  });
})