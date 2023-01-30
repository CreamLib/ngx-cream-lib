import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsible-page',
  templateUrl: './collapsible-page.component.html',
  styleUrls: ['./collapsible-page.component.css'],
})
export class CollapsiblePageComponent {
  pageTitle = 'Collapsible';
  componentName = 'c3m-collapsible';
  resourceType = 'Component';

  code = `
  <c3m-collapsible summary="Title of collapsible panel" total="5">
    <NG-CONTENT>
  </c3m-collapsible>`;
}
