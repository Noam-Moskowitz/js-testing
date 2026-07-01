export const validateEmail = (email: string) => {
  return email.includes("@") && email.includes(".") && !email.includes(" ");
};
