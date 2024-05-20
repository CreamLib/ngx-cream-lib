import { Component, Input } from '@angular/core';

@Component({
  selector: 'c3m-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css'],
})
export class ProgressSpinnerComponent {
  @Input() progressText!: string;
  
  isOpen: boolean = false;
  theId = this.randomID();
  spinnerTextId = 'progress' + this.theId;

  ToggleOpen(e: any): void {
    if (!this.isOpen) {
      this.isOpen = true;
    } else if (this.isOpen) {
      this.isOpen = false;
      e.target.focus();
    }
  }

  randomID(): number {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }
}
