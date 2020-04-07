import { NgModule, OnInit } from '@angular/core';
import { FuncaoInserirComponent } from './funcao.inserir.component';
import { CommonModule } from '@angular/common';
import { PoDynamicModule, PoButtonModule, PoNotificationModule } from '@portinari/portinari-ui';

@NgModule({
    imports: [CommonModule, PoDynamicModule, PoButtonModule, PoNotificationModule],
    declarations: [FuncaoInserirComponent]
})
export class FuncaoInserirModule {

    
}