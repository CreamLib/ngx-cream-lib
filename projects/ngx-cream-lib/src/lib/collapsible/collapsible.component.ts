import { Component, Input } from '@angular/core';

@Component({
  selector: 'c3m-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css'],
})
export class CollapsibleComponent  {
  @Input() summary: string = '';
  @Input() isOpen: boolean = false;
  @Input() total: string = '';
  panelId = 'colpanel-' + this.randomID()

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }
}
