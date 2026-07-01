import { describe, it, expect } from "vitest";
import { capitalize } from "../../../src/basics/6-capitalize";

describe("capitalize", () => {
  it("should return an empty string if no arg is passed", () => expect(capitalize()).toBe(""));

  it("should not remove any lettes", () => {
    const word = "hello";
    const originalLength = word.length;
    const result = capitalize(word);

    expect(result.length).toBe(originalLength);
  });

  it("should only capitalize the first character", () => {
    const word = "hello";
    const capitalizedFirstChar = "H";
    const capitalizedSecondChar = "E";
    const result = capitalize(word);

    expect(result[0]).toBe(capitalizedFirstChar);
    expect(result[1]).not.toBe(capitalizedSecondChar);
    expect(capitalize("hEllo")).toBe("Hello");
  });
});
