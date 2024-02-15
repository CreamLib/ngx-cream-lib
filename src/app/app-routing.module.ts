import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionPageComponent } from './pages/accordion-page/accordion-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortalLayoutComponent } from './portal-layout/portal-layout.component';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { CustomDesignComponent } from './pages/custom-design/custom-design.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { CollapsiblePageComponent } from './pages/collapsible-page/collapsible-page.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { SnackbarPageComponent } from './pages/snackbar-page/snackbar-page.component';
import { ToastPageComponent } from './pages/toast-page/toast-page.component';
import { ChipPageComponent } from './pages/chip-page/chip-page.component';
import { DropdownPageComponent } from './pages/dropdown-page/dropdown-page.component';
import { IconBtPageComponent } from './pages/icon-bt-page/icon-bt-page.component';
import { ProgressSpinnerPageComponent } from './pages/progress-spinner-page/progress-spinner-page.component';
import { TextEllipsisPageComponent } from './pages/text-ellipsis-page/text-ellipsis-page.component';
import { TooltipPageComponent } from './pages/tooltip-page/tooltip-page.component';
import { ConfigPageComponent } from './pages/config-page/config-page.component';
import { DesignBasicsPageComponent } from './pages/design-basics-page/design-basics-page.component';
import { FormDesignPageComponent } from './pages/form-design-page/form-design-page.component';
import { IconographyPageComponent } from './pages/iconography-page/iconography-page.component';
import { FocusOnChangePageComponent } from './pages/focus-on-change-page/focus-on-change-page.component';
import { AutocompletePageComponent } from './pages/autocomplete-page/autocomplete-page.component';
import { CardPageComponent } from './pages/card-page/card-page.component';

const routes: Routes = [
  //Portal (doc) routes goes here
  {
    path: 'portal',
    component: PortalLayoutComponent,
    children: [
      {
        path: 'accordion',
        component: AccordionPageComponent,
        data: { title: 'Accordion Component' },
      },
      {
        path: 'autocomplete',
        component: AutocompletePageComponent,
        data: { title: 'Autocomplete Component' },
      },
      {
        path: 'tabs',
        component: TabsPageComponent,
        data: { title: 'Tabs Component' },
      },
      {
        path: 'messages',
        component: MessagePageComponent,
        data: { title: 'Messages Component' },
      },
      {
        path: 'card',
        component: CardPageComponent,
        data: { title: 'Card' },
      },
      {
        path: 'custom-design',
        component: CustomDesignComponent,
        data: { title: 'Custom Design' },
      },
      {
        path: 'getting-started',
        component: GettingStartedComponent,
        data: { title: 'Getting Started' },
      },
      {
        path: 'collapsible',
        component: CollapsiblePageComponent,
        data: { title: 'Collapsible Block' },
      },
      {
        path: 'modal',
        component: ModalPageComponent,
        data: { title: 'Modal' },
      },
      {
        path: 'snackbar',
        component: SnackbarPageComponent,
        data: { title: 'Snackbar' },
      },
      {
        path: 'toast',
        component: ToastPageComponent,
        data: { title: 'Toast' },
      },
      {
        path: 'chip',
        component: ChipPageComponent,
        data: { title: 'Chip' },
      },
      {
        path: 'dropdown',
        component: DropdownPageComponent,
        data: { title: 'Dropdown' },
      },
      {
        path: 'icon-button',
        component: IconBtPageComponent,
        data: { title: 'Icon Button' },
      },
      {
        path: 'progress-spinner',
        component: ProgressSpinnerPageComponent,
        data: { title: 'Progress Spinner' },
      },
      {
        path: 'text-ellipsis',
        component: TextEllipsisPageComponent,
        data: { title: 'Text Ellipsis' },
      },
      {
        path: 'tooltip',
        component: TooltipPageComponent,
        data: { title: 'Tooltip Directive' },
      },
      {
        path: 'config',
        component: ConfigPageComponent,
        data: { title: 'Configuring CreamNg' },
      },
      {
        path: 'design-basics',
        component: DesignBasicsPageComponent,
        data: { title: 'CreamNg Design Basics' },
      },
      {
        path: 'iconography',
        component: IconographyPageComponent,
        data: { title: 'Iconography' },
      },
      {
        path: 'form-design',
        component: FormDesignPageComponent,
        data: { title: 'Form Design' },
      },
      {
        path: 'focus-on-page-change',
        component: FocusOnChangePageComponent,
        data: { title: 'Focus on Page Change Directive' },
      },
    ],
  },
  { path: 'home', component: HomePageComponent, data: { title: 'CreamNg' } },
  // otherwise redirect to home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
