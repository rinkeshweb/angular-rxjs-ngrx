import { loadProducts } from './../_store/products/Product.Action';
import { Component, OnInit } from '@angular/core';
import { selectProductList, selectProductLoading } from '../_store/products/Product.Selector';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-parent',
  imports: [AsyncPipe],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements OnInit {
  products$!: Observable<Product[]>;
  loading$!: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.products$ = this.store.select(selectProductList);
    this.loading$ = this.store.select(selectProductLoading);

    this.store.dispatch(loadProducts());
  }

}
