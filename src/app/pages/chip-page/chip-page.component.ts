import { Component } from '@angular/core';

@Component({
  selector: 'app-chip-page',
  templateUrl: './chip-page.component.html',
  styleUrls: ['./chip-page.component.css'],
})
export class ChipPageComponent {
  pageTitle = 'Chip';
  componentName = 'c3m-chip';
  resourceType = 'Component';

  codeChipDel = `
  <c3m-chip label="Chip example label"></c3m-chip>`;

  codeChipNonDel = `
  <c3m-chip label="Keyword" [deletable]="false"></c3m-chip>`;

  codeChipLink = `
  <c3m-chip label="Refers to Home Page" linkUrl="/"></c3m-chip>`;
}
