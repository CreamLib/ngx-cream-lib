import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'c3m-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  idToastNum!: number;
  toastId!: string;
  active: boolean = false;

  constructor() {
    this.idToastNum = this.randomID();
  }

  @Input() toastText: string = "";
  @Input() delay: number = 6500;
  @Input() role: string = 'status';
  @Input() disabled!: string;
  @Input() styleClass: string = 'slide-to-bottom';

  ngOnInit(): void {
    this.toastId = 'toast' + this.idToastNum;
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeToast(event);
      event.stopPropagation();
      return;
    }
  }

  public toggleToast(e: any) {
    if (this.active === false) {
      this.active = true;
      // If delay, hide toast after it
      if (this.delay > 0) {
        setTimeout(() => {
          this.closeToast(e);
        }, this.delay);
      }
    }
  }

  public closeToast(e: any) {
    this.active = false;
    setTimeout(() => {
      e.target.focus();
    }, 100);
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }

}

