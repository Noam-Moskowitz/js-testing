export const parseAge = (age: string) => {
  if (!age.trim()) {
    throw new Error("Age is required");
  }

  const parsedAge = Number(age);

  if (Number.isNaN(parsedAge)) {
    throw new Error("Age must be a number");
  }

  if (parsedAge < 0) {
    throw new Error("Age cannot be negative");
  }

  return parsedAge;
};
