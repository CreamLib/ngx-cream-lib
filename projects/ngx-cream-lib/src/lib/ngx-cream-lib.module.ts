import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { ModalComponent } from './modal/modal.component';
import { ModalTriggerComponent } from './modal/modal-trigger/modal-trigger.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ToastComponent } from './toast/toast.component';
import { ChipComponent } from './chip/chip.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown/dropdown-item/dropdown-item.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TextEllipsisComponent } from './text-ellipsis/text-ellipsis.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { TooltipDirective } from './directives/tooltip.directive';

const components = [
  AccordionComponent,
  AccordionItemComponent,
  HComponent,
  TabsComponent,
  TabPanelComponent,
  MessageBlockComponent,
  FocusOnPageChangeDirective,
  CollapsibleComponent,
  ModalComponent,
  AutofocusDirective,
  ModalTriggerComponent,
  SnackbarComponent,
  ToastComponent,
  ChipComponent,
  DropdownComponent,
  DropdownItemComponent,
  ProgressSpinnerComponent,
  TextEllipsisComponent,
  IconButtonComponent,
  TooltipDirective,
];

@NgModule({
  declarations: [...components, AutofocusDirective, IconButtonComponent],
  imports: [CommonModule, RouterModule, DragDropModule, BrowserModule, BrowserAnimationsModule],
  exports: [...components],
})
export class NgxCreamLibModule {}
