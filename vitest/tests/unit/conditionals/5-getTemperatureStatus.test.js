import { describe, it, expect } from "vitest";
import { getTemperatureStatus } from "../../../src/conditionals/5-getTemperatureStatus";

describe("getTemperatureStatus", () => {
  it.each([
    { temp: -1, expected: "freezing" },
    { temp: 0, expected: "freezing" },
    { temp: 1, expected: "cold" },
    { temp: 19, expected: "cold" },
    { temp: 20, expected: "warm" },
    { temp: 29, expected: "warm" },
    { temp: 30, expected: "hot" },
    { temp: 35, expected: "hot" },
  ])("should return $expected for temp $temp", ({ temp, expected }) =>
    expect(getTemperatureStatus(temp)).toBe(expected)
  );
});
