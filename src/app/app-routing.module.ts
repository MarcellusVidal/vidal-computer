import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontrado2Component } from './nao-encontrado2/nao-encontrado2.component';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then((m) => m.ProdutosModule),
  },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: '**', component: NaoEncontrado2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
