import type { Product } from "../../types/types";

interface Props {
  product: Product;
  onClickHandler: (product: Product) => void;
}

export const ProductItem = ({ product, onClickHandler }: Props) => {
  return (
    <>
      <h3>{product.title}</h3>
      <img
        src={product.images[0]}
        alt="Product image"
        width={150}
        height={150}
      />
      <p>Price: ${product.price}</p>
      <button onClick={() => onClickHandler(product)}>View more</button>
    </>
  );
};
