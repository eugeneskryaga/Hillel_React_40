import type { Product } from "../../types/types";

interface Props {
  product: Product;
}

export const ProductItem = ({ product }: Props) => {
  return (
    <>
      <h3>{product.title}</h3>
      <img
        src={product.images[0]}
        alt="Product image"
        width={200}
        height={200}
      />
      <p>Price: ${product.price}</p>
      <strong>Description</strong>
      <p>{product.description}</p>
    </>
  );
};
