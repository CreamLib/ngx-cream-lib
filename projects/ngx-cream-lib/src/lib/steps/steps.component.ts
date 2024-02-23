import { Component, Input } from '@angular/core';

@Component({
  selector: 'c3m-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
})
export class StepsComponent {
  @Input() titles: Array<string> = [];
}
