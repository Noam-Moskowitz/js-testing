export const withdraw = (balance: number, amount: number) => {
  if (amount <= 0) {
    throw new Error("Amount must be greater than zero");
  }

  if (amount > balance) {
    throw new Error("Insufficient funds");
  }

  return balance - amount;
};
