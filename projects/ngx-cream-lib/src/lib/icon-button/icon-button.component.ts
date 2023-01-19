import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'c3m-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

  @Input() aName: string = "Action";
  @Input() svgId: string = "";
  @Input() rLink: string = "";
  @Input() disabled!: string;

  randomIdValue!: number;
  btID!: string;

  constructor() {
    this.randomIdValue = this.randomID();
  }

  ngOnInit(): void {
    this.btID = 'acbt' + this.randomIdValue;
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }

}
