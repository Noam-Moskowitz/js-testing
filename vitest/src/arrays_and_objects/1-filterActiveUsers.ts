type User = {
  id: string;
  name: string;
  active: boolean;
};

export const filterActiveUsers = (users: User[]) => {
  return users.filter((user) => user.active);
};
