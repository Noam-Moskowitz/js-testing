export const createUsername = (firstName: string, lastName: string) => {
  if (!firstName.trim()) {
    throw new Error("First name is required");
  }

  if (!lastName.trim()) {
    throw new Error("Last name is required");
  }

  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
};
