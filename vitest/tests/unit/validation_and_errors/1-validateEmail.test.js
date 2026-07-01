import { describe, it, expect } from "vitest";
import { validateEmail } from "../../../src/validation_and_errors/1-validateEmail";

describe("validateEmail", () => {
  it("returns false if email has whitespace", () => {
    expect(validateEmail("john@example.com ")).toBe(false);
    expect(validateEmail(" john@example.com")).toBe(false);
    expect(validateEmail("john @example.com")).toBe(false);
  });

  it('returns false if email does not include both "@" and "."', () => {
    expect(validateEmail("john@examplecom")).toBe(false);
    expect(validateEmail("johnexample.com")).toBe(false);
    expect(validateEmail("johnexamplecom")).toBe(false);
  });

  it('returns true when email includes "@", ".", and has no whitespace', () => {
    expect(validateEmail("john@example.com")).toBe(true);
  });
});
