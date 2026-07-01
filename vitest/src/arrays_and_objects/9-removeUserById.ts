type User = {
  id: string;
  name: string;
};

export const removeUserById = (users: User[], id: string) => {
  return users.filter((user) => user.id !== id);
};
