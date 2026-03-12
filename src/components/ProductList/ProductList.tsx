import type { Product } from "../../types/types";

import { ProductItem } from "../ProductItem/ProductItem";

import { StyledProductList, StyledProductListItem } from "./ProductList.styled";

interface Props {
  products: Product[];
  handleClick: (product: Product) => void;
}

export const ProductList = ({ products, handleClick }: Props) => {
  return (
    <StyledProductList>
      {products.map(product => (
        <StyledProductListItem key={product.id}>
          <ProductItem
            product={product}
            onClickHandler={() => handleClick(product)}
          />
        </StyledProductListItem>
      ))}
    </StyledProductList>
  );
};
