import { describe, it, expect } from "vitest";
import { createUser } from "../../factories/user";
import { removeUserById } from "../../../src/arrays_and_objects/9-removeUserById";

describe("removeUserById", () => {
  const user1 = createUser({ id: "user-1" });
  const user2 = createUser({ id: "user-2" });
  const user3 = createUser({ id: "user-3" });

  it("removes the user with the matching id", () => {
    const users = [user1, user2, user3];
    const result = removeUserById(users, user2.id);

    expect(result).toEqual([user1, user3]);
  });

  it("returns all users when no matching id exists", () => {
    const users = [user1, user2, user3];
    const result = removeUserById(users, "user-4");

    expect(result).toEqual(users);
  });

  it("doesn't mutate the original array", () => {
    const users = [user1, user2, user3];
    const original = [...users];

    removeUserById(users, user1.id);

    expect(users).toEqual(original);
  });
});
