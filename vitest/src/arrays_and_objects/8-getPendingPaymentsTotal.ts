type Payment = {
  status: "pending" | "approved" | "rejected";
  amount: number;
};

export const getPendingPaymentsTotal = (payments: Payment[]) => {
  return payments
    .filter((payment) => payment.status === "pending")
    .reduce((total, payment) => total + payment.amount, 0);
};
