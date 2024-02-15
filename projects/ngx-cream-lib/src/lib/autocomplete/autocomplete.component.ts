/* eslint-disable prefer-const */
import { Component, ElementRef, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'c3m-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent {
  @Input() acValue = '';
  @Input() label = '';
  @Input() isOpen = false;
  @Input() selectedValue = false;
  @Input() values: Array<string> = [];
  @Input() filteredList: Array<string> = [];
  @ViewChild('acInput') acInput!: ElementRef;
  @ViewChildren('options') options!: QueryList<ElementRef>;
  currentLi = -1;

  close(): void {
    setTimeout(() => {
      this.isOpen = false;
    }, 300);
  }

  open(): void {
    this.isOpen = !this.isOpen;
    this.onChange;
  }

  onKeyEsc(): void {
    this.isOpen = false;
  }

  ariaNull() {
    this.options.forEach(option => option.nativeElement.setAttribute('aria-selected', null));
  }

  goDown() {
    this.ariaNull();
    if (this.currentLi + 1 > this.options.length) {
      this.currentLi = 0;
    } else {
      this.currentLi++;
    }

    let li = this.options.toArray()[this.currentLi].nativeElement;
    li.setAttribute('aria-selected', 'true');
  }

  goUp() {
    this.ariaNull();
    if (this.currentLi + 1 > this.options.length) {
      this.currentLi = 0;
    } else {
      this.currentLi--;
    }

    let li = this.options.toArray()[this.currentLi].nativeElement;
    li.setAttribute('aria-selected', 'true');
  }

  onChange(e: any) {
    this.isOpen = true;
    this.acValue = e.target.value;
    this.filteredList = this.values.filter(value => value.toLowerCase().startsWith(this.acValue.toLowerCase()));
  }

  getSelectedValue(val: string) {
    this.acInput.nativeElement.value = val;
    this.selectedValue = true;
    this.close();
  }
}
