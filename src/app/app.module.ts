import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule, PoContainerModule } from '@portinari/portinari-ui/'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorModule } from './error/error.module';
import { HomeModule } from './home/home.module';
import { FuncionarioModule } from './funcionarios/funcionario.module';
import { FuncoesModule } from './funcoes/funcoes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PoModule,
    RouterModule,
    ErrorModule,
    HomeModule,
    FuncionarioModule,
    FuncoesModule,
    PoContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
