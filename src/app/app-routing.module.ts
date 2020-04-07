import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErroPage } from './error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'funcionarios', loadChildren: './funcionarios/funcionario.module#FuncionarioModule'},
  {path: 'funcoes', loadChildren: './funcoes/funcoes.module#FuncoesModule'},
  {path: "**", component: ErroPage}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
