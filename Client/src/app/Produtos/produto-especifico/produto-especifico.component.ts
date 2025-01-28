import { Component, inject, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
import { NovosProdutosComponent } from '../novos-produtos/novos-produtos.component';

@Component({
  selector: 'app-produto-especifico',
  imports: [NovosProdutosComponent],
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
