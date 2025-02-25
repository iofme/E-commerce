import { Component, inject, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-mais-avaliados',
  imports: [],
  templateUrl: './mais-avaliados.component.html',
  styleUrl: './mais-avaliados.component.css'
})
export class MaisAvaliadosComponent implements OnInit {
  produtoService = inject(ProductService)
  pageNumber = 1
  pageSiza = 3

  ngOnInit(): void {
    if (!this.produtoService.paginetionResult()) this.loadProduct()
  }

  loadProduct(){
    this.produtoService.getProducts(this.pageNumber, this.pageSiza)
  }
}
