import { describe, it, expect } from "vitest";
import { createUser } from "../../factories/user";
import { sortUsersByName } from "../../../src/arrays_and_objects/5-sortUsersByName";

describe("sortUsersByName", () => {
  const james = createUser({ name: "James" });
  const alan = createUser({ name: "Alan" });
  const zeke = createUser({ name: "Zeke" });
  const brian = createUser({ name: "Brian" });

  it("returns an array of users sorted by name", () => {
    const users = [james, alan, zeke, brian];

    expect(sortUsersByName(users)).toEqual([alan, brian, james, zeke]);
  });

  it("returns an empty array if passed an empty array", () =>
    expect(sortUsersByName([])).toEqual([]));

  it("does not mutate the original array", () => {
    const users = [james, alan, zeke, brian];
    const original = [...users];

    sortUsersByName(users);

    expect(users).toEqual(original);
  });
});
