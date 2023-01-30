import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-design',
  templateUrl: './custom-design.component.html',
  styleUrls: ['./custom-design.component.css'],
})
export class CustomDesignComponent {
  pageTitle = 'Custom Design';

  codeStyle = `
  "styles": [
    "/node_modules/ngx-cream-lib/assets/css/main.css",
    "src/assets/css/local.css"
  ],`;

  codeDecorative = `
<svg role="img" width="24" height="24" aria-hidden="true">
  <use href="./assets/img/sprite.svg#pic-arrow"></use>
</svg>`;

  codeNonDecorative = `
<svg role="img" width="24" height="24">
  <title>Favorites</title>
  <use href="./assets/img/sprite.svg#ic-favorites"></use>
</svg>
`;
}
