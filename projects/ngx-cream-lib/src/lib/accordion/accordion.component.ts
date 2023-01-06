import { Component, Input, OnInit } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'c3m-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() titleLevel = '2';
  groups: Array<AccordionItemComponent> = [];

  ngOnInit(): void {
    this.groups.forEach((group: AccordionItemComponent) => {
      group.titleLevel = this.titleLevel;
    });
  }

  addGroup(group: AccordionItemComponent): void {
    this.groups.push(group);
  }

  closeOthers(openGroup: AccordionItemComponent): void {
    this.groups.forEach((group: AccordionItemComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  closeAll(): void {
    this.groups.forEach((group: AccordionItemComponent) => {
      group.isOpen = false;
    });
  }

  removeGroup(group: AccordionItemComponent): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
