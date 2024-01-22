import { Component, Input } from '@angular/core';

@Component({
  selector: 'c3m-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent {
  @Input() isOpen = false;
  @Input() label = '';
  @Input() countries: Array<string> = [];
  @Input() acValue = '';
  @Input() filteredCountriesList: Array<string> = [];

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
    this.onChange;
  }

  close(): void {
    this.isOpen = false;
  }

  escClose(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      this.isOpen = false;
    }
  }

  onChange(e: any) {
    this.acValue = e.target.value;
    this.filteredCountriesList = this.countries.filter(country => country.toLowerCase().startsWith(this.acValue.toLowerCase()));
  }
}
