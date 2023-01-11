import { Component } from '@angular/core';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent {
  pageTitle = 'Messages';
  componentName = 'c3m-message-block';
  resourceType = 'Component';

}
