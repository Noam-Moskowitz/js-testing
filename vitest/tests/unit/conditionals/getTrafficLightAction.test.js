import { describe, it, expect } from "vitest";
import { getTrafficLightAction } from "../../../src/conditionals/getTrafficLightAction";

describe("getTrafficLightAction", () => {
  it.each([
    { light: "green", expected: "go" },
    { light: "yellow", expected: "slow" },
    { light: "red", expected: "stop" },
  ])("should return $expected when light is $light", ({ light, expected }) =>
    expect(getTrafficLightAction(light)).toBe(expected)
  );
});
