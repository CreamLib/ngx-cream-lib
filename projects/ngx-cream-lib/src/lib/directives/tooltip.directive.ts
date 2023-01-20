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

    if (elLeft + 250 > windowLeft) {
      return true;
    } else {
      return false;
    }
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
  @HostListener('mouseenter') onMouseover(e: any) {
    this.openTooltip();
    e.stopPropagation();
  }

  @HostListener('focus') onFocus(e: any) {
    this.openTooltip();
    e.stopPropagation();
  }

  @HostListener('mouseleave') onMouseleave(e: any) {
    this.closeAllTooltips();
    e.stopPropagation();
  }

  @HostListener('mousedown') onMousedown(e: any) {
    this.closeAllTooltips();
    e.stopPropagation();
  }

  @HostListener('focusout') onFocusOut(e: any) {
    this.closeAllTooltips();
    e.stopPropagation();
  }

  @HostListener('click') onClick(e: any) {
    this.closeAllTooltips();
    e.stopPropagation();
  }
}
