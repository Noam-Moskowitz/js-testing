type Payment = {
  currency: string;
};

export const getUniqueCurrencies = (payments: Payment[]) => {
  return [...new Set(payments.map((payment) => payment.currency))];
};
