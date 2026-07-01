import { describe, it, expect } from "vitest";
import { calculateTicketPrice } from "../../../src/conditionals/6-calculateTicketPrice";

describe("calculateTicketPrice", () => {
  it("should return 0 if age is below 5", () => {
    expect(calculateTicketPrice(4)).toBe(0);
  });

  it("should return 8 if age is above or equal to 65", () => {
    expect(calculateTicketPrice(65)).toBe(8);
    expect(calculateTicketPrice(70)).toBe(8);
  });

  it("should return 10 if isStudent is true and age is between 5 and 64", () => {
    expect(calculateTicketPrice(20, true)).toBe(10);
    expect(calculateTicketPrice(5, true)).toBe(10);
    expect(calculateTicketPrice(64, true)).toBe(10);
  });

  it("should return 15 if isStudent is false and age is between 5 and 64", () => {
    expect(calculateTicketPrice(20, false)).toBe(15);
    expect(calculateTicketPrice(5, false)).toBe(15);
    expect(calculateTicketPrice(64, false)).toBe(15);
  });

  it("should prioritize child discount over student discount", () => {
    expect(calculateTicketPrice(4, true)).toBe(0);
  });
  it("should prioritize senior discount over student discount", () => {
    expect(calculateTicketPrice(65, true)).toBe(8);
  });
});
