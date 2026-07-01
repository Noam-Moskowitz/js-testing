import { User } from "../../src/arrays_and_objects/1-filterActiveUsers";

export const createUser = (overrides: Partial<User> = {}) => ({
  id: "1",
  name: "John",
  active: true,
  role: "user",
  ...overrides,
});
