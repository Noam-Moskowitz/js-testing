import { Payment } from "../../src/arrays_and_objects/3-groupByCurrency";

export const createPayment = (overrides: Partial<Payment> = {}) => ({
  id: new Date().getTime().toString(),
  currency: "ILS",
  amount: 100,
  ...overrides,
});
