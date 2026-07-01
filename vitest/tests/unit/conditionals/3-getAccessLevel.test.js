import { describe, it, expect } from "vitest";
import { getAccessLevel } from "../../../src/conditionals/3-getAccessLevel";

describe("getAccessLevel", () => {
  it.each([
    { isAdmin: true, isManager: true, expected: "admin" },
    { isAdmin: true, isManager: false, expected: "admin" },
    { isAdmin: false, isManager: true, expected: "manager" },
    { isAdmin: false, isManager: false, expected: "user" },
  ])(
    "returns $expected when isAdmin=$isAdmin and isManager=$isManager",
    ({ isAdmin, isManager, expected }) => {
      expect(getAccessLevel(isAdmin, isManager)).toBe(expected);
    }
  );
});
