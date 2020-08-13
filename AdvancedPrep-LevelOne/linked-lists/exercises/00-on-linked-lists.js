/*
  This page does not have any exercises.

  On linked lists:

  A linked list is a data structure that represents a sequence of nodes. In singly-linked lists, a node is a data structure that contains two properties:

  1. data: a data value it is responsible for remembering.
  2. next: a pointer to the next node in line.

  Visually, a singly-linked list resembles:
  1 -> 2 -> 3 -> 4 -> ... -> null

  Note that the last node points to null, as there are no more nodes in line.

  This is often represented using objects:

  const head = {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: ...
      }
    }
  }

  You will notice that invoking head.data returns the first value (1), and head.next.data returns the second value (2). Also note that data can be of any value, objects and functions even, not just integers. They can also have multiple data properties, provided the implementation can support the functionality. As with all data structures, linked lists are a concept, and not a programmatic function of any language.

  A doubly-linked list consists of doubly-linked nodes, which have a third property:

  3. prev: a pointer to the previous node.

  In doubly-linked lists, when modifying node references, don't forget to also modify the prev reference.

  Unlike lists, linked lists do not provide O(1) random access, as they are no indexed, which means if you want to find the kth element, you will have to iterate through k elements.

  The benefit, on the other hand, is O(1) appending and removing from the start of the list. If you are also appending to the end of the list, then the insertion order is also preserved.

  Linked lists are also tightly coupled to their head value. The first node is called the head. The last node is called the tail. If reference to the first node is lost, then the reference to any of the remaining nodes are also lost. For example, in the above linked list, losing reference to the original, outermost layer:

  {
    data: 1,
    next: ...
  }

  will mean that the entire list will be lost to the user. Be careful not to do this. Because singly (and doubly) linked lists are uni-directional, the tail does not bear the same caveat.

  To illustrate, when implementing deleteHead():

  // We have the list.
  const head = {
    data: 1,
    next: ... // some more nodes
  }

  // Delete the head.
  head = null;

  // We have nothing to return! That list is gone forever.
  return ...?

  Some helpful tips when dealing with linked lists:

  In many linked list problems, it may be useful to use more than one iterator when diving through a list.
  
  To illustrate, when implementing getPenultimateValue():
  
  // Naïve game plan:
  1. We don't know the size of the list, so iterate through all k elements.
  2. Store k in a variable named 'size'.
  3. We need to find the value at position k - 1, so iterate k - 1 times.
  4. Return that node's value.

  This takes O(n + (n - 1)) time.

  // Better game plan:
  1. Assuming the list has at least two elements, start a slower pointer on the head node, and a faster one on head.next. (The second one has a head start.)
  2. Increment both pointers one node at a time each until the faster one hits the end, at node k. Because the faster pointer had a head start of 1 node, the slower one must be on node k - 1.
  3. Return that node's value.

  This takes O(n) time, which is almost exactly twice as fast as the naïve plan.

  Linked lists are also recursive structures. If you reduce the size of an existing linked list, you have another (smaller) linked list. If you are having trouble exploring an iterative solution, it may be worth trying a recursive one, though this should not be necessary.
  
  Note that recursive algorithms, however, will _always_ take at least O(n) space. You should, in your own time, try to write a proof to prove this. The answer is a lot easier than it sounds.

  You should also note that all recursive algorithms, for any data structure, any algorithm, any recursive algorithm at all, can all be implemented iteratively. The reverse is also true: any and all iterative algorithms can also be implemented recursively. You should, in your own time, research the proof on why this is.
*/
