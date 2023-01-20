import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'c3m-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent {
  constructor(private el: ElementRef) {}

  @Input() isOpen: boolean = false;
  @Input() sbTitle: string = 'Confirmation';

  theId = this.randomID();
  dialogTitle = 'sbTitle' + this.theId;
  dialogDescription = 'sbDesc' + this.theId;

  handleKeyEvents(e: any) {
    const allFocusables = this.el.nativeElement.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
    );
    const theLast = allFocusables[allFocusables.length - 1];
    const theFirst = allFocusables[0];
    if (e.key === 'Tab' || e.keyCode === 9) {
      if (e.shiftKey) {
        /* shift + tab */ if (document.activeElement === theFirst) {
          theLast.focus();
          e.preventDefault();
        }
      } /* tab */ else {
        if (document.activeElement === theLast) {
          theFirst.focus();
          e.preventDefault();
        }
      }
    }
  }

  ToggleOpen(e: any): void {
    if (!this.isOpen) {
      const allFocusables = this.el.nativeElement.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
      );
      this.isOpen = true;
      // Timeout is needed to give time to "open" snackbar
      setTimeout(function () {
        allFocusables[0].focus();
      }, 500);
    } else if (this.isOpen) {
      this.isOpen = false;
      e.target.focus();
    }
  }

  randomID(): number {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }
}
