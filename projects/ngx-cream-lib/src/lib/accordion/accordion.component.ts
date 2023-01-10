import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'c3m-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements AfterViewInit {
  @Input() titleLevel: '1' | '2' | '3' | '4' | '5' | '6' = '2';
  @ContentChildren(AccordionItemComponent)
  groups!: QueryList<AccordionItemComponent>;

  ngAfterViewInit(): void {
    this.groups.forEach((item: AccordionItemComponent) => {
      item.titleLevel = this.titleLevel;
    });
  }
}
