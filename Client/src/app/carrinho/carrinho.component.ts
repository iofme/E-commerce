import { Component, effect, inject, OnInit, signal, viewChildren } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Member } from '../models/member';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  member?: Member
  http = inject(HttpClient)
  private productService = inject(ProductService)
  accountService = inject(AccountService)

  constructor() {
    effect(() => {
      this.productService.productChange()
      this.getUser()
    })
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.accountService.getUser(this.accountService.currentUser()?.id!).subscribe({
      next: response => this.member = response,
      error: error => console.error(error)
    })
  }

  removeProduct(id: number) {
    this.productService.removeProductCarrinho(id)
  }


  
}
