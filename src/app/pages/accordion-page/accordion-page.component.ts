import { Component } from '@angular/core';
import { CreamPage } from '../cream-page';

@Component({
  selector: 'app-accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.css'],
})
export class AccordionPageComponent implements CreamPage {
  pageTitle = 'Accordion';
  componentName = 'c3m-accordion/ c3m-accordion-item';
  resourceType = 'Component';

  code = `
  <c3m-tab-panel class="block-style" tabTitle="Demo" [isActive]="true">
    <c3m-accordion titleLevel="4">
      <c3m-accordion-item label="First block" total="5">
        <p>Content of the block</p>
      </c3m-accordion-item>
      <c3m-accordion-item label="Second block" [isOpen]="true">
        <p>Content of the block with <a href="#">a link</a></p>
      </c3m-accordion-item>
      <c3m-accordion-item label="Third block">
        <p>Content of the block</p>
      </c3m-accordion-item>
      <c3m-accordion-item label="Forth block">
        <p>Content of the block</p>
      </c3m-accordion-item>
    </c3m-accordion>
  </c3m-tab-panel>`;
}
