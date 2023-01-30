import { Component } from '@angular/core';

@Component({
  selector: 'app-snackbar-page',
  templateUrl: './snackbar-page.component.html',
  styleUrls: ['./snackbar-page.component.css'],
})
export class SnackbarPageComponent {
  pageTitle = 'Snackbar';
  componentName = 'c3m-snackbar';
  resourceType = 'Component';

  code = `
<c3m-snackbar #snackbarDemo>
  <NG-CONTENT>
</c3m-snackbar>

EXAMPLE OF SNACKBAR TRIGGER:

<p><button (click)="snackbarDemo.ToggleOpen($event)">
  Open snackbar
</button></p>

EXAMPLE OF BUTTON ACTION:

<button class="as-reset" (click)="snackbarDemo.ToggleOpen($event)">
  No
</button>
<button class="as-submit" (click)="snackbarDemo.ToggleOpen($event)">
  Yes
</button>`;
}
