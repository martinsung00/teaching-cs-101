"use strict";

import { bubbleSort } from "../01-bubble-sort";
import { selectionSort } from "../02-selection-sort";
import { insertionSort } from "../03-insertion-sort";
import { assert } from "chai";

describe("Bubble Sort Tests", function() {
  it('Should sort a list of random numbers', function() {
    const array = [7, 8, 10, 2, 4, 3];
    const newArray = bubbleSort(array);

    assert.equal(newArray, [2, 3, 4, 7, 8, 10]);
  });
});

describe("Selection Sort Tests", function() {
  it('Should sort a list of random numbers', function() {
    const array = [7, 8, 10, 2, 4, 3];
    const newArray = selectionSort(array);

    assert.equal(newArray, [2, 3, 4, 7, 8, 10]);
  });
});

describe("Selection Sort Tests", function() {
  it('Should sort a list of random numbers', function() {
    const array = [7, 8, 10, 2, 4, 3];
    const newArray = selectionSort(array);

    assert.equal(newArray, [2, 3, 4, 7, 8, 10]);
  });
});

describe("Insertion Sort Tests", function() {
  it('Should sort a list of random numbers', function() {
    const array = [7, 8, 10, 2, 4, 3];
    const newArray = insertionSort(array);

    assert.equal(newArray, [2, 3, 4, 7, 8, 10]);
  });
});
