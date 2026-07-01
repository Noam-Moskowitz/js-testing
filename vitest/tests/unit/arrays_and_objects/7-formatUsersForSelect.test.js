import { describe, it, expect } from "vitest";
import { createUser } from "../../factories/user";
import { formatUsersForSelect } from "../../../src/arrays_and_objects/7-formatUsersForSelect";

describe("formatUsersForSelect", () => {
  const user1 = createUser({ email: "jamie@gmail.com", username: "Jamie", id: "user-1" });
  const user2 = createUser({ email: "john@aol.com", username: "John", id: "user-2" });

  it("returns users in correct format", () => {
    expect(formatUsersForSelect([user1, user2])).toEqual([
      {
        label: `${user1.username} (${user1.email})`,
        value: user1.id,
      },
      {
        label: `${user2.username} (${user2.email})`,
        value: user2.id,
      },
    ]);
  });

  it("returns an empty array if passed an empty array", () =>
    expect(formatUsersForSelect([])).toEqual([]));

  it("does not mutate the original array", () => {
    const originalArray = [user1, user2];
    const copy = [...originalArray];

    formatUsersForSelect(copy);

    expect(copy).toEqual(originalArray);
  });
});
