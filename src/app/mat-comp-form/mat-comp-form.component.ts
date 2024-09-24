import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-mat-comp-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './mat-comp-form.component.html',
  styleUrl: './mat-comp-form.component.css',
})
export class MatCompFormComponent {
  // variavel para armazenar o nome informado
  nome: string;

  @Output() funcao = new EventEmitter<string>();

  // funcao de cadastro do componente formulario
  cadastrarNome() {
    this.funcao.emit(this.nome);
  }
}
