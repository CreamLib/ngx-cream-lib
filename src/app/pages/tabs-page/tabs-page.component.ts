import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-page',
  templateUrl: './tabs-page.component.html',
  styleUrls: ['./tabs-page.component.css'],
})
export class TabsPageComponent {
  pageTitle = 'Tabs';
  componentName = 'c3m-tabs/ c3m-tab-panel';
  resourceType = 'Component';

  codeTabsGeneral = `
<c3m-tabs class="discrete" label="Demo for discrete tabs" [deletable]="true" >
  <c3m-tab-panel tabTitle="First Tab" [isActive]="true">
    <NG-CONTENT>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Second Tab">
    <NG-CONTENT>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Third Tab">
    <NG-CONTENT>
  </c3m-tab-panel>
</c3m-tabs>`;

  codeTabsDeletable = `
<c3m-tabs label="Tabs for demo">
  <c3m-tab-panel tabTitle="First Tab" [isActive]="true">
    <NG-CONTENT>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Second Tab" [deletable]="true">
    <NG-CONTENT>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Third Tab" [deletable]="true">
    <NG-CONTENT>
  </c3m-tab-panel>
</c3m-tabs>`;

  codeTabsDiscrete = `
<c3m-tabs class="block-style" label="Demo and Code">
  <c3m-tab-panel class="block-style" tabTitle="Demo" [isActive]="true">
    <div class="demo">
      <c3m-tabs class="discrete" label="Demo for discrete tabs">
        <c3m-tab-panel tabTitle="First Tab" [isActive]="true">
          <p>This is the content of first tab</p>
        </c3m-tab-panel>
        <c3m-tab-panel tabTitle="Second Tab">
          <p>This is the content of second tab</p>
        </c3m-tab-panel>
        <c3m-tab-panel tabTitle="Third Tab">
          <p>This is the content of third tab</p>
        </c3m-tab-panel>
      </c3m-tabs>`;

  codeTabsIcons = `
<c3m-tabs label="Demo for tabs with icons">
  <c3m-tab-panel tabTitle="First Tab" svgName="star" svgTitle="Favorite" [isActive]="true">
    <p>NG-CONTENT</p>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Second Tab" svgName="star" svgTitle="Favorite" >
    <p>NG-CONTENT</p>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Third Tab">
    <p>NG-CONTENT</p>
  </c3m-tab-panel>
</c3m-tabs>`;

  codeTabsResponsive = `
<c3m-tabs label="Responsive demo for tabs">
  <c3m-tab-panel tabTitle="First Tab" svgId="nav-forms" svgTitle="Forms" [isActive]="true">
    <p>This is the content of first tab</p>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Second Tab" svgId="nav-blocks" svgTitle="Blocks" >
    <p>This is the content of second tab</p>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Third Tab" svgId="nav-feedbacks" svgTitle="Feedbacks" >
    <p>This is the content of third tab</p>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Forth Tab" svgId="nav-forms" svgTitle="Forms">
    <p>This is the content of forth tab</p>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Fifth Tab" svgId="nav-blocks" svgTitle="Blocks" >
    <p>This is the content of fifth tab</p>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Sixth Tab" svgId="nav-feedbacks" svgTitle="Feedbacks" >
    <p>This is the content of sixth tab</p>
  </c3m-tab-panel>
</c3m-tabs>

<c3m-tabs label="Responsive demo for tabs with custom scroll" [handleScroll]="true">
  <c3m-tab-panel tabTitle="First Tab" svgId="nav-forms" svgTitle="Forms" [isActive]="true">
    <p>This is the content of first tab</p>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Second Tab" svgId="nav-blocks" svgTitle="Blocks" >
    <p>This is the content of second tab</p>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Third Tab" svgId="nav-feedbacks" svgTitle="Feedbacks" >
    <p>This is the content of third tab</p>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Forth Tab" svgId="nav-forms" svgTitle="Forms">
    <p>This is the content of forth tab</p>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Fifth Tab" svgId="nav-blocks" svgTitle="Blocks" >
    <p>This is the content of fifth tab</p>
  </c3m-tab-panel>
  <c3m-tab-panel tabTitle="Sixth Tab" svgId="nav-feedbacks" svgTitle="Feedbacks" >
    <p>This is the content of sixth tab</p>
  </c3m-tab-panel>
</c3m-tabs>`;
}
