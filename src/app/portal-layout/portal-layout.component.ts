import { ChangeDetectorRef, Component } from '@angular/core';
import { Location } from '@angular/common';
import { CreamPage } from '../pages/cream-page';

@Component({
  selector: 'app-portal-layout',
  templateUrl: './portal-layout.component.html',
  styleUrls: ['./portal-layout.component.css'],
})
export class PortalLayoutComponent {
  pageTitle = '';
  componentName = '';
  resourceType = 'Component';
  isThereSubNav = true;
  sections: Section[] = [];

  constructor(private cdr: ChangeDetectorRef, private location: Location) {}

  routeSkipLink(element: string) {
    return `${this.location.prepareExternalUrl(this.location.path())}#${element}`;
  }

  onActivate(e: CreamPage) {
    this.pageTitle = e.pageTitle;
    this.componentName = e.componentName;
    this.resourceType = e.resourceType;

    this.cdr.detectChanges();

    const sectionDOM = document.querySelectorAll('section');

    this.sections = [];

    sectionDOM.forEach(value =>
      this.sections.push({
        id: value.id,
        label: (value.firstChild as HTMLElement).innerText,
      })
    );
    this.isThereSubNav = sectionDOM.length > 0;
  }
}

interface Section {
  id: string;
  label: string;
}
