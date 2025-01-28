import { Component } from '@angular/core';
import { MaisAvaliadosComponent } from '../mais-avaliados/mais-avaliados.component';
import { RouterLink } from '@angular/router';
import { NovosProdutosComponent } from '../novos-produtos/novos-produtos.component';

@Component({
  selector: 'app-pagina-inicial',
  imports: [NovosProdutosComponent, MaisAvaliadosComponent, RouterLink],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent {

}
