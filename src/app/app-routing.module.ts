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
      }
    ]
  },
  { path: 'home', component: HomePageComponent, data: { title: 'Cream Lib' } },
  // otherwise redirect to home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
