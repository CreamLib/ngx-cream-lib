import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'c3m-h',
  template: `
    <ng-template #content><ng-content></ng-content></ng-template>
    <ng-container [ngSwitch]="titleLevel">
      <h1 *ngSwitchCase="'1'">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </h1>
      <h2 *ngSwitchCase="'2'">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </h2>
      <h3 *ngSwitchCase="'3'">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </h3>
      <h4 *ngSwitchCase="'4'">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </h4>
      <h5 *ngSwitchCase="'5'">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </h5>
      <h6 *ngSwitchCase="'6'">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </h6>
    </ng-container>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class HComponent {
  @Input() titleLevel: '1' | '2' | '3' | '4' | '5' | '6' = '2';
}
