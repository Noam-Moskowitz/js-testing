import { describe, expect, it } from "vitest";
import { reverseString } from "../../../src/basics/reverseString";

describe("reverseString", () => {
  it("should reverse a normal string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("should return the same string for a palindrome", () => {
    expect(reverseString("racecar")).toBe("racecar");
  });

  it("should return an empty string when given an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  it("should return the same character when given a single character", () => {
    expect(reverseString("a")).toBe("a");
  });
});