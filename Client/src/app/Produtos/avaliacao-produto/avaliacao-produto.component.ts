import { FeedBack } from './../../models/feedback';
import { Component, effect, inject, input, Input, OnInit, signal } from '@angular/core';
import { ProductService } from '../../_services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ButtonCarregarMaisComponent } from "../../button-carregar-mais/button-carregar-mais.component";

@Component({
  selector: 'app-avaliacao-produto',
  imports: [ButtonCarregarMaisComponent],
  templateUrl: './avaliacao-produto.component.html',
  styleUrl: './avaliacao-produto.component.css'
})
export class AvaliacaoProdutoComponent implements OnInit {
  feedBack?: FeedBack[]
  maisItem: boolean = true
  produtoService = inject(ProductService);
  private route = inject(ActivatedRoute)
  pageSize = 3
  pageNumber = 1

  ngOnInit(): void {
    this.loadFeedbacks()
  }

  loadFeedbacks() {
    const id = this.route.snapshot.paramMap.get('id')

    if (!id || id == null) {
      console.log("não foi possivel achar o usuário")
      return;
    }
    this.produtoService.getFeedback(parseInt(id), this.pageNumber, this.pageSize,)
  }

  carregarMais() {
    this.pageSize++
    this.loadFeedbacks()
    if(!this.feedBack?.length){
      this.maisItem = false
    }
  }
}
