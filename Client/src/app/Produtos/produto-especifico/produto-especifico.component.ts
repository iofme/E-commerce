import { Component, inject, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { ActivatedRoute } from '@angular/router';
import { NovosProdutosComponent } from '../novos-produtos/novos-produtos.component';
import { ProductService } from '../../_services/product.service';
import { AvaliacaoProdutoComponent } from "../avaliacao-produto/avaliacao-produto.component";

@Component({
  selector: 'app-produto-especifico',
  imports: [NovosProdutosComponent, AvaliacaoProdutoComponent],
  templateUrl: './produto-especifico.component.html',
  styleUrl: './produto-especifico.component.css'
})
export class ProdutoEspecificoComponent implements OnInit {
  produto!: Produto
  number = 1
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
        next: respone => this.produto = respone,
        error: error => console.log(error)
      })
  }

  addProduct(){
    this.number++
  }
  removeProduct(){
    if(this.number > 1){
      this.number--
    }
  }
}
