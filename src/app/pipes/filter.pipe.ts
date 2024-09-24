import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../models/Produto';

@Pipe({ name: 'appFilter', standalone: true })
export class AppFilter implements PipeTransform {
  transform(value: Produto[], termoPesquisado: string): Produto[] {
    if (!value || !termoPesquisado) {
      return value;
    }

    termoPesquisado = termoPesquisado.toLocaleLowerCase();

    return value.filter((produto) => {
      return (
        produto.nome.toLocaleLowerCase().includes(termoPesquisado) ||
        produto.valor.toString().includes(termoPesquisado)
      );
    });
  }
}
