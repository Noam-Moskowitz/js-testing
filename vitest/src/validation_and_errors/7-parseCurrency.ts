export const parseCurrency = (value: string) => {
  const regex = /^\$\d+(\.\d{2})?$/;

  if (!regex.test(value)) {
    throw new Error("Invalid currency format");
  }

  return Number(value.replace("$", ""));
};
