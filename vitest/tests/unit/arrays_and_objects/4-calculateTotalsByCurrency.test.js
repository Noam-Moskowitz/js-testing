import { describe, it, expect } from "vitest";
import { createPayment } from "../../factories/payment";
import { calculateTotalsByCurrency } from "../../../src/arrays_and_objects/4-calculateTotalsByCurrency";

describe("calculateTotalsByCurrency", () => {
  const payments = [
    createPayment({ currency: "USD", amount: 75 }),
    createPayment({ currency: "ILS", amount: 30 }),
    createPayment({ currency: "USD", amount: 100 }),
    createPayment({ currency: "ILS", amount: 40 }),
  ];

  it("returns totals grouped by currency", () => {
    expect(calculateTotalsByCurrency(payments)).toEqual({
      USD: 175,
      ILS: 70,
    });
  });

  it("returns the total for one currency", () =>
    expect(calculateTotalsByCurrency([createPayment({ currency: "ILS", amount: 25 })])).toEqual({
      ILS: 25,
    }));

  it("returns empty object when empty array is passed", () =>
    expect(calculateTotalsByCurrency([])).toEqual({}));
});
