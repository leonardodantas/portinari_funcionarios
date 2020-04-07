import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncaoListarComponent } from './listar/funcao.listar.component';
import { FuncaoInserirComponent } from './inserir/funcao.inserir.component';


const routes: Routes = [
    {path: '', component: FuncaoListarComponent},
    {path: 'inserir', component: FuncaoInserirComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FuncoesRouterModule {}