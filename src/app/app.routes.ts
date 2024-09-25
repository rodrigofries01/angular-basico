import { Routes } from '@angular/router';
import { PaginaErroComponent } from './paginas/pagina-erro/pagina-erro.component';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';

import { routeGuard } from './authentation/route.guard';

export const routes: Routes = [
  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component, canActivate: [routeGuard] },
  { path: '', redirectTo: '/pagina1', pathMatch: 'full' },
  { path: '**', component: PaginaErroComponent },
];
