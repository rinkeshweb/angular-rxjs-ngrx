import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../../../core/services/product-service';
import {
  loadProducts,
  loadProductsFail,
  loadProductsSuccess
} from './Product.Action';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class ProductEffects {

  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  loadProducts$ = createEffect(() => {
    console.log('[Effect] ProductEffects initialized');

    return this.actions$.pipe(
      ofType(loadProducts),
      tap(() => {
        console.log('[Effect] loadProducts action detected');
      }),
      switchMap(() => {
        console.log('[Effect] Calling Product API...');
        return this.productService.getProduct().pipe(
          map(products => {
            console.log('[Effect] Dispatching loadProductsSuccess');
            return loadProductsSuccess({ list: products });
          }),
          catchError(err => {
            console.error('[Effect] API error:', err);
            return of(
              loadProductsFail({ errorMessage: err.message })
            );
          })
        );
      })
    );
  });
}
