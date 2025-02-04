import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  produto!: Produto
  http = inject(HttpClient)

  getProducts(){
    return this.http.get<Produto[]>('http://localhost:5192/api/product');
  }
  getProduct(id:number){
    return this.http.get<Produto>('http://localhost:5192/api/product/' + id);
  }
  getProductsByTime(){
    return this.http.get<Produto[]>('http://localhost:5192/api/product/time');
  }
  getProductsByStar(){
    return this.http.get<Produto[]>('http://localhost:5192/api/product/star');
  }
}
