import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionPageComponent } from './pages/accordion-page/accordion-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortalLayoutComponent } from './portal-layout/portal-layout.component';

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
    ],
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
