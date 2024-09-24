import { Component } from '@angular/core';
import { MatCompFormComponent } from '../mat-comp-form/mat-comp-form.component';
import { MatCompTableComponent } from '../mat-comp-table/mat-comp-table.component';

@Component({
  selector: 'app-mat-comp',
  standalone: true,
  imports: [MatCompFormComponent, MatCompTableComponent],
  templateUrl: './mat-comp.component.html',
  styleUrl: './mat-comp.component.css',
})
export class MatCompComponent {
  //vetor
  nomes: string[] = ['Rodrigo', 'Anah', 'Aurora', 'Otis', 'Filomena'];

  //função cadastrar
  cadastrar(nome: string) {
    this.nomes.push(nome);
  }
}
