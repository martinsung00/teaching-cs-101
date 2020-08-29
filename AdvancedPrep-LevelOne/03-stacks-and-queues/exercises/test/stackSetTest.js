const SetOfStacks = require('../04-set-of-stacks');
const { assert } = require('chai');

describe('SetOfStacks', function(){
  const newSet = new SetOfStacks;

  it('Pop should return null if set is empty', function(){
    assert.equal(newSet.pop(), null);
  });

  it('PopAt should return null if set is empty', function(){
    assert.equal(newSet.popAt(0), null);
  });

  it('Push should create a new substack with new head node', function(){
    const setOne = new SetOfStacks;
    setOne.push(1);
    assert.equal(setOne.peek(), 1);
  });

  xit('Removes an item when using pop', function(){
    const setOne = new SetOfStacks(5);
    setOne.push(1);
    setOne.push(2);
    setOne.push(3);
    // setOne.pop();
    setOne.stacks[setOne.stacks.length - 1].pop();
    console.log(setOne.stacks[0]);

    assert.equal(setOne.peek(), 2);
  });
})