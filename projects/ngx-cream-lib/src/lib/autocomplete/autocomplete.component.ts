import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'c3m-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent {
  @Input() isOpen = false;
  @Input() label = '';
  @Input() values: Array<string> = [];
  @Input() acValue = '';
  @Input() filteredList: Array<string> = [];
  @Input() selectedValue = false;
  @ViewChild('acInput') acInput!: ElementRef;

  open(): void {
    this.isOpen = !this.isOpen;
    this.onChange;
  }

  close(): void {
    setTimeout(() => {
      this.isOpen = false;
    }, 300);
  }

  escClose(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      this.isOpen = false;
    }
  }

  onChange(e: any) {
    this.acValue = e.target.value;
    this.filteredList = this.values.filter(value => value.toLowerCase().startsWith(this.acValue.toLowerCase()));
  }

  getSelectedValue(val: string) {
    this.acInput.nativeElement.value = val;
    this.selectedValue = true;
    this.close();
  }
}
