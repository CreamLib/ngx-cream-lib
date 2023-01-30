import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-page',
  templateUrl: './tooltip-page.component.html',
  styleUrls: ['./tooltip-page.component.css'],
})
export class TooltipPageComponent {
  pageTitle = 'Tooltip';
  componentName = 'c3mTooltip';
  resourceType = 'Directive';

  code = `
<button c3mTooltip>
  <svg role="img" width="24" height="24" viewbox="0 0 24 24" style="fill: #FFF">
    <use href="./assets/img/sprite.svg#bt-delete"></use>
  </svg>
  This is the content of the button
</button>`;
}
