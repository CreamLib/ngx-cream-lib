import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'c3m-h',
  template: `<h2><ng-content></ng-content></h2>`,
  encapsulation: ViewEncapsulation.None,
})
export class HComponent implements AfterContentInit {
  @Input() titleLevel!: string;

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    const replacement = document.createElement('h' + this.titleLevel);
    const replaced = this.el.nativeElement.firstChild;

    //copy children
    while (replaced.firstChild) {
      replacement.appendChild(replaced.firstChild);
    }

    //replace element
    this.el.nativeElement.replaceChild(replacement, replaced);
  }
}
