import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'c3m-text-ellipsis',
  templateUrl: './text-ellipsis.component.html',
  styleUrls: ['./text-ellipsis.component.css'],
})
export class TextEllipsisComponent implements AfterViewInit {
  @Input() textCount: number = 55;

  isExpanded: boolean = false;
  isExpandable: boolean = true;

  toggleEllipse(): void {
    this.isExpanded = !this.isExpanded;
  }

  @ViewChild('token') token!: any;

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.token.nativeElement.innerText.length > this.textCount) {
        this.isExpandable = true;
      } else {
        this.isExpandable = false;
      }
    }, 1000);
  }
}
