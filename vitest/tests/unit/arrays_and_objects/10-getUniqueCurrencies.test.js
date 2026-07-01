import { describe, it, expect } from "vitest";
import { createPayment } from "../../factories/payment";
import { getUniqueCurrencies } from "../../../src/arrays_and_objects/10-getUniqueCurrencies";

describe("getUniqueCurrencies", () => {
  it("returns an array of unique currencies", () => {
    expect(
      getUniqueCurrencies([
        createPayment({ currency: "USD" }),
        createPayment({ currency: "USD" }),
        createPayment({ currency: "ILS" }),
        createPayment({ currency: "ILS" }),
        createPayment({ currency: "EUR" }),
        createPayment({ currency: "EUR" }),
        createPayment({ currency: "EUR" }),
      ])
    ).toEqual(["USD", "ILS", "EUR"]);
  });

  it("returns single currency when all payment are of the same currency", () =>
    expect(
      getUniqueCurrencies([
        createPayment({ currency: "ILS" }),
        createPayment({ currency: "ILS" }),
        createPayment({ currency: "ILS" }),
      ])
    ).toEqual(["ILS"]));

  it("preserves the order of currencies", () => {
    expect(
      getUniqueCurrencies([
        createPayment({ currency: "ILS" }),
        createPayment({ currency: "USD" }),
        createPayment({ currency: "ILS" }),
        createPayment({ currency: "EUR" }),
        createPayment({ currency: "USD" }),
        createPayment({ currency: "ILS" }),
      ])
    ).toEqual(["ILS", "USD", "EUR"]);
  });

  it("returns an empty array if passed no payments", () =>
    expect(getUniqueCurrencies([])).toEqual([]));

  it("does not mutate original array", () => {
    const payments = [createPayment({ currency: "ILS" }), createPayment({ currency: "USD" })];
    const original = [...payments];

    getUniqueCurrencies(payments);

    expect(payments).toEqual(original);
  });
});
