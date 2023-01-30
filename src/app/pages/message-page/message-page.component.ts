import { Component } from '@angular/core';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css'],
})
export class MessagePageComponent {
  pageTitle = 'Messages';
  componentName = 'c3m-message-block';
  resourceType = 'Component';

  codeMessage = `
<c3m-message-block>
  <p>This is a generic informative message.</p>
</c3m-message-block>`;

  codeMessageError = `
<c3m-message-block [isError]="true">
  <p>This is an important error or alert message!</p>
</c3m-message-block>`;
}
