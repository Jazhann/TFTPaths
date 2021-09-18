import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'removeSet' })

export class removeSetPipe implements PipeTransform {
  transform(name: string): string {
    return name.substring(5);
  }
}