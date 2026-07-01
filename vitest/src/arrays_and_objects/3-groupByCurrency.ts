export type Payment = {
  id: string;
  currency: string;
  amount: number;
};

export const groupByCurrency = (payments: Payment[]) => {
  return payments.reduce<Record<string, Payment[]>>((groups, payment) => {
    groups[payment.currency] ??= [];
    groups[payment.currency].push(payment);
    return groups;
  }, {});
};
