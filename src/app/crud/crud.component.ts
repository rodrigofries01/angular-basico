import { Component } from '@angular/core';
import { Pessoa } from '../models/Pessoa';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent {
  //objeto formulario
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  //visibilidade botões
  btnCadastro: boolean = true;
  //vetor
  vetor: Pessoa[] = [];

  //variavel que armazena o indice
  indice: number = -1;

  cadastrar() {
    //realizar cadastro
    this.vetor.push(this.formulario.value as Pessoa);

    //limpar os campos
    this.formulario.reset();

    //exibir no console
    console.table(this.vetor);
  }

  // função de selecionar
  selecionar(indice: number) {
    // atribui o indice a pessoa
    this.indice = indice;
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade,
    });
    //visibilidade dos botões
    this.btnCadastro = false;
  }

  //funcao de alteração
  alterar() {
    //alterar valor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    //resetar os campos
    this.formulario.reset();

    //visibilidade dos botões
    this.btnCadastro = true;
  }

  remover() {
    // remover os dados
    this.vetor.splice(this.indice, 1);

    //limpeza dos campos
    this.formulario.reset();

    // visibilidade dos botões]
    this.btnCadastro = true;
  }

  cancelar() {
    // limpeza dos campos
    this.formulario.reset();

    // visibilidade dos botões
    this.btnCadastro = true;
  }
}
