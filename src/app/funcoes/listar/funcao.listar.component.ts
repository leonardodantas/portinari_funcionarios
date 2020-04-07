import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@portinari/portinari-ui';
import { FuncionarioService } from 'src/app/funcionarios/funcionario.service';
import { FuncoesDTO } from 'src/app/funcionarios/funcoes.dto';

@Component({
    selector: 'po-listar-funcoes',
    templateUrl: './funcao.listar.component.html'
})
export class FuncaoListarComponent implements OnInit{

    colunas: Array<PoTableColumn>;
    funcoes: FuncoesDTO[];
    carregarTabela: boolean = true;

    constructor(private funcionarioService: FuncionarioService){}

    ngOnInit(){
        this.colunas = [{property: 'nomeFuncao', label: 'Função'}, {property: 'salarioBase', label: 'Salario', type:'currency'}]
        this.funcionarioService.getFuncoes()
            .subscribe(
                funcao => {
                    this.funcoes = funcao;
                    this.carregarTabela = false;
                }
            )
    }
}