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

  teste = signal(0)
  computedTeste = this.teste

  addteste(){
    this.teste.update(x => x + 1)
  }

  removeteste(){
    this.teste.update(x => x - 1)
  }

  setteste(){
    this.teste.set(30)
  }

  constructor(){
    effect(() => {
      this.productService.productChange()
      this.loadUser()
    })
  }

  ngOnInit(): void {
    this.loadUser()
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
