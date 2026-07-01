export const getAccessLevel = (
  isAdmin: boolean,
  isManager: boolean
) => {
  if (isAdmin) return "admin";
  if (isManager) return "manager";
  return "user";
};