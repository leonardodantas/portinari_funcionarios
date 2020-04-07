import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncaoListarComponent } from './funcao.listar.component';
import { PoTableModule, PoModalModule } from '@portinari/portinari-ui';

@NgModule({
    imports: [CommonModule, PoTableModule, PoModalModule],
    declarations: [FuncaoListarComponent]
})
export class FuncaoListarModule {}