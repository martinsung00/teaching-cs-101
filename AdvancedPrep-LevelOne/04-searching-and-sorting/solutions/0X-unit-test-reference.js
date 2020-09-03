"use strict";

import { bubbleSort } from './01-bubble-sort'

describe("Bubble Sort Tests", function () {
  it("should properly sort a list of numbers", function () {
    const input = [...Array(5).keys()].reverse();

    // Compare the result with NodeJS's library sort function.
    const expected = input.sort((a, b) => a - b);
    const actual = bubbleSort();

    expect(actual).to.equal(expected);
  });

  it("should properly sort a list of duplicates", function () {
    const input = [5, 4, 3, 3, 2, 1];

    const expected = input.sort((a, b) => a - b);
    const actual = bubbleSort();

    expect(actual).to.equal(expected);
  });
});
