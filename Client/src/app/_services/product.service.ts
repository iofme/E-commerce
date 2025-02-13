import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto';
import { FeedBack } from '../models/feedback';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  produto!: Produto;
  private accountService = inject(AccountService);
  http = inject(HttpClient);

  getProducts(){
    return this.http.get<Produto[]>( this.accountService.baseUrl + 'product');
  }
  
  getProduct(id:number){
    return this.http.get<Produto>( this.accountService.baseUrl + 'product/' + id);
  }

  getProductsByTime(){
    return this.http.get<Produto[]>( this.accountService.baseUrl + 'product/time');
  }

  getProductsByStar(){
    return this.http.get<Produto[]>( this.accountService.baseUrl + 'product/star');
  }

  getFeedback(id:number){
    return this.http.get<FeedBack[]>( this.accountService.baseUrl + 'product/feedback/' + id);
  }
  
  
}
