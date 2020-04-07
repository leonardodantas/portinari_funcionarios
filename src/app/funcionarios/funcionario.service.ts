import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FuncionarioDTO } from './funcionario.dto';
import { Observable } from 'rxjs';
import { FuncoesDTO } from './funcoes.dto';

const API = 'http://localhost:8080';

@Injectable()
export class FuncionarioService {

    constructor(private http: HttpClient){}

    getFuncionarios(): Observable<FuncionarioDTO[]>{
        return this.http.get<FuncionarioDTO[]>(API + '/funcionarios');
    }

    inserirFuncionario(funcionario: {}){
        return this.http.post(API + '/funcionarios', funcionario);
    }

    getFuncoes(): Observable<FuncoesDTO[]>{
        return this.http.get<FuncoesDTO[]>(API + '/funcoes');
    }


}