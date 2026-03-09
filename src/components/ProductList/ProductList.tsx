import type { Product } from "../../types/types";

import { ProductItem } from "../ProductItem/ProductItem";

import "./ProductList.module.css";

interface Props {
  products: Product[];
  handleClick: (product: Product) => void;
}

export const ProductList = ({ products, handleClick }: Props) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <ProductItem
            product={product}
            onClickHandler={() => handleClick(product)}
          />
        </li>
      ))}
    </ul>
  );
};
