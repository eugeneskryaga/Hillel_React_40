import { useState, useEffect } from "react";

import { getProducts, searchProducts } from "../../services/productsApi";

import { ProductList } from "../ProductList/ProductList";
import { SearchForm } from "../SearchForm/SearchForm";
import { Notification } from "../Notification/Notification";

import type { Product } from "../../types/types";

export const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmptyResult, setIsemptyResult] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { products } = await getProducts();
        setProducts(products);
        console.log(products);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const handleSearch = async (keyWord: string) => {
    try {
      setIsError(false);
      setIsemptyResult(false);
      setIsLoading(true);
      const { products } = await searchProducts(keyWord);
      setProducts(products);
      if (products.length === 0) {
        setIsemptyResult(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <ProductList products={products} />
      {isLoading && <Notification notification="Loading..." />}
      {isError && <Notification notification="Oops, something went wrong." />}
      {isEmptyResult && (
        <Notification notification="Sorry, no results this time." />
      )}
    </>
  );
};
