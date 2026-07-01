import { describe, it, expect } from "vitest";
import { getOrderStatus } from "../../../src/conditionals/getOrderStatus";

describe("getOrderStatus", () => {
  it('should return "Awaiting Payment" when isPaid is false', () => {
    expect(getOrderStatus(false, false, false)).toBe("Awaiting Payment");
    expect(getOrderStatus(false, true, true)).toBe("Awaiting Payment");
    expect(getOrderStatus(false, true, false)).toBe("Awaiting Payment");
    expect(getOrderStatus(false, false, true)).toBe("Awaiting Payment");
  });

  it('should return "Preparing Shipment" when isPaid is true and isShipped is false', () => {
    expect(getOrderStatus(true, false, false)).toBe("Preparing Shipment");
    expect(getOrderStatus(true, false, true)).toBe("Preparing Shipment");
  });

  it('should return "In Transit" when isPaid and isShipped are true and isDelivered is false', () => {
    expect(getOrderStatus(true, true, false)).toBe("In Transit");
  });

  it('should return "Delivered" if all args are true', () => {
    expect(getOrderStatus(true, true, true)).toBe("Delivered");
  });
});
