import { Component, Input, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'c3m-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css'],
})
export class TabPanelComponent implements OnInit, AfterViewInit {
  @Input() tabTitle = '';
  @Input() isActive!: boolean;
  @Input() svgName!: string;
  @Input() svgTitle!: string;
  @Input() idTab!: number;
  @Input() isDisabled: boolean = false;
  @Input() deletable: boolean = false;
  @Input() adaptable: boolean = false;
  @Input() tabIcon: string = '';
  @Input() draggable: boolean = false;

  tabID = '';
  panelID = '';

  /* Constructor Tab Component*/
  constructor() {
    this.idTab = this.randomID();
  }

  /* ID for Accessbility */
  ngOnInit() {
    this.tabID = 'tab' + this.idTab;
    this.panelID = 'panel' + this.idTab;
  }

  /* ID for Accessbility */
  ngAfterViewInit() {
    if (document.getElementById('page-body')) {
      if (document.querySelectorAll('div.adaptable').length > 0) {
        this.getsExtraHeight();
      }
    }
  }

  getsExtraHeight() {
    const pageBody = document.getElementById('page-body');

    if (pageBody) {
      const mainH = pageBody.offsetHeight;
      const mainW = pageBody.offsetWidth;
      const adaptables = pageBody.querySelectorAll('div.adaptable');

      adaptables.forEach(element => {
        (<HTMLElement>element).style.height = 'calc(' + mainH + 'px - 6rem)';
        (<HTMLElement>element).style.width = 'calc(' + mainW + 'px - 2.5rem)';
        //(<HTMLElement>element).style.top = '11rem';
      });
    }
  }

  /* Resize breakpoint tab */
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (document.getElementById('page-body')) {
      if (document.querySelectorAll('div.adaptable').length > 0) {
        this.getsExtraHeight();
      }
    }
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }
}
