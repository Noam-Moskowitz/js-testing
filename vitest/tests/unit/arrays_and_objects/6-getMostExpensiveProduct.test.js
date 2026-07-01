import { describe, it, expect } from "vitest";
import { createProduct } from "../../factories/product";
import { getMostExpensiveProduct } from "../../../src/arrays_and_objects/6-getMostExpensiveProduct";

describe("getMostExpensiveProduct", () => {
  const expensiveItem = createProduct({ price: 10000 });
  const mediumProduct = createProduct({ price: 12 });
  const cheapProduct = createProduct({ price: 10 });

  it("returns the most expensive product", () => {
    expect(getMostExpensiveProduct([cheapProduct, expensiveItem, mediumProduct])).toBe(
      expensiveItem
    );
    expect(getMostExpensiveProduct([cheapProduct, mediumProduct])).toBe(mediumProduct);
    expect(getMostExpensiveProduct([cheapProduct])).toBe(cheapProduct);
  });

  it("returns null if array is empty", () => expect(getMostExpensiveProduct([])).toBeNull());

  it("returns the first expensive item found in a tie", () => {
    const secondExpensiveItem = createProduct({ price: 10000, name: "Shelf" });

    expect(getMostExpensiveProduct([expensiveItem, secondExpensiveItem])).toBe(expensiveItem);
    expect(getMostExpensiveProduct([secondExpensiveItem, expensiveItem])).toBe(secondExpensiveItem);
  });
});
