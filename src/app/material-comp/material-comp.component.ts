import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-material-comp',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule],
  templateUrl: './material-comp.component.html',
  styleUrl: './material-comp.component.css',
})
export class MaterialCompComponent {}
