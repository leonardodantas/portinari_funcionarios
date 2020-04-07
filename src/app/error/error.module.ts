import { NgModule } from "@angular/core";
import { ErroPage } from './error.component';
import { CommonModule } from '@angular/common';
import { PoContainerModule } from '@portinari/portinari-ui';

@NgModule({
    imports: [CommonModule, PoContainerModule],
    declarations: [ErroPage],
    exports: [ErroPage]
})

export class ErrorModule {}