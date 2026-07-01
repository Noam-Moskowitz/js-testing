export const getShippingCost = (
  orderTotal: number,
  isPremium: boolean
) => {
  if (isPremium) return 0;
  if (orderTotal >= 100) return 0;
  return 10;
};