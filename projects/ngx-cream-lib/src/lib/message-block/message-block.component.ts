import { Component, Input } from '@angular/core';

@Component({
  selector: 'c3m-message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css'],
})
export class MessageBlockComponent {
  @Input() isError: boolean = false;
  @Input() isWarning: boolean = false;
}
