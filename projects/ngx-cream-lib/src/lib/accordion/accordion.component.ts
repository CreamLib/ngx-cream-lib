import {
  AfterViewChecked,
  Component,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'c3m-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements AfterViewChecked {
  @Input() titleLevel = '2';
  @ViewChildren(AccordionItemComponent)
  groups!: QueryList<AccordionItemComponent>;

  ngAfterViewChecked(): void {
    this.groups.forEach((item: AccordionItemComponent) => {
      item.titleLevel = this.titleLevel;
    });
  }
}
