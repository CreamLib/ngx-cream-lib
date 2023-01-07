import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'c3m-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: AUTO_STYLE,
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
        })
      ),
      transition('open <=> closed', [
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)'),
      ]),
    ]),
  ],
})
export class AccordionItemComponent {
  @Input() label!: string;
  @Input() isOpen = false;
  @Input() index!: number;
  @Input() titleLevel = '2';
  @Input() total = '';

  randomIdValue!: number;
  accID!: string;
  accPanelID!: string;

  constructor() {
    this.randomIdValue = this.randomID();
    this.accID = 'tab' + this.randomIdValue;
    this.accPanelID = 'panel' + this.randomIdValue;
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }
}
