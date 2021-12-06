import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appValid]'
})
export class ValidDirective {

  constructor(el : ElementRef) { 
    el.nativeElement.style.color = 'green';
  }

}
