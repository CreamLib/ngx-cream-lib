import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-page',
  templateUrl: './tabs-page.component.html',
  styleUrls: ['./tabs-page.component.css']
})
export class TabsPageComponent {
  pageTitle = 'Tabs';
  componentName = 'c3m-tabs/ c3m-tab-panel';
  resourceType = 'Component';
}
