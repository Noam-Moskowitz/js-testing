export type Product = {
  id: string;
  name: string;
  price: number;
};

export const getMostExpensiveProduct = (products: Product[]) => {
  if (products.length === 0) return null;

  return products.reduce((highest, product) => {
    return product.price > highest.price ? product : highest;
  });
};
