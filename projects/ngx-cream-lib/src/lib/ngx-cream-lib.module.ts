import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { AccordionComponent } from './accordion/accordion.component';
import { HComponent } from './h/h.component';
import { TabPanelComponent } from './tabs/tab-panel/tab-panel.component';
import { TabsComponent } from './tabs/tabs.component';
import { MessageBlockComponent } from './message-block/message-block.component';
import { FocusOnPageChangeDirective } from './directives/focus-on-page-change.directive';

const components = [
  AccordionComponent,
  AccordionItemComponent,
  HComponent,
  TabsComponent,
  TabPanelComponent,
  MessageBlockComponent,
  FocusOnPageChangeDirective
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    DragDropModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [...components],
})
export class NgxCreamLibModule {}
