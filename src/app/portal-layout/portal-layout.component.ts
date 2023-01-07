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
  pageType = '';
  isThereSubNav = true;
  sections: Section[] = [];
  currentUrl: string = this.router.url;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  onActivate(e: CreamPage) {
    this.pageTitle = e.pageTitle;
    this.pageType = e.pageType;
    this.cdr.detectChanges();

    const sections = document.querySelectorAll('section');
    sections.forEach(value =>
      this.sections.push({
        id: value.id,
        label: (value.firstChild as HTMLElement).innerText,
      })
    );
    this.isThereSubNav = sections.length > 0;
  }
}

interface Section {
  id: string;
  label: string;
}
