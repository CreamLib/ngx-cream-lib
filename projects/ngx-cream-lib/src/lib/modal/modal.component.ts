import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'c3m-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private el: ElementRef) { }

  @Input() isOpen: boolean = false;
  @Input() modalTitle: string = "";

  theId = this.randomID();
  dialogTitle = 'modalTitle' + this.theId;
  dialogDescription = 'modalDesc' + this.theId;
  buttonTrigger!: any;

  handleKeyEvents(e: any) {
    const allFocusables = this.el.nativeElement.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    const theLast = allFocusables[allFocusables.length - 1];
    const theFirst = allFocusables[0];
    if (e.key === 'Escape') {
      this.isOpen = false;
      this.buttonTrigger.focus();
      e.stopPropagation();
      return;
    }
    if (e.key === 'Tab' || e.keyCode === 9) {
      if ( e.shiftKey ) /* shift + tab */ {
        if (document.activeElement === theFirst) {
          theLast.focus();
          e.preventDefault();
        }
      } else /* tab */ {
        if (document.activeElement === theLast) {
          theFirst.focus();
          e.preventDefault();
        }
      }
    }
  }

  ToggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.buttonTrigger = document.activeElement;
    } else if (this.isOpen) {
      this.isOpen = false;
      this.buttonTrigger.focus();
    }
  }

  randomID(): number {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }

}
