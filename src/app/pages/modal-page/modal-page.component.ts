import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.css'],
})
export class ModalPageComponent {
  pageTitle = 'Modal';
  componentName = 'c3m-modal/ c3m-modal-trigger';
  resourceType = 'Component';

  test() {
    alert('test works');
  }
}
