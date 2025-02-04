import { FeedBack } from './../../models/feedback';
import { Component, inject, input, Input, OnInit } from '@angular/core';
import { ProductService } from '../../_services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avaliacao-produto',
  imports: [],
  templateUrl: './avaliacao-produto.component.html',
  styleUrl: './avaliacao-produto.component.css'
})
export class AvaliacaoProdutoComponent implements OnInit {
    feedBack?: FeedBack[]
    private produtoService = inject(ProductService);
    private route = inject(ActivatedRoute)

    ngOnInit(): void {
      this.loadFeedbacks()
    }

    loadFeedbacks(){
      const id = this.route.snapshot.paramMap.get('id')
 
      if (!id || id == null) {
        console.log("não foi possivel achar o usuário")
        return;
      }
      this.produtoService.getFeedback(parseInt(id)).subscribe({
        next: respone => this.feedBack = respone,
        error: error => console.log(error)
      })
    }
}
