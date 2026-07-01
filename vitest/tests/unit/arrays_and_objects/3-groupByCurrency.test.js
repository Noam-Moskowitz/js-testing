import { describe, it, expect } from "vitest";
import { createPayment } from "../../factories/payment";
import { groupByCurrency } from "../../../src/arrays_and_objects/3-groupByCurrency";

describe("groupByCurrency", () => {
  const usdPayment1 = createPayment({ currency: "USD" });
  const usdPayment2 = createPayment({ currency: "USD" });
  const ilsPayment1 = createPayment({ currency: "ILS" });
  const ilsPayment2 = createPayment({ currency: "ILS" });
  const payments = [usdPayment1, ilsPayment1, usdPayment2, ilsPayment2];

  it("returns payments grouped by currency", () => {
    expect(groupByCurrency(payments)).toEqual({
      USD: [usdPayment1, usdPayment2],
      ILS: [ilsPayment1, ilsPayment2],
    });
  });
});
