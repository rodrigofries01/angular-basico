import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css',
})
export class NgIfComponent {
  exibe: boolean = true;
  exibirCor() {
    if (this.exibe === true) {
      this.exibe = false;
    } else {
      this.exibe = true;
    }
  }
}
