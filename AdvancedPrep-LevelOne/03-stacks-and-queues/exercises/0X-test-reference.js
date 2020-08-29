"use strict";

/* You'll be importing from exercises, not solutions, obviously. */
import Stack from "./../solutions/01-implement-stack";

describe("Stack Tests", function () {
  describe("init", function () {
    // This is the base case. Base cases always come first, to guarantee that the class can even be built before we do anything with it. It is a sanity check.
    it("should be able to create a stack of size zero", function () {
      const stack = new Stack();

      const size = stack.size();
      expect(size).to.equal(0);
    });
  });

  describe("push", function () {
    it("should be able to insert elements", function () {
      const stack = new Stack();

      stack.push(1);

      // Insertion is done, but the size is best way to verify it. This is the only reason size() does not have its own test suite. If there were other ways to check this, e.g. printing the stack, then size() would need its own tests. The size() test is also already checked in the base case.
      const size = stack.size();
      expect(size).to.equal(1);
    });

    // Notice that there is no test for maintaining push() order. This is implicitly tested by pop() order, below:
  });

  describe("pop", function () {
    it("should be able to remove elements from the stack", function () {
      const stack = new Stack();

      stack.push(1);

      const result = stack.pop();
      expect(result).to.equal(1);

      // Notice how we only test for the ability to remove elements, not the ability to preserve order of removed elements. This is why these tests are called unit tests: each test checks for the SMALLEST possible unit of behavior. The order preservation test comes next, naturally.
    });

    it("should be able to remove elements in order", function () {
      const stack = new Stack();

      stack.push(1);
      stack.push(2);
      stack.push(3);

      stack.pop();
      stack.pop();

      const result = stack.pop();
      expect(result).to.equal(1); // Order preserved!
    });

    it("should return null when removing from an empty list", function () {
      const stack = new Stack();

      // We don't explicitly test for stack size to equal zero, since that's already done by the base case. It is not relevant to this unit test. Remember, UNIT test.

      const result = stack.pop();
      expect(result).to.be.null; // Same as expect(result).to.equal(null);
    });
  });

  describe("peek", function () {
    it("should be able to return an element from the stack", function () {
      const stack = new Stack();

      stack.push(1);

      const result = stack.peek();
      expect(result).to.equal(1);

      // Remember, this is a UNIT test, meaning we only check that it returns something at all here. Checking that peek() doesn't alter the size comes next:
    });

    it("should be able to return an element from a filled stack without changing its size", function () {
      const stack = new Stack();

      stack.push(1);
      stack.push(2);

      const size = stack.size(); // Remember, check the size BEFORE you peek.
      const result = stack.peek();
      expect(result).to.equal(2);
      expect(size).to.equal(2);
    });

    it("should return null when called on an empty stack", function () {
      const stack = new Stack();

      const result = stack.peek();
      expect(result).to.be.null;
    });
  });
});

// Biggest takeaways: remember, these are UNIT tests, which means each it() only tests the SMALLEST POSSIBLE UNIT of functionality, and only that. It eliminates outside variables by isolating functionality into very controlled environments, and testing for the expected behavior.

// Second biggest takeaway: notice that EACH AND EVERY POSSIBILITY has been accounted for. There is NO ROOM FOR BUGS, because each permutation possible by any and every interaction of Stack has been accounted for. This is known as code coverage: you want to cover every possible test case. Rule of thumb: if your source code is physically longer than your test code, then you are doing it wrong. Tests are your guarantee that when things break, it's not YOUR code that's messing up. Be responsible for your own protection, cover your behind when you are pushing code out there, write your own tests.

// Third biggest takeaway: notice that the tests are built in a logical order. The top starts with size, then we test for push, then pop. We do not test for pop first because pop implicitly requires push to work. We build our cases up as we go. Nested describe blocks and it blocks form a "file cabinet", so that you can quickly find your own test cases and identify fixes fast. Two weeks after you write your code, it is unlikely you'll remember where everything is. Keep yourself organized, so that you can recover quickly when things break.