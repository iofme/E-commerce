import { Component, inject, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NovosProdutosComponent } from '../novos-produtos/novos-produtos.component';
import { ProductService } from '../../_services/product.service';
import { AvaliacaoProdutoComponent } from "../avaliacao-produto/avaliacao-produto.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-produto-especifico',
  imports: [NovosProdutosComponent, AvaliacaoProdutoComponent],
  templateUrl: './produto-especifico.component.html',
  styleUrl: './produto-especifico.component.css'
})
export class ProdutoEspecificoComponent implements OnInit {
  produto!: Produto
  number = 1
  http = inject(HttpClient)
  private produtoService = inject(ProductService);
  private route = inject(ActivatedRoute)

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

  addProductCarrinho() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:5192/api/product/carrinho/' + this.produto.id, {}, { headers }).subscribe({
      next: _ => alert("Adicionado com sucesso"),
      error: error => {
        alert("Falaha ao adicionar"),
        console.log(error)
      }
    });
  }

  removeProduct() {
    if (this.number > 1) {
      this.number--
    }
  }
}
