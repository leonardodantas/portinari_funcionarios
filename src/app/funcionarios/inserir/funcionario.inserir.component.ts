import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField, PoSelectOption, PoMultiselectOption, PoNotificationService } from '@portinari/portinari-ui';
import { FuncionarioService } from '../funcionario.service';
import { FuncoesDTO } from '../funcoes.dto';
import { FuncionarioDTO } from '../funcionario.dto';
import { FuncionarioFormDTO } from './funcionario.form.dto';

@Component({
    selector: 'po-funcionario-inserir',
    templateUrl: './funcionario.inserir.component.html'
})
export class FuncionarioInserirComponent implements OnInit {

    person = {};
    funcoes: FuncoesDTO[];
    funcoesOpcoes: string[] = [];
    campos: Array<PoDynamicFormField> = []
    funcionario: FuncionarioDTO;

    constructor(private funcionarioService: FuncionarioService, private poNotification: PoNotificationService){}

    ngOnInit(){
        
        this.funcionarioService.getFuncoes()
            .subscribe(
                funcoes =>{
                    this.funcoes = funcoes;
                    funcoes.map(f=> this.funcoesOpcoes.push(f.nomeFuncao))
                },
                err=> console.log(err),
                ()=>{
                    this.criarForm();
                }
            );
    }

    criarForm(){
        this.campos = [
            { property: 'nome', label: 'Nome', divider: 'NOVO FUNCIONARIO', required: true, minLength: 4, maxLength: 50, gridColumns: 6, gridSmColumns: 12 },
            {
                property: 'email',
                label: 'Email',
                type: 'email',
                gridColumns: 6,
                gridSmColumns: 12,
    
            },
    
            {
                property: 'dataNascimento',
                label: 'Data de Nascimento',
                type: 'date',
                gridColumns: 4,
                gridSmColumns: 12,
                maxValue: '2010-01-01',
            },
            { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 4, gridSmColumns: 12,  },
            {
                property: 'funcao',
                label: 'Função',
                gridColumns: 4,
                gridSmColumns: 12,
                options:  this.funcoesOpcoes,
                optionsMulti: false
              },
    
        ]
        
    }

    inserirFuncionario(person) {
        var funcao: FuncoesDTO;
        this.funcoes.map(f=>{
            if(f.nomeFuncao == person.funcao)
                funcao = f
        });

        let funcionario = {
            nome: person.nome,
            dataNascimento: person.dataNascimento,
            email: person.email,
            cpf: person.cpf,
            idFuncao: funcao.id
        }

        this.funcionarioService.inserirFuncionario(funcionario)
            .subscribe(
                ()=>{
                    this.poNotification.success("Inserido com sucesso");
                },
                (err)=>{
                    console.log(err)
                    this.poNotification.error("Erro ao inserir")
                    
                }
            )
    }
    
}