import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCreamLibModule } from '../../projects/ngx-cream-lib/src/lib/ngx-cream-lib.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionPageComponent } from './pages/accordion-page/accordion-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortalLayoutComponent } from './portal-layout/portal-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { CustomDesignComponent } from './pages/custom-design/custom-design.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { CollapsiblePageComponent } from './pages/collapsible-page/collapsible-page.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { SnackbarPageComponent } from './pages/snackbar-page/snackbar-page.component';
import { ToastPageComponent } from './pages/toast-page/toast-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalLayoutComponent,
    AccordionPageComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    MainNavigationComponent,
    TabsPageComponent,
    MessagePageComponent,
    CustomDesignComponent,
    GettingStartedComponent,
    CollapsiblePageComponent,
    ModalPageComponent,
    SnackbarPageComponent,
    ToastPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxCreamLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
