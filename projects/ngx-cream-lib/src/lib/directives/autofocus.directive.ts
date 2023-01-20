import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[c3mAutofocus]',
})
export class AutofocusDirective {
  constructor(private element: ElementRef) {}

  @Input() set c3mAutofocus(value: boolean) {
    const element = this.element.nativeElement;
    setTimeout(() => {
      element.focus();
    }, 0);
  }
}
