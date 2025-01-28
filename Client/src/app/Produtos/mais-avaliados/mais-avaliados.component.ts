import { Component, inject, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-mais-avaliados',
  imports: [],
  templateUrl: './mais-avaliados.component.html',
  styleUrl: './mais-avaliados.component.css'
})
export class MaisAvaliadosComponent implements OnInit {
  produtos: Produto[] = []
  produtoService = inject(ProductService)

  ngOnInit(): void {
    this.produtoService.getProductsByStar().subscribe({
      next: response => this.produtos = response,
      error: error => console.log(error)
    })
  }
}
