import { Component, Input } from '@angular/core';

@Component({
  selector: 'c3m-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
}
