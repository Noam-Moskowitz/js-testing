import { Product } from "../../src/arrays_and_objects/6-getMostExpensiveProduct";

export const createProduct = (overrides: Partial<Product> = {}): Product => ({
  id: new Date().getTime().toString(),
  name: "Lamp",
  price: 100,
  ...overrides,
});
