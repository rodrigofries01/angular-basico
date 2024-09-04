import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css',
})
export class NgClassComponent {
  lista: string[] = ['Aprovado', 'Aprovado', 'Reprovado'];
  condicao: boolean = true;
}
