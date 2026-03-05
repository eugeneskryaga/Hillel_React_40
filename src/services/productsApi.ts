import axios from "axios";

import type { Product } from "../types/types";

const BASE_URL = "https://dummyjson.com/products";

export const getProducts = async (keyWord?: string) => {
  const { data } = await axios<{ products: Product[] }>(`${BASE_URL}/search`, {
    params: {
      q: keyWord,
    },
  });
  return data;
};
