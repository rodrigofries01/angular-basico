import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css',
})
export class NgStyleComponent {
  lista: string[] = ['Aprovado', 'Reprovado', 'Aprovado'];
  condicao: boolean = true;
  alterarCor() {
    if (this.condicao === true) {
      this.condicao = false;
    } else {
      this.condicao = true;
    }
  }
}
