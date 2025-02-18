import { inject, Injectable, Signal, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto';
import { FeedBack } from '../models/feedback';
import { AccountService } from './account.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  produto!: Produto;
  produtos!: Produto[]
  private accountService = inject(AccountService);
  http = inject(HttpClient);
  route = inject(Router)

  private readonly productChangeSignal = signal(0);

  getProducts() {
    return this.http.get<Produto[]>(this.accountService.baseUrl + 'product');
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

  getFeedback(id: number) {
    return this.http.get<FeedBack[]>(this.accountService.baseUrl + 'product/feedback/' + id);
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
