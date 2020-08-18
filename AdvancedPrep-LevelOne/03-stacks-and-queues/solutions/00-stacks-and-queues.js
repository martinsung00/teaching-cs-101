/*
  This page does not have any exercises.

  On stacks and queues:

  A stack uses LIFO ordering, and supports the following operations:
  - pop(): removes an item from the top of the stack
  - push(item): adds an item to the top of the stack
  - peek(): returns the item at the top of the stack
  - isEmpty(): returns true if the stack is empty, false otherwise

  A queue uses FIFO ordering, and supports the follow operations:
  - remove(): removes an item from the front of the queue
  - add(item): adds an item to the end of the queue
  - peek(): returns the item at the front of the queue
  - isEmpty(): returns true if the queue is empty, false otherwise

  In the case of queues, sometimes add() and remove() are named enqueue() and dequeue(), respectively.

  Stacks and queues are a concept, meaning they don't exist natively in most languages –– you will have to write such implementations yourself. They can be based in arrays (and most languages support this), linked lists, or even on each other.
  
  You only need to remember two things:
  1. The order of insertion and removal.
  2. The index of insertion and removal.

  Because array implementations in Javascript are trivial, we will be implementing both stacks and queues using linked lists, and then using each other. Any implementation written based on arrays will not receive marks.

  Unlike lists, stacks and queues do not offer constant time random access, although, unlike lists, they do offer constant time insertion and removal. This is a classic case of taking specific trade-offs to do something else better.

  Stacks can also be used in recursive algorithms, as you can push temporary data onto a stack as your recurse, but then remove them as you backtrack. As such, recursive algorithms can be implemented iteratively with stacks. You should try this on your own time as a test of understanding.

  Because the implementation of stacks and queues itself is somewhat more trivial compared to implementing linked lists, there will be an additional exercise for this chapter.
*/
