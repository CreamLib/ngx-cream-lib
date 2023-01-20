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

  // Toast demo
  @ViewChild('toast', { static: true }) toast!: ToastComponent;
  @ViewChild('toast2', { static: true }) toast2!: ToastComponent;
  @ViewChild('toast3', { static: true }) toast3!: ToastComponent;

  public openToast(e: any, toast: ToastComponent) {
    toast.toggleToast(e);
  }
}
