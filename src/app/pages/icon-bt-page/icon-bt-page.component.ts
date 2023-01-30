import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-bt-page',
  templateUrl: './icon-bt-page.component.html',
  styleUrls: ['./icon-bt-page.component.css'],
})
export class IconBtPageComponent {
  pageTitle = 'Icon Button';
  componentName = 'c3m-icon-button';
  resourceType = 'Component';

  code = `
  <c3m-icon-button aName="Open Menu" svgId="bt-menu">
  </c3m-icon-button>

  <c3m-icon-button rLink="/" aName="Information" svgId="info" class="discrete">
  </c3m-icon-button>

  <c3m-icon-button aName="Delete" svgId="bt-delete" class="minimal">
  </c3m-icon-button>`;
}
