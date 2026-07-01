export const removeDuplicates = (
  values: string[]
): string[] => {
  return [...new Set(values)];
};