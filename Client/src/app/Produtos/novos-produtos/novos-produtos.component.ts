import { Produto } from './../../models/produto';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-novos-produtos',
  imports: [],
  templateUrl: './novos-produtos.component.html',
  styleUrl: './novos-produtos.component.css'
})

export class NovosProdutosComponent implements OnInit {
  produtos: Produto[] = []
  productService = inject(ProductService)
  route = inject(Router)

  ngOnInit(): void {
    this.loadProduto()
  }

  loadProduto() {
    this.productService.getProductsByTime().subscribe({
      next: response => this.produtos = response,
      error: error => console.log(error)
    })
  }

  btnTeste(id: number){
    this.productService.trocaDeProduto(id)
  }
}
