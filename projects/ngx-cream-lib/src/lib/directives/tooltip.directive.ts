import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[c3mTooltip]',
})
export class TooltipDirective {
  constructor(private element: ElementRef) {}

  theTooltip!: any;
  theTitle!: any;
  theText!: any;
  originalCSSPosition: string = '';

  isExtremeRight(el: any) {
    const elLeft = el.getBoundingClientRect().left;
    const windowLeft = window.innerWidth;

    return elLeft + 250 > windowLeft;
  }

  storeOriginalPosition(el: any) {
    const cssStyles = window.getComputedStyle(el);
    return cssStyles.getPropertyValue('position');
  }

  openTooltip() {
    this.theTitle = this.element.nativeElement.querySelector('title');

    if (this.theTitle) {
      this.theText = this.theTitle.textContent;
    } else {
      this.theText = this.element.nativeElement.innerText;
    }

    this.theTooltip = document.createElement('span');
    this.theTooltip.classList.add('tooltip');

    if (this.isExtremeRight(this.element.nativeElement)) {
      this.theTooltip.classList.add('to-left');
    }

    this.theTooltip.setAttribute('role', 'tooltip');
    this.theTooltip.style.top = this.element.nativeElement.offsetHeight + 10 + 'px';
    this.theTooltip.textContent = this.theText;
    this.originalCSSPosition = this.storeOriginalPosition(this.element.nativeElement.parentNode);

    if (this.originalCSSPosition != 'relative') {
      this.element.nativeElement.parentNode.style.position = 'relative';
    }

    this.element.nativeElement.parentNode.appendChild(this.theTooltip);
  }

  closeAllTooltips() {
    if (document.querySelectorAll('span.tooltip').length > 0) {
      this.element.nativeElement.parentNode.style.position = this.originalCSSPosition;
      if (this.theTooltip.parentNode) {
        this.theTooltip.parentNode.removeChild(this.theTooltip);
      }
    }
  }

  // Mouse and keyboard events
  @HostListener('mouseenter', ['$event'])
  handleMouseEnter(event: MouseEvent) {
    event.stopPropagation();
    this.openTooltip();
  }

  @HostListener('focus', ['$event'])
  handleFocus(event: MouseEvent) {
    event.stopPropagation();
    this.openTooltip();
  }

  @HostListener('mouseleave', ['$event'])
  handleMouseLeave(event: MouseEvent) {
    event.stopPropagation();
    this.closeAllTooltips();
  }

  @HostListener('mousedown', ['$event'])
  handleMouseDown(event: MouseEvent) {
    event.stopPropagation();
    this.closeAllTooltips();
  }

  @HostListener('focusout', ['$event'])
  handleFocusOut(event: MouseEvent) {
    event.stopPropagation();
    this.closeAllTooltips();
  }

  @HostListener('click', ['$event'])
  handleClick(event: any) {
    event.stopPropagation();
    this.closeAllTooltips();
  }
}
