import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.css'],
})
export class AccordionPageComponent {
  @Output() pageTitle = 'Accordion';
  @Output() pageType = 'Component';
}
