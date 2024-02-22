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
  @ViewChild('listbox') listbox!: ElementRef;
  @ViewChildren('options') options!: QueryList<ElementRef>;
  currentLi = -1;

  close(): void {
    setTimeout(() => {
      this.isOpen = false;
    }, 300);
  }

  open(): void {
    this.isOpen = true;
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
    console.log(li);
    li.setAttribute('aria-selected', 'true');
  }

  goUp() {
    this.ariaNull();
    if (this.currentLi === 0) {
      this.currentLi = this.options.length - 1;
    } else {
      this.currentLi--;
    }

    let li = this.options.toArray()[this.currentLi].nativeElement;
    li.setAttribute('aria-selected', 'true');
  }

  onChange(e: any) {
    if (!this.isOpen) {
      this.open();
    }
    this.acValue = e.target.value;
    this.filteredList = this.values.filter(value => value.toLowerCase().startsWith(this.acValue.toLowerCase()));
  }

  getSelectedValue(val: string) {
    this.acInput.nativeElement.value = val;
    this.selectedValue = true;
    this.close();
  }

  // A vérifier

  selectOption(li: HTMLElement) {
    this.ariaNull();
    li.setAttribute('aria-selected', 'true');
  }

  isOptionInView(li: HTMLElement) {
    let listPosPage = this.listbox.nativeElement.offsetHeight;
    let liPosPage = li.offsetTop;
    let liHeight = li.offsetHeight;
    let result;

    if (liPosPage + liHeight > listPosPage) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }

  nullActiveDescendant() {
    this.options.forEach(option => option.nativeElement.setAttribute('aria-activedescendant', null));
  }

  setActiveDescendant(li: HTMLElement) {
    const acInput = this.acInput.nativeElement;
    const listbox = this.listbox.nativeElement;

    if (li && listbox.classList.contains('focus')) {
      let id = li.getAttribute('id');
      acInput.setAttribute('aria-activedescendant', id);
      if (this.isOptionInView(li)) {
        li.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        listbox.scrollTo(0, 0);
      }
      this.selectOption(li);
    } else {
      this.nullActiveDescendant();
    }
  }
}
