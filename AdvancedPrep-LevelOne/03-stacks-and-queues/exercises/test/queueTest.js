const assert = require('chai').assert;
const Queue = require('../02-implement-queue');

describe('Queue Tests', function(){
  it('init', function(){
    const newQueue = new Queue();
    assert.equal(newQueue.size(), 0);
  });
});

describe('enqueue', function(){
  const newQueue = new Queue();
  newQueue.enqueue(1);

  // assert.equal()
})