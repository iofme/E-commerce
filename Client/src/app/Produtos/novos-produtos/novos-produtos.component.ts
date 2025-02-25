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
  productService = inject(ProductService)
  route = inject(Router)
  pageSize = 3
  pageNumber = 2

  ngOnInit(): void {
    if(!this.productService.paginetionResult()) this.loadProduto()
  }

  loadProduto() {
    this.productService.getProducts(this.pageNumber, this.pageSize)
  }

  btnTrocaDeProduto(id: number){
    this.productService.trocaDeProduto(id)
  }
}
