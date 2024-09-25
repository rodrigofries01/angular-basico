import { CanActivateFn, Router } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {
  //consntante
  const rota = new Router();

  //redirecionamento
  // Alterar no localstorage para ser redirecionado
  if (localStorage.getItem('nome') === 'rodrigo') {
    return true;
  } else {
    rota.navigateByUrl('/pagina1');
    return false;
  }
};
