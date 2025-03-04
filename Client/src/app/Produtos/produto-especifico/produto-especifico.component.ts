import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { Produto } from '../../models/produto';
import { ActivatedRoute } from '@angular/router';
import { NovosProdutosComponent } from '../novos-produtos/novos-produtos.component';
import { ProductService } from '../../_services/product.service';
import { AvaliacaoProdutoComponent } from "../avaliacao-produto/avaliacao-produto.component";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-produto-especifico',
  imports: [NovosProdutosComponent, AvaliacaoProdutoComponent, FormsModule],
  templateUrl: './produto-especifico.component.html',
  styleUrl: './produto-especifico.component.css'
})
export class ProdutoEspecificoComponent implements OnInit {
  produto!: Produto
  number = 2
  feedback?: string
  star?: number

  http = inject(HttpClient)
  private produtoService = inject(ProductService);
  private route = inject(ActivatedRoute)
  sendFeedback: boolean = false

  constructor() {
    effect(() => {
      this.produtoService.productChange()
      this.loadProduto()
    })
  }

  ngOnInit(): void {
    this.loadProduto()
  }

  loadProduto() {
    const id = this.route.snapshot.paramMap.get('id')
    if (!id || id == null) {
      console.log("não foi possivel achar o usuário")
      return;
    }
    this.produtoService.getProduct(parseInt(id)).subscribe({
      next: respone => {
        this.produto = respone
      },
      error: error => console.log(error)
    })
  }

  enviarFeedback() {
    this.produtoService.addFeedbackProduct(this.produto.id, this.feedback!, this.star!).subscribe({
      next: _ => {
        alert("foi"),
          this.sendFeedback = true
      },
      error: error => console.log(error)
    })
  }

  addProductCarrinho() {
    this.produtoService.addProductCarrinho(this.produto.id);
  }

  viewProductDetails() {
    this.number = 1
  }

  viewReviews() {
    this.number = 2
  }

  viewFAQ() {
    this.number = 3
  }



}
