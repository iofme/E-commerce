import { Component, input, Input } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-avaliacao-produto',
  imports: [],
  templateUrl: './avaliacao-produto.component.html',
  styleUrl: './avaliacao-produto.component.css'
})
export class AvaliacaoProdutoComponent {
produto = input.required<Produto>();
}
