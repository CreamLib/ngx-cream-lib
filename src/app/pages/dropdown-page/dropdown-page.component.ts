import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-page',
  templateUrl: './dropdown-page.component.html',
  styleUrls: ['./dropdown-page.component.css'],
})
export class DropdownPageComponent {
  pageTitle = 'Dropdown';
  componentName = 'c3m-dropdown/ c3m-dropdown-item';
  resourceType = 'Component';

  codeDropDownLabel = `
<c3m-dropdown label="Label of dropdown">
  <c3m-dropdown-item>
    <NG-CONTENT>
  </c3m-dropdown-item>
</c3m-dropdown>`;

  codeDropDownIcon = `
<c3m-dropdown imgSrc="nav-feedbacks" imgAlt="Describe the nature of the actions">
  <c3m-dropdown-item>
    <NG-CONTENT>
  </c3m-dropdown-item>
</c3m-dropdown>`;

  codeDropDownOther = `
<c3m-dropdown class="others" ariaLabel="Describe the nature of the actions">
  <c3m-dropdown-item>
    <NG-CONTENT>
  </c3m-dropdown-item>
</c3m-dropdown>`;
}
