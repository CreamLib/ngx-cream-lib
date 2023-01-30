import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'c3m-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
})
export class ChipComponent implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.chipIdNum = this.randomID();
  }

  @Input() label: string = '';
  @Input() deletable: boolean = true;
  @Input() disabled: boolean = false;
  @Input() linkUrl: string = '';

  chipIdNum!: number;
  chipId!: string;

  ngOnInit() {
    this.chipId = 'chip' + this.chipIdNum;
  }

  deleteChip(): void {
    this.renderer.removeChild(
      this.elementRef.nativeElement.parentNode,
      this.elementRef.nativeElement
    );
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }
}
