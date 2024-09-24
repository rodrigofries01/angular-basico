import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-comp-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mat-comp-table.component.html',
  styleUrl: './mat-comp-table.component.css',
})
export class MatCompTableComponent {
  @Input() vetor: string[] = [];
}
