import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-basics-page',
  templateUrl: './design-basics-page.component.html',
  styleUrls: ['./design-basics-page.component.css'],
})
export class DesignBasicsPageComponent implements OnInit {
  pageTitle = 'Design Basics';

  ngOnInit(): void {
    this.buildPalette();
  }

  buildPalette() {
    const allColors = document.querySelectorAll('dl.palette dt');

    for (let i = 0; i < allColors.length; i++) {
      if (<HTMLElement>allColors[i].nextElementSibling != null) {
        const theColor = (<HTMLElement>allColors[i].nextElementSibling).innerText;
        (<HTMLElement>allColors[i]).style.setProperty('--my-var', theColor);
      }
    }
  }
}
