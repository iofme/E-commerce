
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produto } from '../../models/produto';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-novos-produtos',
  imports: [RouterLink],
  templateUrl: './novos-produtos.component.html',
  styleUrl: './novos-produtos.component.css'
})
export class NovosProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  productService = inject(ProductService)

  ngOnInit(): void {
    this.productService.getProductsByTime().subscribe({
      next: response => this.produtos = response,
      error: error => console.log(error)
    })
  }
}
