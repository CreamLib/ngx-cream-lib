import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-spinner-page',
  templateUrl: './progress-spinner-page.component.html',
  styleUrls: ['./progress-spinner-page.component.css']
})
export class ProgressSpinnerPageComponent {
  pageTitle = 'Progress Spinner';
  componentName = 'c3m-progress-spinner';
  resourceType = 'Component';

  // Demo for progress spinner
  // Sends signal to stop progress and close spinner
  stopProgress(el: any) {
    setTimeout(function() {
      el.isOpen = false;
    }, 3000);
  }

}
