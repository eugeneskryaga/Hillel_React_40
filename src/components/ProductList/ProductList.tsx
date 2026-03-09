import type { Product } from "../../types/types";

import { ProductItem } from "../ProductItem/ProductItem";

import css from "./ProductList.module.css";

interface Props {
  products: Product[];
  handleClick: (product: Product) => void;
}

export const ProductList = ({ products, handleClick }: Props) => {
  return (
    <ul className={css.product_list}>
      {products.map(product => (
        <li
          key={product.id}
          className={css.product_list_item}
        >
          <ProductItem
            product={product}
            onClickHandler={() => handleClick(product)}
          />
        </li>
      ))}
    </ul>
  );
};
