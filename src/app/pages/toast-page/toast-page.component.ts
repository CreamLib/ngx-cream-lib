import { Component, ViewChild } from '@angular/core';
import { ToastComponent } from 'projects/ngx-cream-lib/src/lib/toast/toast.component';

@Component({
  selector: 'app-toast-page',
  templateUrl: './toast-page.component.html',
  styleUrls: ['./toast-page.component.css'],
})
export class ToastPageComponent {
  pageTitle = 'Toast';
  componentName = 'c3m-toast';
  resourceType = 'Component';

  codeToastGeneric = `
<c3m-toast id="toast3" #toast3
  class="normal"
  styleClass="slide-to-top"
  toastText="This is a generic message">
</c3m-toast>


<!--EXAMPLE TO TRIGGER THE TOAST-->

<button aria-controls="toast3" (click)="openToast($event, toast3)">
  General Toast with option
</button>
`;

  codeToastSuccess = `
<c3m-toast id="toast" #toast toastText="Positive feedback message">
</c3m-toast>


<!--EXAMPLE TO TRIGGER THE TOAST-->

<button aria-controls="toast" (click)="openToast($event, toast)">
  Success Toast (default)
</button>`;

  codeToastAlert = `
<c3m-toast id="toast2" #toast2
  role="alert"
  toastText="This is an alert message"
  closeBtnTitle="Close alert">
  This is an alert message
</c3m-toast>

<!--EXAMPLE TO TRIGGER THE TOAST-->

<button aria-controls="toast" (click)="openToast($event, toast2)">
  Success Toast (default)
</button>`;

  // Toast demo
  @ViewChild('toast', { static: true }) toast!: ToastComponent;
  @ViewChild('toast2', { static: true }) toast2!: ToastComponent;
  @ViewChild('toast3', { static: true }) toast3!: ToastComponent;

  public openToast(e: any, toast: ToastComponent) {
    toast.toggleToast(e);
  }
}
