export const calculateAverage = (numbers: number[]) => {
  if (numbers.length === 0) {
    throw new Error("Array cannot be empty");
  }

  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
};
