import { describe, it, expect } from "vitest";
import { createUser } from "../../factories/user";
import { filterActiveUsers } from "../../../src/arrays_and_objects/1-filterActiveUsers";

describe("filterActiveUsers", () => {
  it("removes all inactive users", () => {
    const activeUser1 = createUser({ active: true });
    const activeUser2 = createUser({ active: true });
    const inactiveUser1 = createUser({ active: false });
    const inactiveUser2 = createUser({ active: false });

    expect(filterActiveUsers([activeUser1, inactiveUser1])).toEqual([activeUser1]);
    expect(filterActiveUsers([activeUser1, inactiveUser1, inactiveUser2])).toEqual([activeUser1]);
    expect(filterActiveUsers([activeUser1, activeUser2, inactiveUser1, inactiveUser2])).toEqual([
      activeUser1,
      activeUser2,
    ]);
    expect(filterActiveUsers([inactiveUser1, inactiveUser2])).toEqual([]);
  });
});
