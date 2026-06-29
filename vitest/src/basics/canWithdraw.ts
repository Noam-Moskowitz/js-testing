export const canWithdraw = (
  balance: number,
  amount: number
): boolean => {
  return amount > 0 && balance >= amount;
};