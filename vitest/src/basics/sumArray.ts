export const sumArray = (numbers: number[]): number => {
  return numbers.reduce((sum, current) => sum + current, 0);
};