export const getInitials = (name: string): string => {
  return name
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase())
    .join("");
};