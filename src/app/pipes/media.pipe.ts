import { Pipe, PipeTransform } from '@angular/core';
import { PipesComponent } from '../comp-pipes/pipes.component';

@Pipe({
  name: 'media',
  standalone: true,
})
export class MediaPipe implements PipeTransform {
  transform(objeto: any): number {
    return (objeto.nota1 + objeto.nota2) / 2;
  }
}
