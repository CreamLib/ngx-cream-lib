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

  codeModalFull = `
<c3m-modal-trigger [modal]="exempleModal">
  Label of the button
</c3m-modal-trigger>

<c3m-modal #exempleModal modalTitle="This is the title of the modal">
  <p>Content of the modal</p>
</c3m-modal>`;

  codeModalDialog = `
<c3m-modal-button [modal]="exempleModal2">
  Opens small modal
</c3m-modal-trigger>
<c3m-modal class="simple-dialog" #exempleModal2 modalTitle="Cancel contract">
  <p>Content of the modal</p>
  <p class="buttons-bar">
    <button (click)="test();exempleModal2.ToggleOpen()">Ok</button>
  </p>
</c3m-modal>`;

  test() {
    alert('test works');
  }
}
