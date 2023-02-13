import { Component } from '@angular/core';
import { ProgressSpinnerComponent } from './../../../../projects/ngx-cream-lib/src/lib/progress-spinner/progress-spinner.component';

@Component({
  selector: 'app-progress-spinner-page',
  templateUrl: './progress-spinner-page.component.html',
  styleUrls: ['./progress-spinner-page.component.css'],
})
export class ProgressSpinnerPageComponent {
  pageTitle = 'Progress Spinner';
  componentName = 'c3m-progress-spinner';
  resourceType = 'Component';

  insertContent(spinner: ProgressSpinnerComponent) {
    spinner.progressText = 'Loading...';
  }

  // Demo for progress spinner
  // Sends signal to stop progress and close spinner
  stopProgress(el: any) {
    setTimeout(function () {
      el.isOpen = false;
      el.progressText = '';
    }, 3000);
  }
}
