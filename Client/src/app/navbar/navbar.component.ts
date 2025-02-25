import { Component, effect, inject, OnInit, signal, computed } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Member } from '../models/member';
import { RouterLink } from '@angular/router';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  accountService = inject(AccountService)
  productService = inject(ProductService)
  user?: Member

  constructor(){
    effect(() => {
      this.productService.productChange()
      this.loadUser()
    })
  }

  ngOnInit(): void {
    this.loadUser()
  }

  alertNotUser(){
    alert(`Carrinho vazio
Usuário não logado`)
  }

  loadUser() {
    this.accountService.getUser(this.accountService.currentUser()?.id!).subscribe({
      next: response => {
        this.user = response
      },
      error: error => console.log(error)
    })
  }

}
