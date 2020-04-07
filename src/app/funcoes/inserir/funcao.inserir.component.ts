import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField, PoNotificationService } from '@portinari/portinari-ui';

@Component({
    selector: 'po-inserir-funcoes',
    templateUrl: './funcao.inserir.component.html'
})
export class FuncaoInserirComponent implements OnInit {

    value = {};
    campos: Array<PoDynamicFormField> = [


    ];

    constructor(private poNotificationService: PoNotificationService){}

    ngOnInit() {
        this.campos = [
            { property: 'nomeFuncao', label: 'Função', divider: 'NOVA FUNÇÃO', required: true, minLength: 4, maxLength: 50, gridColumns: 6, gridSmColumns: 12 },
            {
                property: 'salarioBase',
                label: 'Salario Base',
                type: 'currency',
                gridColumns: 6,
                gridSmColumns: 12,

            },
        ]
    }

    inserirFuncao(){
        this.poNotificationService.success("Sucesso ao inserir nova função")
    }

}