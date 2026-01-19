import { createAction, props } from '@ngrx/store';
import { Product } from '../../../../core/models/product.model';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ list: Product[] }>()
);

export const loadProductsFail = createAction(
  '[Product] Load Products Fail',
  props<{ errorMessage: string }>()
);
