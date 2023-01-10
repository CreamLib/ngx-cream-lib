import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AccordionService } from '../accordion.service';

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
export class AccordionItemComponent implements OnInit, OnDestroy {
  @Input() label!: string;
  @Input() isOpen = false;
  @Input() titleLevel: '1' | '2' | '3' | '4' | '5' | '6' = '2';
  @Input() total = '';

  accID!: string;
  accPanelID!: string;

  unsubscribe: Subject<void> = new Subject();

  constructor(private accordionService: AccordionService) {
    const randomIdValue = this.randomID();
    this.accID = 'tab' + randomIdValue;
    this.accPanelID = 'panel' + randomIdValue;
  }

  ngOnInit(): void {
    this.accordionService.change$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(accPanelIDOpen => {
        if (accPanelIDOpen != this.accPanelID) {
          this.isOpen = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
    this.accordionService.open(this.accPanelID);
  }

  randomID(): number {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }
}
