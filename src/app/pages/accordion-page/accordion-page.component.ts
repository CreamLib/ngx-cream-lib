import { Component } from '@angular/core';
import { CreamPage } from '../cream-page';

@Component({
  selector: 'app-accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.css'],
})
export class AccordionPageComponent implements CreamPage {
  pageTitle = 'Accordion';
  pageType = 'Component';
}
