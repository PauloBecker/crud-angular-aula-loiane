import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Front-End': return 'code';
      case 'Back-End': return 'computer';
    }
    return 'home';
    // if (value === 'Front-End') {
    //   return 'code';

    // } else if (value === 'Back-End') {
    //   return 'computer';
    // } else {

    //   return 'home';
    // }
  }

}
