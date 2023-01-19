import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'c3m-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}

  /* INPUTS */
  @Input() isOpen = false;
  @Input() label: string = "";
  @Input() ariaLabel: string = "";
  @Input() disabled!: string;
  @Input() imgSrc: string = "";
  @Input() imgAlt: string = "";

  ngOnInit() {}

  /* Open / Close the Dropdown */
  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }

  close(): void {
    setTimeout(() => {
      if (!this.elementRef.nativeElement.querySelector(':focus')) {
        this.elementRef.nativeElement.removeAttribute('open');
        this.isOpen = false;
      }
    }, 100);
  }

  escClose(event: KeyboardEvent): void {
    if(event.code === "Escape") {
      this.isOpen = false;
      this.elementRef.nativeElement.querySelector('button.control').focus();
      event.stopPropagation();
    }
  }
}
