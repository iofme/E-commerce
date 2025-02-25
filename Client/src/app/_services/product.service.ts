import { inject, Injectable, Signal, signal, computed } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Produto } from '../models/produto';
import { FeedBack } from '../models/feedback';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
import { PaginatedResult } from '../models/paginations';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  produto!: Produto;
  feedBack!: FeedBack[]
  produtos!: Produto[]
  private accountService = inject(AccountService);
  http = inject(HttpClient);
  route = inject(Router)
  paginetionResult = signal<PaginatedResult<Produto[]> | null>(null)
  paginetionResultFeedback = signal<PaginatedResult<FeedBack[]> | null>(null)

  private readonly productChangeSignal = signal(0);

  getProducts(pageNumber?:number, pageSize?:number) {
    let params = new HttpParams();

    if(pageSize && pageNumber){
      params = params.append('pageNumber', pageNumber);
      params = params.append('pageSize', pageSize);
    }

    return this.http.get<Produto[]>(this.accountService.baseUrl + 'product', {observe: 'response', params}).subscribe({
      next: response => {
        this.paginetionResult.set({
          items: response.body as Produto[],
          pagination: JSON.parse(response.headers.get('Pagination')!)
        })
      }
    })
  }

  getProduct(id: number) {
    return this.http.get<Produto>(this.accountService.baseUrl + 'product/' + id)
  }

  getProductsByTime() {
    return this.http.get<Produto[]>(this.accountService.baseUrl + 'product/time')
  }

  getProductsByStar() {
    return this.http.get<Produto[]>(this.accountService.baseUrl + 'product/star');
  }

  getFeedback(id: number, pageNumber: number, pageSize: number) {
    let params = new HttpParams()

    if(pageNumber && pageSize){
      params = params.append('pageNumber', pageNumber)
      params = params.append('pageSize', pageSize)
    }

    return this.http.get<FeedBack[]>(this.accountService.baseUrl + 'product/feedback/' + id, {observe: 'response', params}).subscribe({
      next: response => {
        this.paginetionResultFeedback.set({
          items: response.body as FeedBack[],
          pagination: JSON.parse(response.headers.get('Pagination')!)
        })
      }
    })
  }

  addProductCarrinho(productId: number) {
    return this.http.post(this.accountService.baseUrl + 'product/carrinho/' + productId, {},).subscribe({
      next: _ => {
        this.productChangeSignal.update(c => c + 1);
        alert("Adicionado com sucesso");
      },
      error: error => {
        alert("Falaha ao adicionar"),
          console.log(error)
      }
    });
  }

  trocaDeProduto(id: number){
    this.route.navigateByUrl(`/produto/${id}`)
    this.productChangeSignal.update(x => x + 1)
  }

  removeProductCarrinho(productId: number) {
    return this.http.delete(this.accountService.baseUrl + 'product/carrinho/' + productId).subscribe({
      next: _ => {
        this.productChangeSignal.update(c => c - 1)
        alert("Deletado com sucesso")
      },
      error: error => {
        alert("Falha ao deletar")
        console.log(error)
      }
    })
  }

  public get productChange(): Signal<number> {
    return this.productChangeSignal.asReadonly();
  }
}
