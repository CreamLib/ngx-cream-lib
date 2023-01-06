import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-layout',
  templateUrl: './portal-layout.component.html',
  styleUrls: ['./portal-layout.component.css'],
})
export class PortalLayoutComponent {
  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  pageTitle = '';
  pageType = '';
  isThereSubNav = true;
  sectionNodeList!: any;
  currentUrl: string = this.router.url;

  onActivate(e: any) {
    this.pageTitle = e.pageTitle;
    this.pageType = e.pageType;
    this.cdr.detectChanges();

    this.sectionNodeList = document.querySelectorAll('section');
    const snLength = this.sectionNodeList.length;

    if (snLength == 0) {
      this.isThereSubNav = false;
    } else {
      this.isThereSubNav = true;
    }

    this.currentUrl = this.router.url;
  }
}
