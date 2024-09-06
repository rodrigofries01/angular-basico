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

  vetor: Pessoa[] = [];

  cadastrar() {
    //realizar cadastro
    this.vetor.push(this.formulario.value as Pessoa);

    //limpar os campos
    this.formulario.reset();

    //exibir no console
    console.table(this.vetor);
  }
}
