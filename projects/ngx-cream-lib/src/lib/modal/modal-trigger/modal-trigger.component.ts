import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'c3m-modal-trigger',
  templateUrl: './modal-trigger.component.html',
  styleUrls: ['./modal-trigger.component.css']
})
export class ModalTriggerComponent {

  @Input() modal!: ModalComponent;
  @Input() disabled!: string;

  public openModal(e: Event): void {
    this.modal.ToggleOpen();
  }

}
