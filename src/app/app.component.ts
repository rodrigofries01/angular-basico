import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { CommonModule } from '@angular/common';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { ConfBootstrapComponent } from './conf-bootstrap/conf-bootstrap.component';
import { FormsModuleComponent } from './forms-module/forms-module.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { CrudComponent } from './crud/crud.component';
import { PipesComponent } from './comp-pipes/pipes.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-basico';
  nome: any;
}
