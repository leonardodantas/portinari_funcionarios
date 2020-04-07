import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

import { PoTableAction, PoModalComponent, PoModalAction, PoNotificationService } from '@portinari/portinari-ui';
import { PoTableColumn } from '@portinari/portinari-ui';
import { FuncionarioDTO } from '../funcionario.dto';



@Component({
    selector: 'po-funcionario-listar',
    templateUrl: './funcionario.listar.component.html',
    providers: [PoNotificationService]
})
export class FuncionarioListarComponent implements OnInit {

    funcionarios: Array<FuncionarioDTO>;
    colunas: Array<PoTableColumn>;
    carregarTabela: boolean = true;
    actions: PoTableAction[];
    qtdSelecionados: number = 0;
    @ViewChild(PoModalComponent, { static: true }) modal: PoModalComponent;

    constructor(private funcionarioService: FuncionarioService, private notification: PoNotificationService) { }

    ngOnInit() {

        this.actions = [{ label: 'Detalhes', type: 'danger' }, { label: 'Deletar', separator: true, action: this.deletarFuncionario.bind(this) }, { label: 'Atualizar' }]

        this.colunas = [
            { property: 'nome', label: "Nome", color: 'color-03', tooltip: 'Nome do Funcionario' },
            { property: 'dataNascimento', label: "Nascimento", type: 'dateTime', format: 'dd/MM/yyyy', color: 'color-03' },
            { property: 'funcao', label: "Função", color: 'color-03' },
            { property: 'email', label: "E-mail", color: 'color-03' },
        ]

        this.funcionarioService.getFuncionarios()
            .subscribe(
                funcionarios => {
                    this.funcionarios = funcionarios;
                },
                err => console.log(err),
                () => {
                    this.carregarTabela = false;
                }
            )
    }

    selecionarLinhas(row: any){
        this.qtdSelecionados ++;
    }

    tirarLinhas(row: any){
        this.qtdSelecionados --;
    }


    deletar: PoModalAction = {
        action: () => {
            this.modal.close();
            this.notification.success("Funcionario Deletado")
        },
        label: 'EXCLUIR'
    }

    cancelar: PoModalAction = {
        action: () => {
            this.modal.close();
        },
        label: 'CANCELAR'
    }

    deletarFuncionario(funcionario: any) {
        console.log(funcionario);
        this.modal.open()
    }

}