import { NgModule } from '@angular/core';
import { FuncionarioInserirComponent } from './funcionario.inserir.component';
import { PoDynamicModule, PoButtonModule, PoNotificationModule } from '@portinari/portinari-ui';

@NgModule({
    imports: [PoDynamicModule, PoButtonModule, PoNotificationModule],
    declarations: [FuncionarioInserirComponent],
    exports: []
})
export class FuncionarioInserirModule {

}