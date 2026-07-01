type User = {
  id: string;
  name: string;
};

export const findUserById = (users: User[], id: string) => {
  return users.find((user) => user.id === id) ?? null;
};
