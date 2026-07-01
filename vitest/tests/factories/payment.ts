export type Payment = {
  id: string;
  currency: string;
  amount: number;
  status: "pending" | "approved" | "rejected";
};

export const createPayment = (overrides: Partial<Payment> = {}): Payment => ({
  id: new Date().getTime().toString(),
  currency: "ILS",
  amount: 100,
  status: "approved",
  ...overrides,
});
