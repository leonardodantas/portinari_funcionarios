import { NgModule } from '@angular/core';
import { FuncionarioInserirModule } from './inserir/funcionario.inserir.module';
import { FuncionarioListarModule } from './listar/funcionario.listar.module';
import { CommonModule } from '@angular/common';
import { FuncionarioRouterModule } from './app.routing.funcionario';
import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { FuncionarioService } from './funcionario.service';


@NgModule({
    imports: [HttpClientModule,CommonModule, FuncionarioListarModule,FuncionarioInserirModule,  RouterModule,FuncionarioRouterModule],
    declarations: [],
    exports: [],
    providers: [FuncionarioService]
})
export class FuncionarioModule {}