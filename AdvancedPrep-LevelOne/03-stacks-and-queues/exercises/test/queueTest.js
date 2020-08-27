const assert = require('chai').assert;
const Queue = require('../02-implement-queue');

describe('Queue', function(){
  it('New queue should have null for head', function(){
    let newQueue = new Queue();
    assert.equal(newQueue.head, null);
  });

  it('Enqueue should add to tail', function(){
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    assert.equal(newQueue.tail.data, 2);
  });

  it('Dequeue should remove from head', function(){
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.dequeue();
    assert.equal(newQueue.peek(), 2);
  });

  it('Peek should return item at top of the list', function(){
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3)
    assert.equal(newQueue.peek(), 1);
  });

  it('Should return true if queue is empty', function(){
    let newQueue = new Queue();
    assert.equal(newQueue.isEmpty(), true);
  });
});