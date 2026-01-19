import { createReducer, on } from '@ngrx/store';
import { initialProductState } from './Product.State';
import { loadProducts, loadProductsFail, loadProductsSuccess } from './Product.Action';

const _productReducer = createReducer(
  initialProductState,

  on(loadProducts, state => ({
    ...state,
    loading: true,
    errorMessage: ''
  })),

  on(loadProductsSuccess, (state, { list }) => ({
    ...state,
    lists: list,
    loading: false
  })),

  on(loadProductsFail, (state, { errorMessage }) => ({
    ...state,
    lists: [],
    loading: false,
    errorMessage
  }))
);

export function ProductReducer(state: any, action: any) {
  return _productReducer(state, action);
}
