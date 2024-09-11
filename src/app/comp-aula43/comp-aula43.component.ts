import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../models/Produto';
import { ProdutoService } from '../server/produto.service';

@Component({
  selector: 'app-comp-aula43',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp-aula43.component.html',
  styleUrl: './comp-aula43.component.css',
})
export class CompAula43Component {
  // Vetor
  vetor: Produto[] = [];

  // visibilidade dos botoes
  btnCadastrar: boolean = true;

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
}
