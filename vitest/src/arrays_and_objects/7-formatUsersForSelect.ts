type User = {
  id: string;
  username: string;
  email: string;
};

export const formatUsersForSelect = (users: User[]) => {
  return users.map((user) => ({
    label: `${user.username} (${user.email})`,
    value: user.id,
  }));
};
