import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './Produtos/pagina-inicial/pagina-inicial.component';
import { ProdutoEspecificoComponent } from './Produtos/produto-especifico/produto-especifico.component';
import { MaisAvaliadosComponent } from './Produtos/mais-avaliados/mais-avaliados.component';
import { NovosProdutosComponent } from './Produtos/novos-produtos/novos-produtos.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes: Routes = [
    {path: '', component: PaginaInicialComponent},
    {path:'produto/:id', component:ProdutoEspecificoComponent },
    {path:'produtos-novos', component:NovosProdutosComponent },
    {path:'produtos-avaliados', component:MaisAvaliadosComponent },
    {path:'login', component: LoginComponent},
    {path: 'carrinho', component: CarrinhoComponent}
];
