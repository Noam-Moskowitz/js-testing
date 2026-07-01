export type User = {
  id: string;
  name: string;
  active: boolean;
  username: string;
  email: string;
};

export const createUser = (overrides: Partial<User> = {}) => ({
  id: new Date().getTime().toString(),
  name: "John",
  active: true,
  role: "user",
  ...overrides,
});
