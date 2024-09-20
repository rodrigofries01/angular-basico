import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class AppFilter implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter((it) => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
