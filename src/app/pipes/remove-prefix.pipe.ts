import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removePrefix'
})
export class RemovePrefixPipe implements PipeTransform {

  transform(value: string, prefix: string): string {

    return value.toUpperCase().startsWith(prefix.toUpperCase()) ? value.substring(prefix.length) : value;

  }

}
