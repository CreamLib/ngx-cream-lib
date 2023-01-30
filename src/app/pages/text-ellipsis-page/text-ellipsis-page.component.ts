import { Component } from '@angular/core';

@Component({
  selector: 'app-text-ellipsis-page',
  templateUrl: './text-ellipsis-page.component.html',
  styleUrls: ['./text-ellipsis-page.component.css'],
})
export class TextEllipsisPageComponent {
  pageTitle = 'Text Ellipsis';
  componentName = 'c3m-text-ellipsis';
  resourceType = 'Component';

  code = `
<p>
  <c3m-text-ellipsis>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </c3m-text-ellipsis>
</p>

<p>
  <c3m-text-ellipsis>
    Lorem ipsum dolor sit amet, consectetur adip
  </c3m-text-ellipsis>
</p>`;
}
