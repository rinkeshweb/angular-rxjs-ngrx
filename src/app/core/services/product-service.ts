import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly base_url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<any>(this.base_url).pipe(
      map(res => res.products as Product[])
    );
  }
}
