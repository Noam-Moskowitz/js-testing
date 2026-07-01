import { describe, it, expect } from "vitest";
import { createPayment } from "../../factories/payment";
import { getPendingPaymentsTotal } from "../../../src/arrays_and_objects/8-getPendingPaymentsTotal";

describe("getPendingPaymentsTotal", () => {
  it("returns total of pending payments only", () => {
    expect(
      getPendingPaymentsTotal([
        createPayment({ amount: 25, status: "pending" }),
        createPayment({ amount: 50, status: "pending" }),
        createPayment({ amount: 125, status: "pending" }),
        createPayment({ amount: 500, status: "approved" }),
        createPayment({ amount: 1000, status: "rejected" }),
      ])
    ).toBe(200);
  });

  it("returns 0 if no  pending payments are passed", () => {
    expect(
      getPendingPaymentsTotal([
        createPayment({ amount: 1, status: "rejected" }),
        createPayment({ amount: 1, status: "approved" }),
        createPayment({ amount: 5, status: "approved" }),
        createPayment({ amount: 10, status: "rejected" }),
      ])
    ).toBe(0);
  });

  it("returns 0 if passed an empty array", () => expect(getPendingPaymentsTotal([])).toBe(0));
});
