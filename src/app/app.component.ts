import { Component, OnInit } from '@angular/core';

import { PoMenuItem, PoNavbarItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Funcionarios', action: this.onClick.bind(this), subItems: [
        { label: 'Listar Funcionarios' ,link: '/funcionarios' },
        { label: 'Novo Funcionario', link: '/funcionarios/inserir' }
      ]
    },
    {
      label: 'Funções', action: this.onClick.bind(this), subItems: [
        { label: 'Listar Funcões', link: '/funcoes' },
        { label: 'Nova Função',link: '/funcoes/inserir' }]
    }

  ];

  navbarItens: Array<PoNavbarItem>;

  ngOnInit(){
    this.navbarItens = [
      {label: 'HOME', link: ''},
      {label: 'FUNCIONARIOS', link: '/funcionarios'},
      {label: 'FUNÇÕES', link: '/funcoes'},
    ]
  }

  private onClick(menu: PoMenuItem) {
    console.log(menu)
  }

}
