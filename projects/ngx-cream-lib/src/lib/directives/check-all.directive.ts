import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[c3mCheckAll]',
})
export class CheckAllDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    const element = this.element.nativeElement;
    const theInput = element.querySelector('input');
    const groupName = element.getAttribute('name');
    const selector = '[name=' + groupName + ']';
    const allChecks = document.querySelectorAll(selector);

    theInput.addEventListener('click', function () {
      allChecks.forEach(el => {
        if (el.getAttribute('name') == groupName && el != theInput) {
          (<HTMLInputElement>el.querySelector('input')).checked = theInput.checked;
        }
      });
    });
  }
}
