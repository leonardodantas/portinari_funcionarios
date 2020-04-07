import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioListarComponent } from './listar/funcionario.listar.component';
import { FuncionarioInserirComponent } from './inserir/funcionario.inserir.component';

const routes: Routes = [
    {path: '', component: FuncionarioListarComponent},
    {path: 'inserir', component: FuncionarioInserirComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class FuncionarioRouterModule {

}