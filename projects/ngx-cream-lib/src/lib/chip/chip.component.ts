import { Component, Input, ElementRef, Renderer2, inject } from '@angular/core';

@Component({
  selector: 'c3m-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
})
export class ChipComponent {

  elementRef = inject(ElementRef);
  renderer = inject(Renderer2)

  @Input() label: string = '';
  @Input() deletable: boolean = true;
  @Input() disabled: boolean = false;
  @Input() linkUrl: string = '';

  deleteChip(): void {
    this.renderer.removeChild(this.elementRef.nativeElement.parentNode, this.elementRef.nativeElement);
  }

}
