import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-test',
  standalone: true,
  imports: [],
  templateUrl: './comp-test.component.html',
  styleUrl: './comp-test.component.css',
})
export class CompTestComponent {
  nome: string = 'rodrigo';
  media: number = 0;

  calcularMedia(num1: number, num2: number) {
    return (num1 + num2) / 2;
  }
}
