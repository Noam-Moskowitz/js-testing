import { describe, it, expect } from "vitest";
import { createUser } from "../../factories/user";
import { findUserById } from "../../../src/arrays_and_objects/2-findUserById";

describe("findUserById", () => {
  const firstUserId = "1";
  const secondUserId = "2";
  const firstUser = createUser({ id: firstUserId });
  const secondUser = createUser({ id: secondUserId });
  const users = [firstUser, secondUser];

  it("returns correct user for given id", () => {
    expect(findUserById(users, firstUserId)).toBe(firstUser);
    expect(findUserById(users, secondUserId)).toBe(secondUser);
  });

  it("returns null when user is not found", () => {
    expect(findUserById(users, "3")).toBeNull();
    expect(findUserById([], firstUserId)).toBeNull();
  });
});
