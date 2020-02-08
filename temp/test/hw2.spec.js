"use strict";

import homework2 from "../src/hw2.js.js";

describe("Homework 2 Unit Tests", () => {
  describe("nth Fibonacci Number :: Iterative", () => {
    it("should return the correct Fibonacci number given a positive input", () => {
      expect(homework1.getNthFibonacciNumberIterative(5)).to.equal(3);
      expect(homework1.getNthFibonacciNumberIterative(6)).to.equal(5);
      expect(homework1.getNthFibonacciNumberIterative(15)).to.equal(377);
    });

    it("should return null for negative input", () => {
      expect(homework1.getNthFibonacciNumberIterative(-1)).to.be.null;
    });

    it("should return null for invalid input type", () => {
      expect(homework1.getNthFibonacciNumberIterative("abc")).to.be.null;
    });
  });
});
