import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonValid]'
})
export class NonValidDirective {

  constructor(el : ElementRef) { 
    el.nativeElement.style.color = 'red';
  }

}
