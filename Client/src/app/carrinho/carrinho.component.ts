import { Component, inject, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { AccountService } from '../_services/account.service';
import { Member } from '../models/member';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  member?: Member
  http = inject(HttpClient)

  accountService = inject(AccountService)

  ngOnInit(): void {
    this.getUser()
    this.accountService.currentUser()
  }

  getUser() {
    this.accountService.getUser(this.accountService.currentUser()?.id!).subscribe({
      next: response => this.member = response,
      error: error => console.error(error)
    })
  }

  removeProduct(id: number){
    return this.http.delete('http://localhost:5192/api/product/carrinho/' + id).subscribe({
      next: _ => alert("Deletado com sucesso"),
      error: error => {alert("Falha ao deletar")
        console.log(this.accountService.currentUser())
        console.log(error)
      }
    })
  }
}
