import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncaoListarModule } from './listar/funcao.listar.module';
import { FuncaoInserirModule } from './inserir/funcao.inserir.module';
import { RouterModule } from '@angular/router';
import { FuncoesRouterModule } from './app.routing.funcoes.module';

@NgModule({
    imports: [ CommonModule, FuncaoListarModule, FuncaoInserirModule, RouterModule, FuncoesRouterModule],
    declarations: []
})
export class FuncoesModule {}