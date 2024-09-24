import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rotas',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './rotas.component.html',
  styleUrl: './rotas.component.css',
})
export class RotasComponent {}
