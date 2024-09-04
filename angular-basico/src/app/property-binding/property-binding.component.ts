import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css',
})
export class PropertyBindingComponent {
  imagem: string = 'assets/dia.jpeg';
  alterarImagem() {
    if (this.imagem === 'assets/dia.jpeg') {
      this.imagem = 'assets/noite.jpeg';
    } else {
      this.imagem = 'assets/dia.jpeg';
    }
  }
}
