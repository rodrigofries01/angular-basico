import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Produto } from '../models/Produto';
import { ProdutoService } from '../server/produto.service';

@Component({
  selector: 'app-comp-aula43',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comp-aula43.component.html',
  styleUrl: './comp-aula43.component.css',
})
export class CompAula43Component {
  // Vetor
  vetor: Produto[] = [];

  // visibilidade dos botoes
  btnCadastrar: boolean = true;

  // objeto de formulario
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    valor: new FormControl(null, [Validators.required, Validators.min(0)]),
  });

  // Construtor
  constructor(private servico: ProdutoService) {}

  // inicialização do componente
  ngOnInit() {
    this.selecionar();
  }

  // Metodo para selecionar todos os produtos
  selecionar() {
    this.servico.selecionar().subscribe((retorno) => {
      this.vetor = retorno;
    });
  }

  // Metodo para cadastrar produtos
  cadastrar() {
    this.servico
      .cadastrar(this.formulario.value as Produto)
      .subscribe((retorno) => {
        this.vetor.push(retorno);
        this.formulario.reset();
      });
  }

  // Metodo para selecionar um produto especifico
  selecionarProduto(indice: number) {
    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor,
    });
    this.btnCadastrar = false;
  }

  // Metodo para alterar produto
  alterar() {
    this.servico
      .alterar(this.formulario.value as Produto)
      .subscribe((retorno) => {
        // obter o indice do objeto alterado
        let indiceAlterado = this.vetor.findIndex((obj) => {
          return this.formulario.value.id === obj.id;
        });
        // Alterar o vetor
        this.vetor[indiceAlterado] = retorno;

        // Limpar o formulario
        this.formulario.reset();

        // Visibilidade do botão
        this.btnCadastrar = true;
      });
  }
}
