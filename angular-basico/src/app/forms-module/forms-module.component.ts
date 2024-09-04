import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-module',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forms-module.component.html',
  styleUrl: './forms-module.component.css',
})
export class FormsModuleComponent {
  nome: string = '';
  cidade: string = '';
}
