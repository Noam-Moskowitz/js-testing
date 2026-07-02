import { describe, it, expect } from "vitest";
import { validatePassword } from "../../../src/validation_and_errors/2-validatePassword";

describe("validatePassword", () => {
  it("returns true if password satisfies all validation rules", () => {
    const validPassword = "Password123";
    expect(validatePassword(validPassword)).toBe(true);
  });

  it("returns false if password length is shorter than 8", () => {
    const sevenCharPassword = "Passwo1";
    const minimumLengthPassword = "Passwor1";
    expect(validatePassword(sevenCharPassword)).toBe(false);
    expect(validatePassword(minimumLengthPassword)).toBe(true);
  });

  it("returns false if password does not include at least one upper case letter", () => {
    expect(validatePassword("password123")).toBe(false);
  });

  it("returns false if password does not include at least one lower case letter", () => {
    expect(validatePassword("PASSWORD123")).toBe(false);
  });

  it("returns false if password does not include at least one number", () => {
    expect(validatePassword("Password")).toBe(false);
  });
});
