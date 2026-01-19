import { Product } from "./product.model";

export interface ProductState {
  lists: Product[];
  loading: boolean;
  errorMessage: string;
}

export const initialProductState: ProductState = {
  lists: [],
  loading: false,
  errorMessage: ''
};
