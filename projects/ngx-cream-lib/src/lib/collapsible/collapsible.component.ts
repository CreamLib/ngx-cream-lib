import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'c3m-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {

  @Input() summary:string = "";
  @Input() isOpen:boolean = false;
  @Input() total:string = "";

  randomIdValue!: number;
  panelId: string = "";

  ngOnInit(): void {
    this.randomIdValue = this.randomID();
    this.panelId = 'colpanel-' + this.randomIdValue;
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }

}
