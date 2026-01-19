import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../../../../core/models/product.state';

export const selectProductState =
  createFeatureSelector<ProductState>('product');

export const selectProductList = createSelector(
  selectProductState,
  state => state.lists
);

export const selectProductLoading = createSelector(
  selectProductState,
  state => state.loading
);

export const selectProductError = createSelector(
  selectProductState,
  state => state.errorMessage
);
