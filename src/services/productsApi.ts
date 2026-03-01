import axios from "axios";

import type { Product } from "../types/types";

const BASE_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  const { data } = await axios<{ products: Product[] }>(BASE_URL);

  return data;
};

export const searchProducts = async (keyWord: string) => {
  const { data } = await axios<{ products: Product[] }>(
    `${BASE_URL}/search?q=${keyWord}`,
  );

  return data;
};
