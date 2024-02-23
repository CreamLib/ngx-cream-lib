import { Component } from '@angular/core';
import { CreamPage } from '../cream-page';

@Component({
  selector: 'app-steps-page',
  templateUrl: './steps-page.component.html',
  styleUrls: ['./steps-page.component.css'],
})
export class StepsPageComponent implements CreamPage {
  pageTitle = 'Steps';
  componentName = 'c3m-steps';
  resourceType = 'Component';

  titles = ['Personal', 'Seat', 'Payment', 'Confirmation'];
}
