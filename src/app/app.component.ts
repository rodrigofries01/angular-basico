import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompAula43Component } from './comp-aula43/comp-aula43.component';
import { PipesComponent } from './comp-pipes/pipes.component';
import { ConfBootstrapComponent } from './conf-bootstrap/conf-bootstrap.component';
import { CrudComponent } from './crud/crud.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FormsModuleComponent } from './forms-module/forms-module.component';
import { MatCompComponent } from './mat-comp/mat-comp.component';
import { MaterialCompComponent } from './material-comp/material-comp.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RotasComponent } from './rotas/rotas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FirstComponentComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgStyleComponent,
    NgClassComponent,
    ConfBootstrapComponent,
    FormsModuleComponent,
    ReactiveFormsComponent,
    CrudComponent,
    PipesComponent,
    CompAula43Component,
    MaterialCompComponent,
    MatCompComponent,
    RotasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-basico';
  nome: any;
}
