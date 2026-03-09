import { useState, useEffect } from "react";

import { getProducts } from "../../services/productsApi";

import { ProductList } from "../ProductList/ProductList";
import { SearchForm } from "../SearchForm/SearchForm";
import { Notification } from "../Notification/Notification";

import type { Product } from "../../types/types";
import { Modal } from "../Modal/Modal";

export const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { products } = await getProducts(search);
        setProducts(products);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [search]);

  const handleSearch = async (keyWord: string) => {
    setSearch(keyWord);
  };

  const onModalOpen = (product: Product) => {
    setSelectedProduct(product);
  };

  const onModalClose = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {products.length > 0 ? (
        <ProductList
          products={products}
          handleClick={onModalOpen}
        />
      ) : (
        <Notification notification="Sorry, no results this time." />
      )}
      {isLoading && <Notification notification="Loading..." />}
      {isError && <Notification notification="Oops, something went wrong." />}
      {selectedProduct && (
        <Modal onClose={onModalClose}>
          <h3>{selectedProduct.title}</h3>
          <img
            src={selectedProduct.images[0]}
            alt="product image"
            width={150}
            height={150}
          />
          <p>
            <span>Category:</span> {selectedProduct.category}
          </p>
          {selectedProduct.brand && (
            <p>
              <span>Brand:</span> {selectedProduct.brand}
            </p>
          )}
          <p>
            <span>Ranting:</span> {selectedProduct.rating}
          </p>
          <p>
            <span>Description:</span> {selectedProduct.description}
          </p>
        </Modal>
      )}
    </>
  );
};
