export const calculateTicketPrice = (
  age: number,
  isStudent: boolean
) => {
  if (age < 5) return 0;
  if (age >= 65) return 8;
  if (isStudent) return 10;
  return 15;
};