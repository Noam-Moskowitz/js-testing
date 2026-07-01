import { describe, it, expect } from "vitest";
import { getInitials } from "../../../src/basics/4-getInitials";

describe("getInitials", () => {
  it("should return the initals of arg", () => {
    expect(getInitials("John Doe")).toBe("JD");
    expect(getInitials("Noam Moskowitz")).toBe("NM");
    expect(getInitials("Noam James Moskowitz")).toBe("NJM");
  });

  it("should return capitalized initials", () => {
    expect(getInitials("john doe")).toBe("JD");
    expect(getInitials("JOHN DOE")).toBe("JD");
    expect(getInitials("John doe")).toBe("JD");
  });

  it("should return one initial per word", () => {
    expect(getInitials("John")).toBe("J");
    expect(getInitials("John Doe")).toBe("JD");
    expect(getInitials("John Steve Doe")).toBe("JSD");
    expect(getInitials("John Steve Tom Doe")).toBe("JSTD");
  });

  it("should remove whitespace", () => {
    expect(getInitials("   John Doe   ")).toBe("JD");
  });
});
