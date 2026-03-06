import { useState, useEffect } from "react";

import { getProducts } from "../../services/productsApi";

import { ProductList } from "../ProductList/ProductList";
import { SearchForm } from "../SearchForm/SearchForm";
import { Notification } from "../Notification/Notification";

import type { Product } from "../../types/types";

export const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");

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

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <Notification notification="Sorry, no results this time." />
      )}
      {isLoading && <Notification notification="Loading..." />}
      {isError && <Notification notification="Oops, something went wrong." />}
    </>
  );
};
