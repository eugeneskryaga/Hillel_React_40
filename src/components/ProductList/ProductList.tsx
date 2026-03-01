import type { Product } from "../../types/types";

import { ProductItem } from "../ProductItem/ProductItem";

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  );
};
