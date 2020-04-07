import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PoContainerModule } from '@portinari/portinari-ui';

@NgModule({
    imports: [CommonModule, PoContainerModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {}