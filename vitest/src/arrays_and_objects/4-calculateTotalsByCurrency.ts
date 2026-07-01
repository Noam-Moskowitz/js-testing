type Payment = {
  currency: string;
  amount: number;
};

export const calculateTotalsByCurrency = (payments: Payment[]) => {
  return payments.reduce<Record<string, number>>((totals, payment) => {
    totals[payment.currency] = (totals[payment.currency] ?? 0) + payment.amount;
    return totals;
  }, {});
};
