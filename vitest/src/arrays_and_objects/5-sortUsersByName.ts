type User = {
  id: string;
  name: string;
};

export const sortUsersByName = (users: User[]) => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};
