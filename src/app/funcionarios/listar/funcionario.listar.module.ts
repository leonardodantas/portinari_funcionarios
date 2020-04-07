import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioListarComponent } from './funcionario.listar.component';
import { PoTableModule, PoContainerModule, PoModalModule, PoNotificationModule } from '@portinari/portinari-ui';

@NgModule({
    imports: [PoTableModule, PoContainerModule, PoModalModule, PoNotificationModule],
    declarations: [FuncionarioListarComponent],
    exports: [] 
})
export class FuncionarioListarModule {}