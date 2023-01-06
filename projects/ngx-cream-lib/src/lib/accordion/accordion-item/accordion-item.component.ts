import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AccordionComponent } from '../accordion.component';

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
        })
      ),
      state(
        'closed',
        style({
          height: 0,
        })
      ),
      transition('open => closed', [animate('0.2s ease-out')]),
      transition('closed => open', [animate('0.2s ease-in')]),
    ]),
  ],
})
export class AccordionItemComponent implements OnDestroy, OnChanges, OnInit {
  @Input() label!: string;
  @Input() isOpen = false;
  @Input() index!: number;
  @Input() titleLevel = '2';
  @Input() total = '';

  randomIdValue!: number;
  accID!: string;
  accPanelID!: string;

  /* By default , add item to accordion */
  constructor(private accordion: AccordionComponent) {
    this.accordion.addGroup(this);
    this.randomIdValue = this.randomID();
  }

  /* remove item to accordion*/
  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }

  /* changes */
  ngOnChanges(changes: SimpleChanges) {
    for (const change in changes) {
      if (Object.prototype.hasOwnProperty.call(changes, change)) {
        const changedProp = changes[change];

        if (!changedProp.isFirstChange()) {
          this.accordion.groups[this.index + 1].toggleOpen();
        }
      }
    }
  }

  /* initialisation */
  ngOnInit() {
    this.accID = 'tab' + this.randomIdValue;
    this.accPanelID = 'panel' + this.randomIdValue;
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
    this.accordion.closeOthers(this);
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }
}
