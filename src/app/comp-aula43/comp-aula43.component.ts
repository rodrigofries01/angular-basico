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
  sortColumn: string = '';
  sortDirection: { [key: string]: boolean } = {};

  // objeto de formulario
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    valor: new FormControl(null, [Validators.required, Validators.min(0)]),
  });
  key: any;

  // Construtor
  constructor(private servico: ProdutoService) {}

  sortData(key: string) {
    // Define a coluna atualmente ordenada
    this.sortColumn = key;
    // Alterna a direção da ordenação para a coluna selecionada
    this.sortDirection[key] = !this.sortDirection[key];

    this.vetor.sort((a, b) => {
      const aValor = a[key as keyof Produto];
      const bValor = b[key as keyof Produto];
      if (aValor < bValor) {
        this.sortDirection[key] = true;
        return this.sortDirection[key] ? -1 : 1;
      } else if (aValor > bValor) {
        this.sortDirection[key] = false;
        return this.sortDirection[key] ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

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
        console.table(this.vetor);
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
          return indiceAlterado === obj.id;
        });
        // Alterar o vetor
        this.vetor[indiceAlterado] = retorno;
        console.table(this.vetor);

        // Limpar o formulario
        this.formulario.reset();

        // Visibilidade do botão
        this.btnCadastrar = true;
      });
  }

  // Metodo para remover produto
  remover() {
    this.servico.remover(this.formulario.value.id).subscribe((retorno) => {
      // Obter o indice do vetor que sera removido
      let indiceRemovido = this.vetor.findIndex((obj) => {
        return obj === this.formulario.value.id;
      });

      // Remover objeto do vetor
      this.vetor.splice(indiceRemovido, 1);
      console.table(this.vetor);

      // Limpar o formulario
      this.formulario.reset();

      // Visibilidade dos botões
      this.btnCadastrar = true;
    });
  }

  // Metodo de cancelar operação
  cancelar() {
    this.formulario.reset();
    this.btnCadastrar = true;
  }
}
