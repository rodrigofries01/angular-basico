import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from '../pipes/media.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  // texto
  nome: string = 'Rodrigo';

  // objeto
  dataAtual = new Date();
  obj: any = { nome: 'rodrigo', idade: 24, valor: 12000, data: this.dataAtual };
  array: any[] = ['otis', 6, 'março'];
  // Vetor de objetos
  alunos: any = [
    { nome: 'Ana', nota1: 8, nota2: 9 },
    { nome: 'Julio', nota1: 7, nota2: 8 },
    { nome: 'Letícia', nota1: 3, nota2: 2 },
    { nome: 'Ricardo', nota1: 7, nota2: 7 },
  ];
}
