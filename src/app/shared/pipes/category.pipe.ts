import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    // switch(value){
    //   case 'Front-End': return 'code';
    //   case 'Back-End': return 'computer';
    // }
    // return value;
    if (value == 'front-end') {
      return 'code';

    } else if(value == 'back-end'){
      return 'computer';

    } else if(value == 'full-stack'){

      return 'terminal';

    }else{
      return 'tab';
    }
    // return value;
  }

}
