import { describe, it, expect } from "vitest";
import { getShippingCost } from "../../../src/conditionals/getShippingCost";

describe("getShippingCost", () => {
  it("should return 0 if premium customer", () => {
    expect(getShippingCost(30, true)).toBe(0);
  });

  it("should return 0 when the order total is at least 100", () => {
    expect(getShippingCost(100, false)).toBe(0);
    expect(getShippingCost(120, false)).toBe(0);
  });

  it("should return 10 for orders below 100", () => {
    expect(getShippingCost(99, false)).toBe(10);
    expect(getShippingCost(50, false)).toBe(10);
    expect(getShippingCost(20, false)).toBe(10);
  });
});
