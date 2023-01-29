import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
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
  currentUrl: string = this.router.url;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  onActivate(e: CreamPage) {
    this.pageTitle = e.pageTitle;
    this.componentName = e.componentName;
    this.resourceType = e.resourceType;

    console.log(this.currentUrl)
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
