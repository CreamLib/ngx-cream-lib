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
  @ViewChild('acInput') acInput!: ElementRef<any>;

  open(): void {
    this.isOpen = !this.isOpen;
    this.onChange;
  }

  close(): void {
    if (this.selectedValue == false) {
      // vérifier si acInput est vide pour que la scrollbar fonctionne
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  escClose(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      this.isOpen = false;
    }
  }

  navigationKeyDown(val: string) {
    if (this.isOpen == true && this.selectedValue == true) {
      //déplace le focus visuel vers la valeur suggérée suivante
    }

    this.acInput.nativeElement.value = val;
    if (val == '' && this.isOpen == false) {
      // déplace le focus visuel sur la première option
    }
  }

  navigationKeyUp(val: string) {
    if (this.isOpen == true && this.selectedValue == true) {
      //déplace le focus visuel sur la dernière valeur suggérée
    }

    this.acInput.nativeElement.value = val;
    if (val == '') {
      if (this.isOpen == false) {
        this.isOpen = true;
      }
      // déplace le focus visuel sur la dernière option
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
