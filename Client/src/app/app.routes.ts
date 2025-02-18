import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './Produtos/pagina-inicial/pagina-inicial.component';
import { ProdutoEspecificoComponent } from './Produtos/produto-especifico/produto-especifico.component';
import { MaisAvaliadosComponent } from './Produtos/mais-avaliados/mais-avaliados.component';
import { NovosProdutosComponent } from './Produtos/novos-produtos/novos-produtos.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes: Routes = [
    {path: '', component: PaginaInicialComponent},
    {path:'produto/:id', title: 'produto',component:ProdutoEspecificoComponent },
    {path:'produtos-novos', title:'produtos-novos' ,component:NovosProdutosComponent },
    {path:'produtos-avaliados', title: 'Bem-avaliados' , component:MaisAvaliadosComponent },
    {path:'login', title: 'login', component: LoginComponent},
    {path: 'carrinho', title:'carrinho' ,component: CarrinhoComponent}
];
