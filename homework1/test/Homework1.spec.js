"use strict";

import { nthPrimeNumber } from "./../src/Homework1";

describe("Homework1 tests", () => {
  describe("Positive tests", () => {
    it("should return the correct prime number", () => {
      expect(nthPrimeNumber(3)).to.equal(5);
      expect(nthPrimeNumber(11)).to.equal(31);
    });
  });

  describe("Negative tests", () => {
    it("should reject input of zero or less", () => {
      expect(nthPrimeNumber(0)).to.be.null;
      expect(nthPrimeNumber(-1)).to.be.null;
    });

    it("should reject invalid input", () => {
      expect(nthPrimeNumber("abc")).to.be.null;
      expect(nthPrimeNumber({})).to.be.null;
      expect(nthPrimeNumber(true)).to.be.null;
    });
  });
});
